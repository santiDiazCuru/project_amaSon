import React, { Component } from 'react';

export default () => (

    <div className="container-fluid">
        <div className="row">
            <br /><br />
            <div className="col-sm-3 col-md-2 sidebar" style={({ zIndex: 8 })}>
                {/* RENDERIZA COMPONENTE DE FILTRO */}
                <br /><img width="100%" src="https://www.elprogreso.es/media/elprogreso/images/2018/03/23/2018032307383441049.png" alt="" />
                <br /><hr />
                <img width="100%" src="https://www.foromarketing.com/wp-content/uploads/2017/11/Simplificar-el-proceso-de-compra-reto-para-el-ecommerce.png" alt="" />
            </div>
            <div className="col-sm-9 col-sm-offset-9 col-md-9 col-md-offset-2 main">

                <img width="100%" src="https://www.boostability.com/wp-content/uploads/2012/10/BOOST_BLOG_IMAGE_RB_SET_10_404_PAGE_1200x628px_v1_3.jpg" alt="" />
                <hr />

            </div>
        </div>
    </div>
);

