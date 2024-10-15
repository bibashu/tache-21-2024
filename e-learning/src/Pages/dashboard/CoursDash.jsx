import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from 'Layouts/Layout';

const CoursDash = () => {
  const [cours, setCours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCourses, setActiveCourses] = useState(
    JSON.parse(localStorage.getItem('activeCourses')) || []
  ); // Récupérer les cours actifs du localStorage

  const user = JSON.parse(localStorage.getItem('user'));
  const studentId = user ? user.id : null;
  
  useEffect(() => {
    if (!studentId) {
      setError("Aucun ID étudiant trouvé.");
      return;
    }
  
    const fetchCours = async () => {
      try {
        const response = await axios.get(`https://tache-21-2024.onrender.com/cours/api_cours`);
        const filteredCours = response.data.filter(cour => !cour.archive);
        setCours(filteredCours);
        setLoading(false);
      } catch (err) {
        setError('Une erreur s\'est produite lors de la récupération des cours.');
        setLoading(false);
      }
    };
  
    fetchCours();
  }, [studentId]);
  

  // Mettre à jour le localStorage lorsqu'on démarre un cours ou termine un cours
  const updateLocalStorage = (courses) => {
    localStorage.setItem('activeCourses', JSON.stringify(courses));
  };

  const startCourse = (courseId, duration) => {
    const updatedCourses = [
      ...activeCourses,
      { id: courseId, startTime: new Date(), duration, isFinished: false }
    ];
    setActiveCourses(updatedCourses);
    updateLocalStorage(updatedCourses);
  };

  const finishCourse = (courseId) => {
    const updatedCourses = activeCourses.map(course =>
      course.id === courseId ? { ...course, isFinished: true } : course
    );
    setActiveCourses(updatedCourses);
    updateLocalStorage(updatedCourses);
  };

  const isCourseFinished = (courseId) => {
    const activeCourse = activeCourses.find(course => course.id === courseId);
    if (!activeCourse) return false;
    const elapsedTime = new Date() - new Date(activeCourse.startTime);
    return elapsedTime >= activeCourse.duration * 60 * 1000 || activeCourse.isFinished;
  };

  if (loading) return <div>Chargement des cours...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Layout userData={user}>
      <h1>Liste des Cours Assignés</h1>
      <ul className='p-2'>
        {cours.map((cour) => {
          const courseActive = activeCourses.find(course => course.id === cour._id && !course.isFinished);
          const courseFinished = isCourseFinished(cour._id);

          return (
            <div key={cour._id}>
              <div className="card-body">
                <h5>{cour.nom_cours}</h5>
                <p>Description: {cour.description}</p>
                <p>Durée: {cour.duree}</p>

                {courseFinished ? (
                  <p className='text-danger fw-bold '>Ce cours est terminé !</p>
                ) : courseActive ? (
                  <>
                    <button 
                      className='btn btn-danger mt-2 w-50' 
                      onClick={() => finishCourse(cour._id)}
                    >
                      Terminer le Cours
                    </button>
                  </>
                ) : (
                  <button 
                    className='btn mt-2 w-50'
                    style={{ backgroundColor: '#FC9049', color: "#fff" }}  
                    onClick={() => startCourse(cour._id, parseInt(cour.duree))}
                  >
                    Démarrer le Cours
                  </button>
                )}
              </div>
              <hr />
            </div>
          );
        })}
      </ul>
    </Layout>
  );
};

export default CoursDash;
