import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "Layouts/Layout";
import "./Quiz.css";

const Quiz = () => {
  const [quizzes, setQuizzes] = useState([]); // Pour stocker plusieurs quiz
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userAnswers, setUserAnswers] = useState({}); // Suivre les réponses de l'utilisateur
  const [scores, setScores] = useState({}); // Pour stocker les scores par quiz
  const [resultsChecked, setResultsChecked] = useState({}); // Vérifier si les résultats d'un quiz ont été validés

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get(
          "https://tache-21-2024.onrender.com/Quizz/api_quizz"
        );

        if (Array.isArray(response.data) && response.data.length > 0) {
          setQuizzes(response.data); // Stocker tous les quiz
        } else {
          setError("Les données récupérées ne sont pas au format attendu.");
        }
      } catch (err) {
        console.error(err); // Log l'erreur pour le débogage
        setError("Une erreur s'est produite lors de la récupération des quiz.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, []);

  const handleCheckboxChange = (quizId, questionId, optionId) => {
    setUserAnswers((prevAnswers) => {
      const quizAnswers = prevAnswers[quizId] || {};
      const currentOptions = quizAnswers[questionId] || [];
      const newOptions = currentOptions.includes(optionId)
        ? currentOptions.filter((id) => id !== optionId)
        : [...currentOptions, optionId];

      return {
        ...prevAnswers,
        [quizId]: { ...quizAnswers, [questionId]: newOptions },
      };
    });
  };

  const handleSubmit = (quizId, quizQuestions) => {
    if (!quizQuestions) return; // Vérifie que les questions existent

    let calculatedScore = 0;

    quizQuestions.forEach((question) => {
      const correctOptionIndex =
        parseInt(question.correctAnswer.split(" ")[1], 10) - 1;

      if (
        correctOptionIndex >= 0 &&
        correctOptionIndex < question.options.length
      ) {
        const correctOptionId = question.options[correctOptionIndex]._id;

        if (userAnswers[quizId]?.[question._id]?.includes(correctOptionId)) {
          calculatedScore += 1;
        }
      }
    });

    setScores((prevScores) => ({ ...prevScores, [quizId]: calculatedScore }));
    setResultsChecked((prev) => ({ ...prev, [quizId]: true })); // Indique que les résultats ont été vérifiés pour ce quiz
  };

  if (loading) return <div>Chargement des quiz...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Layout userData={user}>
      <h1>Liste des Quiz</h1>
      {quizzes.map((quiz) => (
        <div key={quiz._id}>
          <h2>{quiz.titre}</h2>
          <p>{quiz.description}</p>
          <ul>
            {quiz.questions.map((question) => (
              <li key={question._id}>
                <div className="card-body">
                  <p>
                    <strong>{question.questionText}</strong>
                  </p>
                  <div>
                    {question.options.map((option) => (
                      <div key={option._id}>
                        <input
                          type="checkbox"
                          id={option._id}
                          onChange={() =>
                            handleCheckboxChange(
                              quiz._id,
                              question._id,
                              option._id
                            )
                          }
                          checked={
                            userAnswers[quiz._id]?.[question._id]?.includes(
                              option._id
                            ) || false
                          }
                        />
                        <label htmlFor={option._id}>{option.optionText}</label>
                        {resultsChecked[quiz._id] && (
                          <>
                            {option._id ===
                            question.options[
                              question.correctAnswer.split(" ")[1] - 1
                            ]._id ? (
                              <span style={{ color: "green" }}> {" ✔️"}</span> // Symbole pour bonne réponse
                            ) : (
                              userAnswers[quiz._id]?.[question._id]?.includes(
                                option._id
                              ) && (
                                <span style={{ color: "red" }}> {" ❌"}</span>
                              ) // Symbole pour mauvaise réponse
                            )}
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <hr />
              </li>
            ))}
          </ul>
          <button
            onClick={() => handleSubmit(quiz._id, quiz.questions)}
            className="Btn  mt-3"
          >
            Valider les réponses
          </button>
          {scores[quiz._id] !== undefined && (
            <div>
              Votre score pour ce quiz : {scores[quiz._id]} sur{" "}
              {quiz.questions.length}
            </div>
          )}
          <hr />
        </div>
      ))}
    </Layout>
  );
};

export default Quiz;
