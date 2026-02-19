import Navbar from "../components/navbar";

function Detail(){
    return(
        <>
            <Navbar/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <img 
                        src="https://avatars.mds.yandex.net/i?id=ac546cffd8311654ed26b663474c34b0f206d0a9-16972600-images-thumbs&n=13" 
                        alt=""
                        width={'100%'}
                        />
                        <h2>Card title</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, maiores obcaecati. Perferendis officia, debitis ducimus, et quia doloribus culpa voluptatem in illo sequi ipsa quod? Esse repudiandae quas unde quisquam.</p>
                        <button className="btn btn-danger">Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail;