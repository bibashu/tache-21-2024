import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from 'Layouts/Layout';

const Projet = () => {
  const [projets, setProjets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const user = JSON.parse(localStorage.getItem('user')); 
  const studentId = user ? user.id : null;

  useEffect(() => {
    const fetchProjets = async () => {
      if (!studentId) {
        setError('ID de l\'étudiant non trouvé.');
        setLoading(false);
        return;
      }
      try {
        const response = await axios.get(`https://tache-21-2024.onrender.com/project/api_project/${studentId}`);

        setProjets(response.data);
        setLoading(false);
      } catch (err) {
        setError('Une erreur s\'est produite lors de la récupération des projets');
        setLoading(false);
      }
    };

    fetchProjets();
  }, [studentId]);

  if (loading) return <div>Chargement des projets...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Layout userData={user}>
      <h1>Liste des Projets</h1>
      <ul className='p-2'>
        {projets.map((projet) => (
          <div key={projet._id} className=''>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <p><span className="fw-semibold text-uppercase">{projet.titre}</span></p>
                  <p>Cours: <span className='fw-semibold'>{projet.cours?.nom_cours}</span></p>
                </div>
                <div>
                  <p>Date de création: {new Date(projet.createdAt).toLocaleDateString()}</p>
                  <p>Date de mise à jour: {new Date(projet.updatedAt).toLocaleDateString()}</p>
                </div>
              </div>
              <div>Description:</div>
              <p dangerouslySetInnerHTML={{ __html: projet.description }} />

            </div>
            <hr />
          </div>
        ))}
      </ul>
    </Layout>
  );
};


export default Projet;
