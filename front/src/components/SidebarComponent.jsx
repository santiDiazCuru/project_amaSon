import React from 'react'


export default ({ handleChangeMin, priceMin, handleClickMin, priceMax, handleChangeMax, handleClickMax, color,letraMax,letraMin }) => (
    <div>
        <div>
            <div><br /></div>
           
            <div><br /></div>
            <form action="">
                <div className="btn btn-block btn-default"><label>Televisores <input type='radio' name='foo' /></label></div>
                <div className="btn btn-block btn-default"><label>Notebooks <input type='radio' name='foo' /></label></div>
                <div className="btn btn-block btn-default"><label>Tablets <input type='radio' name='foo' /></label></div>
                <div className="btn btn-block btn-default"><label>Heladeras <input type='radio' name='foo' /></label></div>
                <div className="btn btn-block btn-default"><label>Celulares <input type='radio' name='foo' /></label></div>
                <div className="btn btn-block btn-default"><label>Microondas <input type='radio' name='foo' /></label></div>
            </form>
            <br/>
            {/* ///////////////////////////////////////////////////////////////////////////////////// */}
            {/* PRECIO MIN */}
            {/* el marcador del precio*/}
            <div style={{cursor: 'pointer', backgroundColor: '#333333', borderRadius: '0 50% 50% 50%', height: '40px', width: '40px', transform: 'rotate(-135deg)', margin: 'auto' }} onClick={handleClickMin}>
                <div style={{ color: 'white', fontSize: `${letraMin}px`, transform: 'rotate(135deg)', position: 'relative', top: '10px',left:'-2px' }} >
                    {priceMin}
                </div>
            </div>
            {/* precio, hay muchos div por el css-grid */}
            <div style={{ height: '10px' }}></div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 5fr 2fr 1fr' }}>
                <div> </div>
                <div>0</div> {/* precio minimo */}
                <div><label>Minimo</label></div>
                <div>100000</div> {/* precio maximo */}
                <div> </div>
            </div>
            {/* este es el controlador del precio */}
            <div style={{ top: '0', bottom: '0', left: '0', right: '0' }}>
                <input type="range" name="priceMin" min='0' max='100000' style={{ width: "80%", margin: "auto", boxShadow: "inset 0 2px 18px rgba(0,0,0,0.6)", WebkitAppearance: "none", backgroundColor: color }} onChange={handleChangeMin} value={priceMin}/>
            </div>
            <div><label>Filter by: Price</label></div>
            {/* PRECIO MIN */}
            {/* //////////////////////////////////////////////////////////////////////////////////// */}
            {/* PRECIO MAX */}
            {/* el marcador del precio*/}
            <div style={{ top: '0', bottom: '0', left: '0', right: '0' }}>
                <input type="range" name="priceMax" min='0' max='100000' style={{ width: "80%", margin: "auto", boxShadow: "inset 0 2px 18px rgba(0,0,0,0.6)", WebkitAppearance: "none", backgroundColor: color }} onChange={handleChangeMax} value={priceMax}/>
            </div>
            {/* precio, hay muchos div por el css-grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 5fr 2fr 1fr' }}>
                <div> </div>
                <div>0</div> {/* precio minimo */}
                <div><label>Maximo</label></div>
                <div>100000</div> {/* precio maximo */}
                <div> </div>
            </div>
            <div style={{ height: '5px' }}></div>
            <div style={{ cursor: 'pointer', backgroundColor: '#333333', borderRadius: '0 50% 50% 50%', height: '40px', width: '40px', transform: 'rotate(44deg)', margin: 'auto' }} onClick={handleClickMax}>
                <div style={{ color: 'white', fontSize: `${letraMax}px`, transform: 'rotate(-44deg)', position: 'relative', top: '10px', }} >
                    {priceMax}
                </div>
            </div>
            {/* este es el controlador del precio */}
            {/* PRECIO MAX*/}
            {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
            
           
        </div>
    </div>
)