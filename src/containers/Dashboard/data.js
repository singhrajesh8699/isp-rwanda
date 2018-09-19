import React from 'react';

export const data = [
    {name: 'Let A', uv: 0, pv: 0, amt: 20},
    {name: 'Let B', uv: 30, pv: 13, amt: 21},
    {name: 'Let C', uv: 20, pv: 98, amt: 29},
    {name: 'Let D', uv: 27, pv: 39, amt: 20},
    {name: 'Let E', uv: 18, pv: 48, amt: 28},
    {name: 'Let F', uv: 23, pv: 38, amt: 20},
    {name: 'Let G', uv: 0, pv: 0, amt: 20},
];

export const data1 = [
    {name: 'Let A', uv: 40, pv: 24, amt: 20},
    {name: 'Let B', uv: 30, pv: 13, amt: 21},
    {name: 'Let C', uv: 60, pv: 98, amt: 29},
    {name: 'Let D', uv: 27, pv: 39, amt: 20},
    {name: 'Let E', uv: 78, pv: 48, amt: 28},
    {name: 'Let F', uv: 23, pv: 38, amt: 20},
    {name: 'Let G', uv: 56, pv: 43, amt: 20},
];
export const data2 = [
    {name: 'Let A', uv: 40, pv: 24, amt: 20},
    {name: 'Let B', uv: 10, pv: 13, amt: 21},
    {name: 'Let C', uv: 60, pv: 98, amt: 29},
    {name: 'Let D', uv: 27, pv: 15, amt: 20},
    {name: 'Let E', uv: 56, pv: 45, amt: 28},
    {name: 'Let F', uv: 23, pv: 56, amt: 20},
    {name: 'Let G', uv: 56, pv: 43, amt: 20},
];
export const radarChartData = [
    {subject: 'Math', A: 120, B: 110, fullMark: 150},
    {subject: 'Chinese', A: 98, B: 130, fullMark: 150},
    {subject: 'English', A: 86, B: 130, fullMark: 150},
    {subject: 'Geography', A: 99, B: 100, fullMark: 150},
    {subject: 'Physics', A: 85, B: 90, fullMark: 150},
    {subject: 'History', A: 65, B: 85, fullMark: 150},
];
export const chartData = [
    {name: 'J', amt: 1400},
    {name: 'F', amt: 2210},
    {name: 'M', amt: 1000},
    {name: 'A', amt: 2000},
    {name: 'M', amt: 1400},
    {name: 'J', amt: 2300},
    {name: 'J', amt: 500},
    {name: 'A', amt: 2000},
    {name: 'S', amt: 1500},
    {name: 'S', amt: 1500},
    {name: 'O', amt: 1000},
    {name: 'N', amt: 2000},
    {name: 'D', amt: 500}

];

export const chartDataWithoutAxis = [
    {name: 'J', amt: 1400},
    {name: 'F', amt: 2210},
    {name: 'M', amt: 1000},
    {name: 'A', amt: 2000},
    {name: 'M', amt: 1400},
    {name: 'J', amt: 2300},
    {name: 'J', amt: 500},
    {name: 'A', amt: 2000},
    {name: 'S', amt: 1500},
    {name: 'O', amt: 1000},
    {name: 'N', amt: 2000},
    {name: 'D', amt: 500},
    {name: 'M', amt: 1000},
    {name: 'A', amt: 2000},
    {name: 'M', amt: 1400},

];

export const pieChartData = [
    {name: 'J', amt: 24},
    {name: 'F', amt: 18},
    {name: 'M', amt: 22},
    {name: 'A', amt: 17},
    {name: 'M', amt: 25},
    {name: 'J', amt: 12},
    {name: 'J', amt: 21},
];
export const lineChartData = [
    {name: 'J', amt: 24244},
    {name: 'F', amt: 18123},
    {name: 'M', amt: 22765},
    {name: 'A', amt: 17097},
    {name: 'M', amt: 25529},
    {name: 'J', amt: 18669},
    {name: 'J', amt: 21812},
    {name: 'S', amt: 14988},
    {name: 'O', amt: 18693},
    {name: 'N', amt: 22900},
    {name: 'D', amt: 25313},
];
export const radialData = [
    {name: 'Monthly Data', data: 48845, fill: '#3367d6'},
    {name: 'Orders Weekly', data: 8875, fill: '#83a6ed'},
    {name: 'Average Revenue', data: 21342, fill: '#8dd1e1'},
    {name: 'Total Revenue', data: 51875, fill: '#ffc658'},
    {name: 'Total Orders', data: 9223, fill: '#a4de6c'},
    {name: 'Past Orders', data: 8543, fill: '#d0ed57'},
];
export const products = [
    {
        image: 'assets/images/fiber.jpeg',
        title: "Fiber broadband internet",
        description: "Enjoy Our fiber broadband services connectivity which offers superfast fiber broadband Internet services for Homes and Business..",
        mrp: 250,
        offerPrice: 200
    },
    {
        image: 'assets/images/4g.jpeg',
        title: "4G Lite Services",
        description: "LTE, an abbreviation for Long-Term Evolution,LTE technology will create possibilities for all kinds of innovative devices and applications..",
        mrp: 250,
        offerPrice: 200
    },
    {
        image: 'assets/images/vpn.png',
        title: "Virtual Private Network",
        description: "With BSC’s Voice over internet protocol services you will be offered a cheaper alternative to traditional telephone system with advanced features such as video calling.",
        mrp: 250,
        offerPrice: 200
    },
    {
        image: 'assets/images/voip.jpeg',
        title: "ViOP services",
        description: "TSC offers a private Network that customers use with their intranet. This has an advantage to those who have different sites in various areas sharing same local network to enhance communication without necessarily using internet",
        mrp: 250,
        offerPrice: 200
    },
];


