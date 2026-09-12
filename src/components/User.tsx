
<div>
            <div className='container mx-auto'>
            <h2 >Explore the Technologies</h2>
            <p>Pick one technology per category to build your ideal stack.</p>
                
            </div>
            <div className= 'grid grid-cols-12'>
                <div className='container mx-auto grid grid-cols-8'>
                    
                {
                    techno.map((tech:TecType) => {
                        return(
                    <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
            <img src={tech.icon} alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{tech.techName}</h2>
            <p>{tech.description}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Stack</button>
            </div>
        </div>
                    </div>
                        )
                    })
                }

                               
                </div>
                <div className='grid grid-cols-4 bg-amber-200'></div>
            </div>
        </div>
    )
}