import React from 'react'


export default ({ handleChangeMin, priceMin, handleClickMin, priceMax, handleChangeMax, handleClickMax }) => (
    <div style={{ width: '97%', maxWidth: '100%', border: '1px solid #cecee0', textAlign: 'center', display: 'grid', gridTemplateColumns: '3fr 1fr 13fr', borderRadius: '3px', margin: 'auto', gridGap: '10px' }}>
        <div style={{ backgroundColor: '#ffe900', borderRadius: '3px' }}>
            <div><br /></div>
            <div><br /></div>
            <div><br /></div>
            <div><br /></div>
            <div><br /></div>
            <form action="">
                <div><label>Televisores <input type='radio' name='foo' /></label></div>
                <div><label>Notebooks <input type='radio' name='foo' /></label></div>
                <div><label>Tablets <input type='radio' name='foo' /></label></div>
                <div><label>Heladeras <input type='radio' name='foo' /></label></div>
                <div><label>Celulares <input type='radio' name='foo' /></label></div>
                <div><label>Microondas <input type='radio' name='foo' /></label></div>
            </form>
            {/* ///////////////////////////////////////////////////////////////////////////////////// */}
            {/* PRECIO MIN */}
            {/* el marcador del precio*/}
            <div style={{ cursor: 'pointer', backgroundColor: '#333333', borderRadius: '0 50% 50% 50%', height: '40px', width: '40px', transform: 'rotate(-135deg)', margin: 'auto' }} onClick={handleClickMin}>
                <div style={{ color: 'white', fontSize: '20px', transform: 'rotate(135deg)', position: 'relative', top: '6px' }} >
                    {priceMin}
                </div>
            </div>
            {/* precio, hay muchos div por el css-grid */}
            <div style={{ height: '10px' }}></div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 5fr 2fr 1fr' }}>
                <div> </div>
                <div>0</div> {/* precio minimo */}
                <div><label>Minimo</label></div>
                <div>100</div> {/* precio maximo */}
                <div> </div>
            </div>
            {/* este es el controlador del precio */}
            <div style={{ top: '0', bottom: '0', left: '0', right: '0' }}>
                <input type="range" name="priceMin" min='0' max='100' style={{ width: "80%", margin: "auto", boxShadow: "inset 0 2px 18px rgba(0,0,0,0.6)", WebkitAppearance: "none", backgroundColor: '#f2ff00' }} onChange={handleChangeMin} value={priceMin}/>
            </div>
            <div><label>Filter by: Price</label></div>
            {/* PRECIO MIN */}
            {/* //////////////////////////////////////////////////////////////////////////////////// */}
            {/* PRECIO MAX */}
            {/* el marcador del precio*/}
            <div style={{ top: '0', bottom: '0', left: '0', right: '0' }}>
                <input type="range" name="priceMax" min='0' max='100' style={{ width: "80%", margin: "auto", boxShadow: "inset 0 2px 18px rgba(0,0,0,0.6)", WebkitAppearance: "none", backgroundColor: '#f2ff00' }} onChange={handleChangeMax} value={priceMax}/>
            </div>
            {/* precio, hay muchos div por el css-grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 5fr 2fr 1fr' }}>
                <div> </div>
                <div>0</div> {/* precio minimo */}
                <div><label>Maximo</label></div>
                <div>100</div> {/* precio maximo */}
                <div> </div>
            </div>
            <div style={{ height: '5px' }}></div>
            <div style={{ cursor: 'pointer', backgroundColor: '#333333', borderRadius: '0 50% 50% 50%', height: '40px', width: '40px', transform: 'rotate(44deg)', margin: 'auto' }} onClick={handleClickMax}>
                <div style={{ color: 'white', fontSize: '20px', transform: 'rotate(-44deg)', position: 'relative', top: '6px' }} >
                    {priceMax}
                </div>
            </div>
            {/* este es el controlador del precio */}
            {/* PRECIO MAX*/}
            {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
            <div><br /></div>
            <div><br /></div>
            <div><br /></div>
            <div><br /></div>
            <div><br /></div>
            <div><br /></div>
            <div><br /></div>

        </div>
        <div></div>
        <div style={{ backgroundColor: 'black', borderRadius: '3px' }}></div>
    </div>
)