export const customers = [
    {
        id: 1,
        image: '/assets/images/image2.jpeg',
        name: "John Smith",
        about: "@john.s",
        detail: "3 orders",
        color: "success"
    },
    {
        id: 2,
        image: '/assets/images/image3.jpg',
        name: "alex dolgove",
        about: "@Alex.Dolgove",
        detail: "2 orders",
        color: "primary"
    },
    {
        id: 3,
        image: '/assets/images/image1.png',
        name: "Domnic Brown",
        about: "@domnic.brown",
        detail: "0 orders",
        color: "danger"
    },
    {
        id: 4,
        image: '/assets/images/image4.jpeg',
        name: "riyana jo",
        about: "@jimmy.jo",
        detail: "1 orders",
        color: "primary"
    }
];

export const appNotification = [

    {
        id: 1,
        title: "NEW ORDER",
        desc: [<a href="javascript:void(0)">Stella</a>, " has placed an order for 3 items of $234.0"],
        image: 'http://via.placeholder.com/150x150'
    },
    {
        id: 2,
        title: "Support ticket",
        desc: [<a href="javascript:void(0)">Jeson Born</a>, " raised a support ticket"],
        image: 'http://via.placeholder.com/150x150'
    },
    {
        id: 3,
        title: "new enquiry",
        desc: [<a href="javascript:void(0)">Guptil</a>, " has placed an order for 5 items of $425.0"],
        image: 'http://via.placeholder.com/150x150'
    },
    {
        id: 4,
        title: "NEW ORDER",
        desc: [<a href="javascript:void(0)">Alex Dolgove</a>, " raised a support ticket"],
        image: 'http://via.placeholder.com/150x150'
    },
];

export const announcementsNotification = [
    {
        id: 5,
        title: "NEW ORDER",
        desc: [<a href="javascript:void(0)">Alex Dolgove</a>, " raised a support ticket"],
        image: 'http://via.placeholder.com/150x150'
    },
    {
        id: 6,
        title: "Support ticket",
        desc: [<a href="javascript:void(0)">Jeson Born</a>, " raised a support ticket"],
        image: 'http://via.placeholder.com/150x150'
    },
    {
        id: 7,
        title: "NEW ORDER",
        desc: [<a href="javascript:void(0)">Stella</a>, " has placed an order for 3 items of $234.0"],
        image: 'http://via.placeholder.com/150x150'
    },
    {
        id: 8,
        title: "new enquiry",
        desc: [<a href="javascript:void(0)">Guptil</a>, " has placed an order for 5 items of $425.0"],
        image: 'http://via.placeholder.com/150x150'
    },
];

export const marketingData = [
    {
        id: 1,
        name: 'Facebook Ads',
        desc: '63 Likes, 387 Shares',
        icon: 'facebook',
        color: 'bg-indigo lighten-1',
        budget: 570,
        growth: 20
    },

    {
        id: 2,
        name: 'Twitter Ads',
        desc: '43 Likes, 545 Shares',
        icon: 'twitter',
        color: 'bg-light-blue accent-2',
        budget: 811,
        growth: -5
    },

    {
        id: 3,
        name: 'Instagram',
        desc: '83 Follows, 210 Likes',
        icon: 'instagram',
        color: 'bg-brown lighten-1',
        budget: 685,
        growth: 20
    },

    {
        id: 4,
        name: 'LinkedIn',
        desc: '23 Shares, 764 Likes',
        icon: 'linkedin',
        color: 'bg-light-blue darken-3',
        budget: 868,
        growth: 25
    },
    {
        id: 5,
        name: 'Youtube',
        desc: '1.2k subscribe, 1.8M Likes',
        icon: 'youtube',
        color: 'bg-red accent-4',
        budget: 780,
        growth: 45
    },

    {
        id: 6,
        name: 'Dribbble',
        desc: '23 Shares, 1.4k Likes',
        icon: 'dribbble',
        color: 'bg-pink lighten-2',
        budget: 868,
        growth: 25
    },

];