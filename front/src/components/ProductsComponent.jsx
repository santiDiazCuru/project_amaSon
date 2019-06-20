import React from 'react'


export default () => (
    <div style={{ width: '97%', maxWidth: '100%', border: '1px solid #cecee0', textAlign: 'center', display: 'grid', gridTemplateColumns: '3fr 1fr 13fr', borderRadius: '3px', margin: 'auto', gridGap: '10px' }}>
        <div style={{ backgroundColor: '#ffe900', borderRadius: '3px' }}>
            <div><br /></div>
            <div><br /></div>
            <div><br /></div>
            <div><br /></div>
            <div><br /></div>
            <div><br /></div>
            <div><h4>Televisores <input type='checkbox' /></h4></div>
            <div><h4>Celulares <input type='checkbox' /></h4></div>
            <div><h4>Microondas <input type='checkbox' /></h4></div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 5fr 2fr 1fr' }}>
                <div> </div>
                <div> </div>
                <div> </div>
                <div> </div>
                <div> </div>
            </div>
            <div><br /></div>
            <div style={{ top: '0', bottom: '0', left: '0', right: '0' }}><input type="range" name="price" min='0' max='100' style={{ width: "80%", margin: "auto", boxShadow: "inset 0 2px 18px rgba(0,0,0,0.6)", WebkitAppearance: "none",backgroundColor:'#f2ff00'}} /></div>
            <div><br /></div>
            <div><br /></div>
            <div><br /></div>
            <div><br /></div>
            <div><br /></div>
            <div><br /></div>
            <div><br /></div>
            <div><br /></div>

        </div>
        <div></div>
        <div style={{ backgroundColor: '#ffe900', borderRadius: '3px' }}></div>
    </div>
)