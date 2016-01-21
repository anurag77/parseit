import React, { Component } from 'react';
import LoadingOrderAnimation from 'react-loading-order-with-animation';

/* utils */
import { setParallax } from '../../utils/parallax';

/* component styles */
import { styles } from './styles.scss';

export class TopImage extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    setParallax(this.refs.parallax, 10);
  };

  render() {
    return (
      <section className={`${styles}`} ref="parallax">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <LoadingOrderAnimation animation="fade-in"
                move="from-bottom-to-top"
                distance={30}
                speed={700}
                wait={700}
              >
                <h1 className="title">
                  ParseIt - Smart financial data
                </h1>
              </LoadingOrderAnimation>
              <LoadingOrderAnimation animation="fade-in"
                move="from-bottom-to-top"
                distance={60}
                speed={700}
                wait={900}
              >
                <p>
                  Extract useful quaterly results in seconds
                </p>
              </LoadingOrderAnimation>
              <LoadingOrderAnimation animation="fade-in"
                move="from-bottom-to-top"
                distance={90}
                speed={700}
                wait={1100}
              >
                <div className="row">
                  <div className="col-sm-9 col-sm-offset-3 col-md-8 col-md-offset-2">
                    <div style={{paddingTop:'30px'}} className="panel-body" >
                      <div style={{display: 'none'}} id="login-alert" className="alert alert-danger col-sm-12"></div>
                      <form onSubmit={this.handleLogin} id="loginform" className="form-signin" role="form">
                        <div style={{marginBottom: '25px'}} className={'input-group'}>
                          <span className="input-group-addon"><i className="glyphicon glyphicon-cloud-download"></i></span>
                          <input type="url" className="form-control" ref="url" placeholder="Enter URL" required />
                          <span className="input-group-btn">
                            <button className="btn btn-danger" type="submit">Go!</button>
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </LoadingOrderAnimation>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
