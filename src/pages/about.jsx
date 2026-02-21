import Footer from "../components/footer"
import Navbar from "../components/navbar"

function About() {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <div class="card">
                            <img src="https://avatars.mds.yandex.net/i?id=ea4bfe906a8e6af09485752d87ee0579010247d1-5289049-images-thumbs&n=13" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                    <a href="/detail" class="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default About