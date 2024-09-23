import React, { useEffect, useState } from "react";
import './main.api.css';
import { CARDS } from "./main/card";

const MAIN_API = () => {
    const [data, setData] = useState({ title: "", authors: "", image: "", description: "" });
    const [textSearch, setTextSearch] = useState("antiracism");
    const [search, setSearch] = useState(textSearch);

    const [loading, setLoading] = useState(true);
    const [notification, setNotification] = useState("Digite algo!");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=1`);
                const result = await response.json();

                
                const bookData = result.items[0].volumeInfo;

                setData({
                    title: bookData.title,
                    authors: bookData.authors ? bookData.authors.join(", ") : "Autor não disponível",
                    image: bookData.imageLinks ? bookData.imageLinks.thumbnail : "https://via.placeholder.com/150", 
                    description: bookData.description || "Descrição não disponível"
                });

                setNotification("");
                setLoading(false);
            } catch (err) {
                setNotification("Erro ao buscar os dados. Verifique se o termo está correto.");
                setLoading(false);
            }
        };
        fetchData();
    }, [search]);

    const onSave = async (new_data) => {
        try {
            const payload = {
                title: new_data.title,
                authors: new_data.authors,
                image: new_data.image,
                description: new_data.description
            };

            const response = await fetch("http://localhost:3001/book/all", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log("Dados enviados com sucesso!", responseData);
            } else {
                console.error("Erro ao enviar dados", response.status, response.statusText);
            }
        } catch (error) {
            console.error("Erro no fetch:", error);
        }
    };

    const get_local = (new_data) => {
        setData({
            title: new_data.title,
            authors: new_data.authors,
            image: new_data.image,
            description: new_data.description
        });
    };

    return (
        <main>
            <section className="section_fetch">
                <div className="conatiner_search">
                    <input type="text" placeholder="Busque algo!" onChange={(text) => { setTextSearch(text.target.value) }} />
                    <span onClick={() => { setSearch(textSearch) }} className="material-symbols-outlined">search</span>
                </div>

                <p className="span_notification">{notification}</p>
                <div className="conatiner_main">
                    <div className="container_box">
                        <div>
                            <h3>{data.title}</h3>
                            <p>{data.authors}</p>
                        </div>
                        <img src={data.image} alt={data.title} />
                    </div>

                    <div style={{ height: "400px", overflowY: "scroll" }}>
                        <p><strong>Description: </strong>{data.description}</p>
                        <button className="button_post" onClick={() => onSave(data)}>EDIT</button>
                    </div>
                </div>
            </section>

            <section>
                {
                    loading ? (
                        <p>Carregando dados!</p>
                    ) : (
                        <CARDS init_data={data} init_save={onSave} get_local_props={get_local} />
                    )
                }
            </section>
        </main>
    );
};

export { MAIN_API };

