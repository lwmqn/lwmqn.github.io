import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid/lib';
import MQTTIcon from 'material-ui/svg-icons/hardware/device-hub';
import IPSOIcon from 'material-ui/svg-icons/hardware/developer-board';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import {indigo100} from 'material-ui/styles/colors';

const iconStyles = {
  marginRight: "24px",
    width: "20%",
    height: "auto",
    marginBottom: "6px"
};

var css = require('../styles/main.css');

var Home = React.createClass({
    render: function () {
        console.log(this.props);
        return (
            <Grid fluid>
                <Row>
                    <Col className={css.box} xs={6} md={3}>
                        <IPSOIcon style={iconStyles} color={indigo100}/>
                        <h3>Up to 365 days/year</h3>
                        <p>
                            Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.
                        </p>
                    </Col>
                    <Col className={css.box} xs={6} md={3}>
                        <MQTTIcon style={iconStyles} color={indigo100} />
                        <h3>Ready in 20 minutes</h3>
                        <p>
                            Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.
                        </p>
                    </Col>
                    <Col className={css.box} xs={6} md={3}>
                        <FileCloudDownload style={iconStyles} color={indigo100} />
                        <h3>100% organic</h3>
                        <p>
                            All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!
                        </p>
                    </Col>
                    <Col className={css.box} xs={6} md={3}>
                        <HardwareVideogameAsset style={iconStyles} color={indigo100} />
                        <h3>Order anything</h3>
                        <p>
                            We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!
                        </p>
                    </Col>
                </Row>
            </Grid>
        );
    }
});

module.exports = Home;
