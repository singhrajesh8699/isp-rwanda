import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    Line,
    LineChart,
    Pie,
    PieChart,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    ResponsiveContainer,
    Tooltip,
    XAxis
} from 'recharts';
import {
    announcementsNotification,
    appNotification,
    chartData,
    customers,
    data,
    data1,
    data2,
    marketingData,
    pieChartData,
    products,
    radarChartData
} from './data'
import ChartCard from 'components/Dashboard/Common/ChartCard';
import ProductImage from 'components/Dashboard/eCommerce/ProductImage';
import OrderTable from 'components/Dashboard/eCommerce/OrderTable';
import MarketingTable from 'components/Dashboard/Common/MarketingTable';
import PopularProduct from 'components/Dashboard/Common/PopularProduct';
import ContainerHeader from 'components/ContainerHeader/index';
import ReportBox from 'components/ReportBox/index';
import SalesStatistic from 'components/Dashboard/eCommerce/SalesStatistic';
import UserDetailTable from 'components/Dashboard/Common/UserDetailTable';
import LatestNotifications from 'components/Dashboard/Common/LatestNotifications';
import CustomerAroundWorld from 'components/Dashboard/Common/CustomerAroundWorld';
import CardMenu from 'components/Dashboard/Common/CardMenu';
import CardHeader from 'components/Dashboard/Common/CardHeader/index';
import IntlMessages from 'util/IntlMessages';

class ECommerce extends React.Component {

    onOptionMenuSelect = event => {
        this.setState({menuState: true, anchorEl: event.currentTarget});
    };
    handleRequestClose = () => {
        this.setState({menuState: false});
    };

    constructor() {
        super();
        this.state = {
            anchorEl: undefined,
            menuState: false,
        }
    }

    render() {
        const {anchorEl, menuState} = this.state;
        return (
            <div className="dashboard animated slideInUpTiny animation-duration-3">

                <div className="row">
                    <div className="col-lg-3 col-sm-6 col-12">
                        <ChartCard styleName="bg-secondary text-white">
                            <div className="chart-title">
                                <h2>200</h2>
                                <p><IntlMessages id="dashboard.newCustomers"/></p>
                            </div>

                            <ResponsiveContainer width="100%" height={110}>
                                <BarChart data={data}>
                                    <Bar dataKey="pv" fill="white"/>
                                    <Bar dataKey="uv" fill="white"/>
                                </BarChart>
                            </ResponsiveContainer>
                        </ChartCard>
                    </div>
                
                   <div className="col-lg-3 col-sm-6 col-12">
                        <ChartCard styleName="bg-primary text-white">
                            <div className="chart-title">
                                <h2>$7,890</h2>
                                <p><IntlMessages id="dashboard.lastMonthSale"/></p>
                            </div>

                            <ResponsiveContainer width="100%" height={110}>
                                <AreaChart data={data1} margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                                    <Area type="monotone" dataKey="pv" stroke="rgba(255,255,255,0.5)" activeDot={{r: 8}}
                                          fillOpacity={.5}
                                          fill="white"/>
                                </AreaChart>
                            </ResponsiveContainer>
                        </ChartCard>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-12">
                        <ChartCard styleName="bg-info text-white">
                            <div className="chart-title">
                                <h2>500</h2>
                                <p><IntlMessages id="dashboard.existingCustomer"/></p>
                            </div>

                            <ResponsiveContainer width="100%" height={110}>
                                <BarChart data={data}>
                                    <Bar dataKey="pv" fill="white"/>
                                    <Bar dataKey="uv" fill="white"/>
                                </BarChart>
                            </ResponsiveContainer>
                        </ChartCard>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-12">
                        <ChartCard styleName="bg-blue text-white">
                            <div className="chart-title">
                                <h2>$87,345</h2>
                                <p><IntlMessages id="dashboard.totalRevenue"/></p>
                            </div>

                            <ResponsiveContainer width="100%" height={110}>
                                <LineChart data={data1}>
                                    <Line dataKey="uv" stroke="#ffffff" activeDot={{r: 8}}/>
                                </LineChart>
                            </ResponsiveContainer>
                        </ChartCard>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <SalesStatistic/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-5 col-12">
                        <div className="row">
                            <div className="col-xl-12 col-sm-6">
                                <ReportBox heading={<IntlMessages id="dashboard.thisYearSaleReport"/>} title="$685K+"
                                           detail={<IntlMessages id="dashboard.post9MonthData"/>}>
                                    <BarChart data={chartData}>
                                        <Bar dataKey='amt' fill='#3f51b5' maxBarSize={10}/>
                                        <XAxis stroke="#3f51b5" dataKey="name"/>
                                    </BarChart>
                                </ReportBox>
                            </div>

                            <div className="col-xl-12 col-sm-6">
                                <div className="chart-order">
                                    <ReportBox heading={<IntlMessages id="dashboard.thisYearSaleReport"/>}
                                               title="$685K+"
                                               detail={<IntlMessages id="dashboard.post9MonthData"/>}>
                                        <PieChart margin={{left: 0, right: 0, top: 0, bottom: 0}}>
                                            <Pie data={pieChartData} dataKey="amt" nameKey="name" cx="50%" cy="85%"
                                                 innerRadius={30}
                                                 outerRadius={50} fill="#3f51b5" startAngle={180} endAngle={0} label/>
                                        </PieChart>
                                    </ReportBox>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-xl-3 col-md-6 col-12">
                        <div className="jr-card">
                            <CardHeader heading={<IntlMessages id="dashboard.newCustomers"/>}
                                        subHeading={<IntlMessages id="dashboard.newThisMonth"/>} styleName="mb-2"/>

                            <UserDetailTable data={customers}/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="jr-card">
                            <div className="jr-card-header d-flex align-items-center mb-3">
                                <h3 className="card-heading mb-0"><i
                                    className="zmdi zmdi-chart-donut zmdi-hc-fw text-primary text-lighten-2 mr-2"/>
                                    <IntlMessages id="dashboard.marketingCampaign"/>
                                </h3>
                                <span className="badge badge-primary ml-auto">Today</span>
                            </div>
                            <MarketingTable data={marketingData}/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-12 col-lg-12 order-xl-2">
                        <div className="jr-card">
                            <CardHeader heading={<IntlMessages id="dashboard.popularProducts"/>}
                                        subHeading={<IntlMessages id="dashboard.bsc"/>} styleName="mb-4"/>

                            <div className="row">
                                {products.map((product, index) => <PopularProduct key={index} product={product}/>)}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="jr-card">
                            <div className="jr-card-header d-flex align-items-center">
                                <div className="mr-auto">
                                    <h3 className="d-inline-block mb-0"><IntlMessages id="table.recentOrders"/></h3>
                                    <span className="text-white badge badge-success"><IntlMessages id="table.thisWeek"/></span>
                                </div>
                                <IconButton className="size-30" onClick={this.onOptionMenuSelect.bind(this)}>
                                    <i className="zmdi zmdi-chevron-down zmdi-hc-fw"/>
                                </IconButton>
                            </div>
                            <OrderTable/>
                        </div>
                    </div>
                </div>

                <CustomerAroundWorld/>
                <CardMenu menuState={menuState} anchorEl={anchorEl}
                          handleRequestClose={this.handleRequestClose.bind(this)}/>
            </div>
        );
    }
}

export default ECommerce;