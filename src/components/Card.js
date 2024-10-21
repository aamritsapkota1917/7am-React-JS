import React from 'react'

const Card = () => {
  return (
    <div className="container my-3">
        <div className="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <div className="card shadow p-1">
      <img src="https://static-01.daraz.com.np/p/9fd04d209bb09fed74cf5fc567b1db69.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <a href="" className="btn btn-primary">View Detais</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://static-01.daraz.com.np/p/e65a906edf891e8d9759857ebd50da94.jpg_400x400q75-product.jpg_.webp" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <a href="" className="btn btn-primary">View Detais</a>

      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://static-01.daraz.com.np/p/d87d8d4c8117c160f90aee097dc94e7c.jpg_400x400q75-product.jpg_.webp" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
<a href="" className="btn btn-primary">View Detais</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://static-01.daraz.com.np/p/a4a656a113261b015d25486aa6bb9b45.jpg_400x400q75-product.jpg_.webp" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <a href="" className="btn btn-primary">View Detais</a>

      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Card