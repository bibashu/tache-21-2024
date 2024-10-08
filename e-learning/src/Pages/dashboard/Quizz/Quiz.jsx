import React, { useState } from 'react';
import Layout from "../../../Layouts/Layout";
import "../Quizz/Quiz.css";

const Quiz = () => {
  const [responses, setResponses] = useState(Array(10).fill(null));
  const [score, setScore] = useState(null);
  const [results, setResults] = useState(Array(10).fill(null));

  const correctAnswers = [4, 1, 4, 4, 3, 3, 4, 2, 0, 4]; // Indices des bonnes réponses

  const handleChange = (index, value) => {
    const newResponses = [...responses];
    newResponses[index] = value;
    setResponses(newResponses);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newScore = 0;
    const newResults = responses.map((response, index) => {
      if (response === correctAnswers[index]) {
        newScore++;
        return true; // Correct
      } else {
        return false; // Incorrect
      }
    });
    setScore(newScore);
    setResults(newResults);
  };

  return (
    
    <Layout>
         <div id="global" className="site-global">
         <div id="page" className="site-page">
      <div className="quiz-container">
        <h2>Quiz JavaScript / DOM débutant</h2>
        <form onSubmit={handleSubmit}>
          {/* Question 1 */}
          <div className="quiz-question py-5">
            <div className="quiz-numero"><span>1</span></div>
            <div className="quiz-txt">
              <p className="quiz-intitule">Quel est le rapport entre Java et JavaScript ?</p>
              <div className="quiz-choix">
                <ul>
                  <li>
                    <input type="radio" name="rep[0]" value={1} id="q0r1" onChange={() => handleChange(0, 1)} />
                    <label htmlFor="q0r1"> C'est le même langage, mais le nom JavaScript est utilisé pour le code s'exécutant dans une page Web.</label>
                  </li>
                  <li>
                    <input type="radio" name="rep[0]" value={2} id="q0r2" onChange={() => handleChange(0, 2)} />
                    <label htmlFor="q0r2">Ce sont deux langages différents, malgré quelques points communs dans la syntaxe.</label>
                  </li>
                  <li>
                    <input type="radio" name="rep[0]" value={3} id="q0r3" onChange={() => handleChange(0, 3)} />
                    <label htmlFor="q0r3"> Java est une version améliorée de JavaScript.</label>
                  </li>
                  <li>
                    <input type="radio" name="rep[0]" value={4} id="q0r4" onChange={() => handleChange(0, 4)} />
                    <label htmlFor="q0r4">Java est une île, ça n'a rien à voir !</label>
                  </li>
                </ul>
              </div>
            </div>
            {results[0] !== null && <span>{results[0] ? '✅' : '❌'}</span>}
          </div>

          {/* Question 2 */}
          <div className="quiz-question py-5">
            <div className="quiz-numero"><span>2</span></div>
            <div className="quiz-txt">
              <p className="quiz-intitule">Laquelle de ces syntaxes est correcte ?</p>
              <div className="quiz-choix">
                <ul>
                  <li>
                    <input type="radio" name="rep[1]" value={1} id="q1r1" onChange={() => handleChange(1, 1)} />
                    <label htmlFor="q1r1">if (a != 2) {}</label>
                  </li>
                  <li>
                    <input type="radio" name="rep[1]" value={2} id="q1r2" onChange={() => handleChange(1, 2)} />
                    <label htmlFor="q1r2">if a != 2 {}</label>
                  </li>
                  <li>
                    <input type="radio" name="rep[1]" value={3} id="q1r3" onChange={() => handleChange(1, 3)} />
                    <label htmlFor="q1r3">if (a &lt;&gt; 2) {}</label>
                  </li>
                  <li>
                    <input type="radio" name="rep[1]" value={4} id="q1r4" onChange={() => handleChange(1, 4)} />
                    <label htmlFor="q1r4">if a &lt;&gt; 2 {}</label>
                  </li>
                </ul>
              </div>
            </div>
            {results[1] !== null && <span>{results[1] ? '✅' : '❌'}</span>}
          </div>

          {/* Question 3 */}
          <div className="quiz-question py-5">
            <div className="quiz-numero"><span>3</span></div>
            <div className="quiz-txt">
              <p className="quiz-intitule">Quel attribut des noeuds de l'arbre DOM correspond à l'attribut HTML class ?</p>
              <div className="quiz-choix">
                <ul>
                  <li>
                    <input type="radio" name="rep[2]" value={1} id="q2r1" onChange={() => handleChange(2, 1)} />
                    <label htmlFor="q2r1">class</label>
                  </li>
                  <li>
                    <input type="radio" name="rep[2]" value={2} id="q2r2" onChange={() => handleChange(2, 2)} />
                    <label htmlFor="q2r2">CLASS</label>
                  </li>
                  <li>
                    <input type="radio" name="rep[2]" value={3} id="q2r3" onChange={() => handleChange(2, 3)} />
                    <label htmlFor="q2r3">className</label>
                  </li>
                  <li>
                    <input type="radio" name="rep[2]" value={4} id="q2r4" onChange={() => handleChange(2, 4)} />
                    <label htmlFor="q2r4">listClass</label>
                  </li>
                </ul>
              </div>
            </div>
            {results[2] !== null && <span>{results[2] ? '✅' : '❌'}</span>}
          </div>

          {/* Question 4 */}
          <div className="quiz-question py-5">
            <div className="quiz-numero"><span>4</span></div>
            <div className="quiz-txt">
              <p className="quiz-intitule">Dans un fichier JavaScript externe (.js), il faut :</p>
              <div className="quiz-choix">
                <ul>
                  <li>
                    <input type="radio" name="rep[3]" value={1} id="q3r1" onChange={() => handleChange(3, 1)} />
                    <label htmlFor="q3r1">entourer le code avec les balises <script> et </script>.</label>
                  </li>
                  <li>
                    <input type="radio" name="rep[3]" value={2} id="q3r2" onChange={() => handleChange(3, 2)} />
                    <label htmlFor="q3r2">préciser l’encodage du fichier avec la règle @charset.</label>
                  </li>
                  <li>
                    <input type="radio" name="rep[3]" value={3} id="q3r3" onChange={() => handleChange(3, 3)} />
                    <label htmlFor="q3r3">échapper les caractères spéciaux (X)HTML.</label>
                  </li>
                  <li>
                    <input type="radio" name="rep[3]" value={4} id="q3r4" onChange={() => handleChange(3, 4)} />
                    <label htmlFor="q3r4">Aucune des réponses précédentes.</label>
                  </li>
                </ul>
              </div>
            </div>
            {results[3] !== null && <span>{results[3] ? '✅' : '❌'}</span>}
          </div>

          {/* Question 5 */}
          <div className="quiz-question py-5">
            <div className="quiz-numero"><span>5</span></div>
            <div className="quiz-txt">
              <p className="quiz-intitule">Lequel de ces types d'événements n'existe pas ?</p>
              <div className="quiz-choix">
                <ul>
                  <li>
                    <input type="radio" name="rep[4]" value={1} id="q4r1" onChange={() => handleChange(4, 1)} />
                    <label htmlFor="q4r1">blur</label>
                  </li>
                  <li>
                    <input type="radio" name="rep[4]" value={2} id="q4r2" onChange={() => handleChange(4, 2)} />
                    <label htmlFor="q4r2">focus</label>
                  </li>
                  <li>
                    <input type="radio" name="rep[4]" value={3} id="q4r3" onChange={() => handleChange(4, 3)} />
                    <label htmlFor="q4r3">zoom</label>
                  </li>
                  <li>
                    <input type="radio" name="rep[4]" value={4} id="q4r4" onChange={() => handleChange(4, 4)} />
                    <label htmlFor="q4r4">change</label>
                  </li>
                </ul>
              </div>
            </div>
            {results[4] !== null && <span>{results[4] ? '✅' : '❌'}</span>}
          </div>

          {/* Question 6 */}
          <div className="quiz-question py-5">
            <div className="quiz-numero"><span>6</span></div>
            <div className="quiz-txt">
              <p className="quiz-intitule">Quel opérateur est utilisé pour tester l'égalité ?</p>
              <div className="quiz-choix">
                <ul>
                  <li>
                    <input type="radio" name="rep[5]" value={1} id="q5r1" onChange={() => handleChange(5, 1)} />
                    <label htmlFor="q5r1">=</label>
                  </li>
                  <li>
                    <input type="radio" name="rep[5]" value={2} id="q5r2" onChange={() => handleChange(5, 2)} />
                    <label htmlFor="q5r2">==</label>
                  </li>
                  <li>
                    <input type="radio" name="rep[5]" value={3} id="q5r3" onChange={() => handleChange(5, 3)} />
                    <label htmlFor="q5r3">===</label>
                  </li>
                  <li>
                    <input type="radio" name="rep[5]" value={4} id="q5r4" onChange={() => handleChange(5, 4)} />
                    <label htmlFor="q5r4">!=</label>
                  </li>
                </ul>
              </div>
            </div>
            {results[5] !== null && <span>{results[5] ? '✅' : '❌'}</span>}
          </div>

          {/* Question 7 */}
          <div className="quiz-question py-5">
            <div className="quiz-numero"><span>7</span></div>
            <div className="quiz-txt">
              <p className="quiz-intitule">Comment déclare-t-on une variable en JavaScript ?</p>
              <div className="quiz-choix">
                <ul>
                  <li>
                    <input type="radio" name="rep[6]" value={1} id="q6r1" onChange={() => handleChange(6, 1)} />
                    <label htmlFor="q6r1">variable x;</label>
                  </li>
                  <li>
                    <input type="radio" name="rep[6]" value={2} id="q6r2" onChange={() => handleChange(6, 2)} />
                    <label htmlFor="q6r2">var x;</label>
                  </li>
                  <li>
                    <input type="radio" name="rep[6]" value={3} id="q6r3" onChange={() => handleChange(6, 3)} />
                    <label htmlFor="q6r3">let x;</label>
                  </li>
                  <li>
                    <input type="radio" name="rep[6]" value={4} id="q6r4" onChange={() => handleChange(6, 4)} />
                    <label htmlFor="q6r4">const x;</label>
                  </li>
                </ul>
              </div>
            </div>
            {results[6] !== null && <span>{results[6] ? '✅' : '❌'}</span>}
          </div>

          {/* Question 8 */}
          <div className="quiz-question py-5">
            <div className="quiz-numero"><span>8</span></div>
            <div className="quiz-txt">
              <p className="quiz-intitule">Quelle est la méthode pour transformer une chaîne en tableau en JavaScript ?</p>
              <div className="quiz-choix">
                <ul>
                  <li>
                    <input type="radio" name="rep[7]" value={1} id="q7r1" onChange={() => handleChange(7, 1)} />
                    <label htmlFor="q7r1">split()</label>
                  </li>
                  <li>
                    <input type="radio" name="rep[7]" value={2} id="q7r2" onChange={() => handleChange(7, 2)} />
                    <label htmlFor="q7r2">join()</label>
                  </li>
                  <li>
                    <input type="radio" name="rep[7]" value={3} id="q7r3" onChange={() => handleChange(7, 3)} />
                    <label htmlFor="q7r3">slice()</label>
                  </li>
                  <li>
                    <input type="radio" name="rep[7]" value={4} id="q7r4" onChange={() => handleChange(7, 4)} />
                    <label htmlFor="q7r4">concat()</label>
                  </li>
                </ul>
              </div>
            </div>
            {results[7] !== null && <span>{results[7] ? '✅' : '❌'}</span>}
          </div>

          {/* Question 9 */}
          <div className="quiz-question py-5">
            <div className="quiz-numero"><span>9</span></div>
            <div className="quiz-txt">
              <p className="quiz-intitule">Quelle est la bonne syntaxe pour ajouter un événement en JavaScript ?</p>
              <div className="quiz-choix">
                <ul>
                  <li>
                    <input type="radio" name="rep[8]" value={1} id="q8r1" onChange={() => handleChange(8, 1)} />
                    <label htmlFor="q8r1">element.addEventListener('click', function() { });</label>
                  </li>
                  <li>
                    <input type="radio" name="rep[8]" value={2} id="q8r2" onChange={() => handleChange(8, 2)} />
                    <label htmlFor="q8r2">element.on('click', function() { });</label>
                  </li>
                  <li>
                    <input type="radio" name="rep[8]" value={3} id="q8r3" onChange={() => handleChange(8, 3)} />
                    <label htmlFor="q8r3">element.addEvent('click', function() { });</label>
                  </li>
                  <li>
                    <input type="radio" name="rep[8]" value={4} id="q8r4" onChange={() => handleChange(8, 4)} />
                    <label htmlFor="q8r4">element.addEventListener('click');</label>
                  </li>
                </ul>
              </div>
            </div>
            {results[8] !== null && <span>{results[8] ? '✅' : '❌'}</span>}
          </div>

          {/* Question 10 */}
          <div className="quiz-question py-5">
            <div className="quiz-numero"><span>10</span></div>
            <div className="quiz-txt">
              <p className="quiz-intitule">Quelle méthode est utilisée pour convertir une chaîne de caractères en entier ?</p>
              <div className="quiz-choix">
                <ul>
                  <li>
                    <input type="radio" name="rep[9]" value={1} id="q9r1" onChange={() => handleChange(9, 1)} />
                    <label htmlFor="q9r1">Number.parseInt()</label>
                  </li>
                  <li>
                    <input type="radio" name="rep[9]" value={2} id="q9r2" onChange={() => handleChange(9, 2)} />
                    <label htmlFor="q9r2">parseInt()</label>
                  </li>
                  <li>
                    <input type="radio" name="rep[9]" value={3} id="q9r3" onChange={() => handleChange(9, 3)} />
                    <label htmlFor="q9r3">Number.toInt()</label>
                  </li>
                  <li>
                    <input type="radio" name="rep[9]" value={4} id="q9r4" onChange={() => handleChange(9, 4)} />
                    <label htmlFor="q9r4">convertToInt()</label>
                  </li>
                </ul>
              </div>
            </div>
            {results[9] !== null && <span>{results[9] ? '✅' : '❌'}</span>}
          </div>
       
    
          <p className="center quiz-submit py-5">
            <input type="submit" value="Valider les réponses" className="awesome orange large" />
          </p>
        </form>

        {score !== null && (
          <div className="result">
            <h3>Votre score : {score} / 10</h3>
          </div>
        )}
      </div>
      </div>
      </div>
      
    </Layout>
  );
};

export default Quiz;
