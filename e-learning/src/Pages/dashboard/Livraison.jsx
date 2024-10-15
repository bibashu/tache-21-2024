
import React, { useState, useEffect } from "react";
import Layout from "Layouts/Layout";
import axios from "axios";
import ModalImage from "react-modal-image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.module.css"
import Swal from "sweetalert2";


const URL_LIVRAISON = "https://tache-21-2024.onrender.com/livraison/api_livraison";
const URL_LIVRER = "https://tache-21-2024.onrender.com/livraison/submitLivraison";

const Livraison = () => {
    const [livraisons, setLivraisons] = useState([]);
    const [projets, setProjets] = useState([]);
    const [formData, setFormData] = useState({
        project_id: "",
        delivery_link: "",
        screenshots: []
    });
    const [imagePreviews, setImagePreviews] = useState([]); // Nouvel état pour les prévisualisations d'image
    const [showForm, setShowForm] = useState(false);

    
  const user = JSON.parse(localStorage.getItem('user')); 
  const studentId = user ? user.id : null;

    useEffect(() => {
        const fetchLivraisons = async () => {
            try {
                const response = await axios.get(URL_LIVRAISON);
                setLivraisons(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des livraisons :", error);
            }
        };

        const fetchProjets = async () => {
            try {
                const response = await axios.get(`https://tache-21-2024.onrender.com/project/api_project/${studentId}`);
                setProjets(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des projets :", error);
            }
        };

        fetchLivraisons();
        fetchProjets();
    }, [studentId]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("project_id", formData.project_id);
        data.append("delivery_link", formData.delivery_link);

        if (formData.screenshots.length > 0) {
            for (let i = 0; i < formData.screenshots.length; i++) {
                data.append("screenshots", formData.screenshots[i]);
            }
        }

        // console.log("Données à envoyer :", formData);

        try {
            const response = await axios.post(URL_LIVRER, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            Swal.fire({
                title: "Livraison envoyée!",
                icon: "success",
              });
            setFormData({
                project_id: "",
                delivery_link: "",
                screenshots: []
            });
            setImagePreviews([]); // Réinitialiser les prévisualisations
            setLivraisons([...livraisons, response.data]);
        } catch (error) {
            console.error("Erreur lors de la soumission de la livraison :", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setFormData({ ...formData, screenshots: files });

        // Mettre à jour les prévisualisations des images
        const previews = files.map(file => URL.createObjectURL(file));
        setImagePreviews(previews);
    };

    return (
        <Layout userData={user}>
            <div className="container ">
                <button className="btn mt-4 w-50 w-lg-25"   style={{ backgroundColor: '#FC9049', color: "#fff" }} onClick={() => setShowForm(!showForm)}>
                    {showForm ? "Fermer" : "Soumettre une Livraison"}
                </button>

                {showForm && (
                    <form onSubmit={handleSubmit} className="w-50">
                        <h2>Soumettre une Livraison</h2>
                        <div className="mb-3">
                            <label htmlFor="project_id" className="form-label">Projet</label>
                            <select
                                className="form-control"
                                id="project_id"
                                name="project_id"
                                value={formData.project_id}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Sélectionnez un projet</option>
                                {projets.map((projet) => (
                                    <option key={projet._id} value={projet._id}>
                                        {projet.titre}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="delivery_link" className="form-label">Lien de livraison</label>
                            <input
                                type="url"
                                className="form-control"
                                id="delivery_link"
                                name="delivery_link"
                                value={formData.delivery_link}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="screenshots" className="form-label">Captures d'écran</label>
                            <input
                                type="file"
                                className="form-control"
                                id="screenshots"
                                name="screenshots"
                                multiple
                                onChange={handleFileChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-success  w-50 w-lg-25">Envoyer</button>
                    </form>
                )}

                {/* Affichage des prévisualisations d'images */}
                <div className="mt-4">
                    {imagePreviews.length > 0 && (
                        <div>
                            <h5>Prévisualisations des images :</h5>
                            <div className="row">
                                {imagePreviews.map((preview, index) => (
                                    <div key={index} className="col-md-4 mb-2">
                                        <img
                                            src={preview}
                                            alt={`Prévisualisation ${index + 1}`}
                                            className="img-fluid"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-5">
                    <h3>Livraisons précédentes</h3>
                    <div className="row">
                        {livraisons.length === 0 ? (
                            <p>Aucune livraison n'a encore été soumise.</p>
                        ) : (
                            livraisons.map((livraison) => {
                                const screenshots = livraison.screenshots || [];

                                const slidesToShow = screenshots.length < 2 ? screenshots.length : 1;

                                const settings = {
                                    dots: true,
                                    infinite: screenshots.length > 1,
                                    speed: 500,
                                    slidesToShow: slidesToShow,
                                    slidesToScroll: 1,
                                    responsive: [
                                        {
                                            breakpoint: 768,
                                            settings: {
                                                slidesToShow: 1,
                                                slidesToScroll: 1,
                                            },
                                        },
                                        {
                                            breakpoint: 1024,
                                            settings: {
                                                slidesToShow: 1,
                                                slidesToScroll: 1,
                                            },
                                        },
                                    ],
                                };

                                return (
                                    <div key={livraison._id} className="col-md-4 mb-4">
                                        <div className="card h-100 shadow">
                                            <div className="card-body">
                                                <h5 className="card-title">Projet : {livraison.project_id ? livraison.project_id.titre : 'Projet non défini'}</h5>
                                                <p className="card-text">Lien : <a href={livraison.delivery_link}>{livraison.delivery_link}</a></p>

                                                <div className="mt-2">
                                                    {screenshots.length === 0 ? (
                                                        <p>Aucune capture d'écran disponible.</p>
                                                    ) : (
                                                        <Slider {...settings}>
                                                            {screenshots.map((screenshot, index) => {
                                                                const sanitizedScreenshotPath = screenshot.replace(/\\/g, '/');
                                                                return (
                                                                    <div key={index}>
                                                                        <ModalImage
                                                                            small={`https://tache-21-2024.onrender.com/${sanitizedScreenshotPath}`}
                                                                            large={`https://tache-21-2024.onrender.com/${sanitizedScreenshotPath}`}
                                                                            alt={`Capture d'écran ${index + 1}`}
                                                                            className="img-fluid w-100 h-50"
                                                                        />
                                                                    </div>
                                                                );
                                                            })}
                                                        </Slider>
                                                    )}
                                                </div>
                                                <p className="card-text">Date de livraison : {new Date(livraison.submitted_at).toLocaleString()}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>

            </div>
        </Layout>
    );
};

export default Livraison;

