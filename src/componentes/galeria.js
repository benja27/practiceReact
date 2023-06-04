function Galeria(){

    const cards = []

    for(let i = 0; i < 20; i++){
        cards.push(
            <div class="card">
                <div class="card-header">
                    Header
                </div>
                <div class="card-body">
                    <h4 class="card-title">Title</h4>
                    <p class="card-text">Text</p>
                </div>
                <div class="card-footer text-muted">
                    Footer
                </div>
            </div>
        )
    }



    return  <div className="galery-container">{cards}</div>
    
}

export default Galeria;