import React from 'react'
const random = Math.floor(Math.random()*101)

export default ({ handleSubmit, handleTitle, handleDescription, handlePrice, handleStock,
    handleImg1, handleImg2, handleImg3, handleCategory, state, handleDeleteActivas, handleCreateInput, handleAdd, handleDelete,listCategory }) => (
        <div className="col-sm-5 col-sm-offset-3 col-md-5 col-md-offset-2 main">
            <form onSubmit={handleSubmit}>
                Formulario:
                    {/* FORMULARIO */}
                {(state.response === 'ok') &&
                    <div>
                        <div className="alert alert-success">
                            <strong>Atención!</strong> Los productos se han creado de forma exitosa..
                        </div>
                    </div>
                }
                {(state.response === 'error') &&
                    <div>
                        <div className="alert alert-danger">
                            <strong>Lo siento!</strong> Hubo un error al procesar la creación..
                        </div>
                    </div>
                }
                {(state.response === 'categoria') &&
                    <div>
                        <div className="alert alert-danger">
                            <strong>Lo siento!</strong> Debes colocar al menos una categoria..
                        </div>
                    </div>
                }
                <div>
                    <div className="input-group input-group-md">
                        <span className="input-group-addon">Titulo:</span>
                        <input type="text" required
                        value={state.titulo} onChange={handleTitle} className="form-control" name="titulo" placeholder="Titulo del producto.." />
                    </div>
                    <div className="input-group input-group-md">
                        <span className="input-group-addon">Descripción:</span>
                        <input type="text" required
                        value={state.descripcion} onChange={handleDescription} className="form-control" name="descripcion" placeholder="Descripción del producto.." />
                    </div>
                    <div className="input-group input-group-md">
                        <span className="input-group-addon">Precio:</span>
                        <input type="number" required
                        value={state.precio} onChange={handlePrice} className="form-control" min="0" name="precio" placeholder="Precio del producto.." />
                        <span className="input-group-addon">Stock:</span>
                        <input type="number" required
                        value={state.stock} onChange={handleStock} className="form-control" min="0" name="stock" placeholder="Stock del producto.." />
                    </div>

                    <div className="input-group input-group-md" style={({ marginTop: 5 })}>
                        <span className="input-group-addon">Imagen 1:</span>
                        <input type="text" required
                        value={state.img1} onChange={handleImg1} className="form-control" name="img1" placeholder="Imagen Principal" />
                    </div>
                    <div className="input-group input-group-md">
                        <span className="input-group-addon">Imagen 2:</span>
                        <input type="text" 
                        value={state.img2} onChange={handleImg2} className="form-control" name="img2" placeholder="Imagen 2 (Opcional)" />
                    </div>
                    <div className="input-group input-group-md">
                        <span className="input-group-addon">Imagen 3:</span>
                        <input type="text" onChange={handleImg3} className="form-control"
                        value={state.img3} name="img3" placeholder="Imagen 3 (Opcional)" />
                    </div>

                    <div style={({ marginTop: 18 })} >
                        Categoria actuales:
                    </div>
                    <span >
                        <ul style={({ marginTop: 8 })}>
                            {state.categoryGuardado && state.categoryGuardado.map(data =>
                                <li key={`cat_${data.categoria}`} style={({ listStyle: "none",textTransform: "capitalize" })}>
                                   {data.categoria} &nbsp;&nbsp;
                                    
                                        <span onClick={() => handleDeleteActivas(data.category)}
                                            style={({ color: 'red', cursor: 'pointer' })}
                                            className="glyphicon glyphicon-remove-circle"
                                            aria-hidden="true">
                                            &nbsp;Eliminar
                                
                                       
                                </span>
                                    </li>
                            )}
                        </ul>
                    </span>
                    <div style={({ marginTop: 18 })} >
                        Selecciona una Categoria:
                    </div>
                    <div style={({height:160,overflow: "auto"})}>
                    
                        {
                            listCategory && listCategory.map(item=>(
                             <label key={`key_${random}_${(state.response=='ok')?'ok':''}_${item.categoria}`} 
                               style={({ textTransform: "capitalize" })} 
                               className="btn btn-block btn-default">{item.categoria} &nbsp;
                               
                               <input onChange={handleCategory} 
                               value={item.categoria} type='checkbox' defaultChecked={false}
                                name='categoria' /></label>
                                 
                            ))
                        }
                    </div>
                    <div className="input-group input-group-md" style={({ marginTop: 8 })}>
                        <input onChange={handleCreateInput}
                            value={state.newInputCategory} type="text" className="form-control" 
                            placeholder="Nueva categoria.." />
                        <span className="input-group-btn">
                            <span className="btn btn-info" onClick={() => handleAdd()}>Modificar Categoria</span>
                        </span>
                    </div>
                    <span >
                        <ul style={({ marginTop: 8 })}>
                            {state.newCategory && state.newCategory.map(category =>
                                <li key={`cat_${category}`} style={({ listStyle: "none",textTransform: "capitalize" })}>
                                   {category} &nbsp;&nbsp;
                                    
                                        <span onClick={() => handleDelete(category)}
                                            style={({ color: 'red', cursor: 'pointer' })}
                                            className="glyphicon glyphicon-remove-circle"
                                            aria-hidden="true">
                                            &nbsp;Eliminar
                                
                                       
                                </span>
                                    </li>
                            )}
                        </ul>
                    </span>
                    <hr />
                    <button className="btn btn-success btn-block" type="submit">
                    <span className="glyphicon glyphicon-ok" aria-hidden="true"></span> Modificar Producto</button>
                </div>
            </form>
        </div>
    )