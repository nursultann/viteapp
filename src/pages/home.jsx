import Navbar from "../components/navbar";

function Home() {
    return (
        <>
            <Navbar/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <img src="https://avatars.mds.yandex.net/i?id=f93d295374d23e9134464fff50597ceddaf1f9bf-12983374-images-thumbs&n=13" alt="" srcset="" width={'100%'} />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores est voluptate dignissimos deserunt delectus quae molestiae, repudiandae cupiditate laborum unde vero veniam velit a, inventore dicta dolorum! Harum, libero error.</p>
                    </div>
                    <div className="col-3">
                        <img src="https://avatars.mds.yandex.net/i?id=f93d295374d23e9134464fff50597ceddaf1f9bf-12983374-images-thumbs&n=13" alt="" width={'100%'} />
                    </div>
                    <div className="col-3">
                        <img src="https://avatars.mds.yandex.net/i?id=f93d295374d23e9134464fff50597ceddaf1f9bf-12983374-images-thumbs&n=13" alt="" width={'100%'} />
                    </div>
                    <div className="col-3">
                        <img src="https://avatars.mds.yandex.net/i?id=f93d295374d23e9134464fff50597ceddaf1f9bf-12983374-images-thumbs&n=13" alt="" width={'100%'} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;