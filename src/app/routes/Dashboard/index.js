import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import Dashboard from 'containers/Dashboard/index.js'
import IntlMessages from 'util/IntlMessages';

class SamplePage extends React.Component {

    render() {
        return (
            <div className="app-wrapper">
                <ContainerHeader match={this.props.match} title={<IntlMessages id="sidebar.dashboard"/>}/>
                <Dashboard />
            </div>
        );
    }
}

export default SamplePage;