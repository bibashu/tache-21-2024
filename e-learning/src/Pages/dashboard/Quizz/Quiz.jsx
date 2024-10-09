// import React, { useState, useEffect } from 'react';
// import Layout from "../../../Layouts/Layout";
// import "../Quizz/Quiz.css";
// import { QuizAPI } from '../../../api/api-Quiz';  // Importer l'API
// import QuizData from './QuizData';



// const Quiz = () => {
//   const [questions, setQuestions] = useState([]);  // État pour stocker les questions
//   const [responses, setResponses] = useState([]);
//   const [score, setScore] = useState(null);
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     // Récupérer les questions depuis l'API au chargement du composant
//     const fetchQuestions = async () => {
//       try {
//         const data = await QuizAPI.fetchAll();  // Appel à l'API
//         setQuestions(data);  // Stocker les questions récupérées
//         setResponses(Array(data.length).fill(null));  // Initialiser les réponses avec la longueur des questions
//         setResults(Array(data.length).fill(null));  // Initialiser les résultats
//       } catch (error) {
//         console.error("Erreur lors de la récupération des questions :", error);
//       }
//     };

//     fetchQuestions();  // Appel de la fonction lors du chargement
//   }, []);

//   const handleChange = (index, value) => {
//     const newResponses = [...responses];
//     newResponses[index] = value;
//     setResponses(newResponses);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let newScore = 0;
//     const newResults = responses.map((response, index) => {
//       if (response === questions[index].correctAnswer) {  // Utiliser la bonne réponse depuis les données récupérées
//         newScore++;
//         return true; // Correct
//       } else {
//         return false; // Incorrect
//       }
//     });
//     setScore(newScore);
//     setResults(newResults);
//   };

//   return (
//     <Layout>
//       <div id="global" className="site-global py-5">
//         <div id="page" className="site-page">
//           <div className="quiz-container">
//             <h2>Quiz JavaScript / DOM débutant</h2>
//             <form onSubmit={handleSubmit}>
//               {questions.map((question, index) => (
//                 <div key={index} className="quiz-question py-5">
//                   <div className="quiz-numero"><span>{index + 1}</span></div>
//                   <div className="quiz-txt">
//                     <p className="quiz-intitule">{question.text}</p>
//                     <div className="quiz-choix">
//                       <ul>
//                         {question.answers.map((answer, ansIndex) => (
//                           <li key={ansIndex}>
//                             <input 
//                               type="radio" 
//                               name={`rep[${index}]`} 
//                               value={ansIndex} 
//                               id={`q${index}r${ansIndex}`} 
//                               onChange={() => handleChange(index, ansIndex)} 
//                             />
//                             <label htmlFor={`q${index}r${ansIndex}`}>{answer}</label>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                   {results[index] !== null && <span>{results[index] ? '✅' : '❌'}</span>}
//                 </div>
//               ))}
//               <p className="center quiz-submit py-5">
//                 <input type="submit" value="Valider les réponses" className="awesome orange large" />
//               </p>
//             </form>

//             {score !== null && (
//               <div className="result">
//                 <h3>Votre score : {score} / {questions.length}</h3>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Quiz;


import React, { useState, useEffect } from 'react';

   function Quiz() {
       const [questions, setQuestions] = useState([]);

       useEffect(() => {
           fetchQuestions(); 
       }, []);

       const fetchQuestions = async () => {
           try {
               const response = await fetch('http://localhost:5000/Quizz/api_quizz');
               console.log('API Normal')
               const data = await response.json();
               setQuestions(data); 
           } catch (error) {
               console.error('Error fetching questions:', error);
           }
       };

       return (
           <div>
               {questions.length > 0 ? ( // Only render the list if questions are available
                   <ul>
                       {questions.map((question, index) => (
                           <li key={index}>{question.questionText}</li> // Replace with your actual question rendering logic
                       ))}
                   </ul>
               ) : (
                   <p>Loading questions...</p> // Or display a loading indicator
               )}
           </div>
       );
   }

   export default Quiz;
   