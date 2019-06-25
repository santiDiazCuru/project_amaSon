import React from 'react'

export default ({ handleSubmit, handleTitle, handleDescription, handlePrice, handleStock,
    handleImg1, handleImg2, handleImg3, handleCategory, response, newCategory }) => (
        <div className="col-sm-5 col-sm-offset-3 col-md-5 col-md-offset-2 main">
            <form onSubmit={handleSubmit}>
                Formulario:
                    {/* FORMULARIO */}
                {(response === 'ok') &&
                    <div>
                        <div className="alert alert-success">
                            <strong>Atención!</strong> Los productos se han creado de forma exitosa..
                        </div>
                    </div>
                }
                {(response === 'error') &&
                    <div>
                        <div className="alert alert-danger">
                            <strong>Lo siento!</strong> Hubo un error al procesar la creaciń..
                        </div>
                    </div>
                }
                <div>
                    <div className="input-group input-group-md">
                        <span className="input-group-addon">Titulo:</span>
                        <input type="text" onChange={handleTitle} className="form-control" name="titulo" placeholder="Titulo del producto.." />
                    </div>
                    <div className="input-group input-group-md">
                        <span className="input-group-addon">Descripción:</span>
                        <input type="text" onChange={handleDescription} className="form-control" name="descripcion" placeholder="Descripción del producto.." />
                    </div>
                    <div className="input-group input-group-md">
                        <span className="input-group-addon">Precio:</span>
                        <input type="number" onChange={handlePrice} className="form-control" min="0" name="precio" placeholder="Precio del producto.." />
                        <span className="input-group-addon">Stock:</span>
                        <input type="number" onChange={handleStock} className="form-control" min="0" name="stock" placeholder="Stock del producto.." />
                    </div>

                    <div className="input-group input-group-md" style={({ marginTop: 5 })}>
                        <span className="input-group-addon">Imagen 1:</span>
                        <input type="text" onChange={handleImg1} className="form-control" name="img1" placeholder="Imagen Principal" />
                    </div>
                    <div className="input-group input-group-md">
                        <span className="input-group-addon">Imagen 2:</span>
                        <input type="text" onChange={handleImg2} className="form-control" name="img2" placeholder="Imagen 2 (Opcional)" />
                    </div>
                    <div className="input-group input-group-md">
                        <span className="input-group-addon">Imagen 3:</span>
                        <input type="text" onChange={handleImg3} className="form-control" name="img3" placeholder="Imagen 3 (Opcional)" />
                    </div>

                    <div style={({ marginTop: 18 })} >
                        Selecciona una Categoria:
                        </div>
                    <label className="btn btn-block btn-default">Televisores <input onChange={handleCategory} value="televisores" type='checkbox' name='categoria' /></label>
                    <label className="btn btn-block btn-default">Notebooks <input onChange={handleCategory} value="notebook" type='checkbox' name='categoria' /></label>
                    <label className="btn btn-block btn-default">Tablets <input onChange={handleCategory} value="tablets" type='checkbox' name='categoria' /></label>
                    <label className="btn btn-block btn-default">Heladeras <input onChange={handleCategory} value="heladeras" type='checkbox' name='categoria' /></label>
                    <label className="btn btn-block btn-default">Celulares <input onChange={handleCategory} value="celulares" type='checkbox' name='categoria' /></label>
                    <label className="btn btn-block btn-default">Microondas <input onChange={handleCategory} value="microondas" type='checkbox' name='categoria' /></label>

                    <div className="input-group input-group-md" style={({ marginTop: 8 })}>
                        <input type="text" className="form-control" name="newCategoria3"
                            placeholder="Nombre nueva categoria.." />
                        <span className="input-group-btn">
                            <button className="btn btn-info" >Agregar Categoria</button>
                        </span>
                    </div>
                    <span >
                        x Celulares
                        <ul>
                            {newCategory.map(category =>
                                <li key={`cat_${category}`} style={({listStyle:"none"})}>
                                <span onClick={()=>handleDelete(category)}>X</span>
                                {category}</li>
                            )}
                        </ul>
                    </span>
                    <hr />
                    <button className="btn btn-success btn-block" type="submit">Crear Producto</button>

                </div>
            </form>
        </div>
    )
