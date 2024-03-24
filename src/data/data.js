const niftyData = [
    {
        id: 1,
        imgUrl: "https://technicals.zerodha.com/static/media/bar.8505e185.svg",
        name: "Summary",
        info: {
            isInfo: true,
            value: "Here is a Snapshot of the most popular technical indicators. We take these into consideration, analyze them, run some internal calculations and help you understand the overall market conditions."
        }
        ,
        cordinate:{
            x:9,
            y:48
          },

        content: [{
            title: "Bearish",
            value: 3
        },
        {
            title: "Neutral",
            value: 12
        },
        {
            title: "Bullish",
            value: 14
        }],
        gridContent: [
            {      id:1,
                title: "EMA (20)",
                value: 22076.49
            },
            {   id:2,
                title: "EMA (20)",
                value: 22076.49
            },
            {   id:3,
                title: "EMA (20)",
                value: 22076.49
            },
            {   id:4,
                title: "EMA (20)",
                value: 22076.49
            },
            {   id:5,
                title: "EMA (20)",
                value: 22076.49
            },
            {   id:6,
                title: "EMA (20)",
                value: 22076.49
            }
        ]
    },
    {
        id: 2,
        imgUrl: "https://technicals.zerodha.com/static/media/bar_resistance.eb8d6baa.svg",
        name: "Support & Resistance",
        info: {
            isInfo: true,
            value: "Support: Support prevents the price from falling further. It is a price point on the chart where the trader expects maximum demand (in terms of buying) coming into the stock/index. Whenever the price falls to the support line, it is likely to bounce back. Resistance is something that stops the price from rising further. The resistance level is a price point on the chart where traders expect maximum supply (in terms of selling) for the stock/index. The resistance level is always above the current market price."
        }
,
cordinate:{
    x:9,
    y:70
  }
        ,
        content: [{
            title: "Bearish",
            value: 3
        },
        {
            title: "Neutral",
            value: 12
        },
        {
            title: "Bullish",
            value: 14
        }],
        gridContent: [
            {      id:1,
                title: "EMA (20)",
                value: 22076.49
            },
            {   id:2,
                title: "EMA (20)",
                value: 22076.49
            },
            {   id:3,
                title: "EMA (20)",
                value: 22076.49
            },
            {   id:4,
                title: "EMA (20)",
                value: 22076.49
            },
            {   id:5,
                title: "EMA (20)",
                value: 22076.49
            },
            {   id:6,
                title: "EMA (20)",
                value: 22076.49
            }
        ]
    },
    {
        id: 3,
        imgUrl: "https://technicals.zerodha.com/static/media/bar_ma.1ee3ecd8.svg",
        name: "Moving averages",
        info: {
            isInfo: false,
            value: ""
        },
        cordinate:{
            x:9,
            y:29
          }
        ,
        content: [{
            title: "Bearish",
            value: 3
        },
        {
            title: "Neutral",
            value: 12
        },
        {
            title: "Bullish",
            value: 14
        }],
        // gridContent: [
        //     {      id:1,
        //         title: "EMA (20)",
        //         value: 22076.49
        //     },
        //     {   id:2,
        //         title: "EMA (20)",
        //         value: 22076.49
        //     },
        //     {   id:3,
        //         title: "EMA (20)",
        //         value: 22076.49
        //     },
        //     {   id:4,
        //         title: "EMA (20)",
        //         value: 22076.49
        //     },
        //     {   id:5,
        //         title: "EMA (20)",
        //         value: 22076.49
        //     },
        //     {   id:6,
        //         title: "EMA (20)",
        //         value: 22076.49
        //     }
        // ]
        sData:[
            {   id:1,
                name:"EMA (5)",
                value:22094.01
            },
            {   id:2,
                name:"EMA (5)",
                value:22094.01
            },
            { id:3,
                name:"EMA (5)",
                value:22094.01
            },
            { id:4,
                name:"EMA (5)",
                value:22094.01
            },{ id:5,
                name:"EMA (5)",
                value:22094.01
            },
            { id:6,
                name:"SMA (5)",
                value:22094.01
            },{
                id:7,
                name:"Ichimoku Base line (9, 26, 52, 26)"
                ,value:22118.40
            }
            ,{
                id:8,
                name:"Volume Weighted MA (20)"
                ,value:0.00
            }
        ],
        isDetail:true
    },
    {
        id: 4,
        imgUrl: "https://technicals.zerodha.com/static/media/bar_oscillator.ed2bf1c3.svg",
        name: "Oscillators",
        cordinate:{
          x:9,
          y:55
        },
        info: {
            isInfo:true,
            value:"They form a majority of the leading technical indicators and they oscillate between a local minimum & maximum. The interpretation varies based on the position of the oscillator on the chart."
        }
        ,
        content: [],
        // gridContent: [
        //     {
        //         title: "EMA (20)",
        //         value: 22076.49
        //     },
        //     {
        //         title: "EMA (20)",
        //         value: 22076.49
        //     },
        //     {
        //         title: "EMA (20)",
        //         value: 22076.49
        //     },
        //     {
        //         title: "EMA (20)",
        //         value: 22076.49
        //     },
        //     {
        //         title: "EMA (20)",
        //         value: 22076.49
        //     },
        //     {
        //         title: "EMA (20)",
        //         value: 22076.49
        //     }
        // ]
        nData:[
            {   id:1,
                name:"RSI (14)",
                value:55.85
            },
            { id:2,
                name:"RSI (14)",
                value:55.85
            },
            { id:3,
                name:"RSI (14)",
                value:55.85
            },
            { id:4,
                name:"RSI (14)",
                value:55.85
            },
            { id:5,
                name:"RSI (14)",
                value:55.85
            },
            { id:6,
                name:"RSI (14)",
                value:55.85
            },
            {
                id:7,
                name:"RSI (14)",
                value:51.48
            },
            {
                id:8,
                name:"Stoch.%K (14, 3, 3)",
                value:47.35
            }
        ],
        isDetail:true
    }
]
// console.log(niftyData);
export default niftyData;

export const dayData = [
    {
        id: 1,
        name: "5min",
        subName:"5 Minutes",
        isHighlight: false
    },
    {
        id: 2,
        name: "10min",
        subName:"10 Minutes",
        isHighlight: false
    },
    {
        id: 3,
        name: "15min",
        subName:"15 Minutes",
        isHighlight: false
    },
    {
        id: 4,
        name: "30min",
        subName:"30 Minutes",
        isHighlight: false
    },
    {
        id: 5,
        name: "hour",
        subName:"Hour",
        isHighlight: false
    },
    {
        id: 6,
        name: "1 Day",
        subName:"1 Day",
        isHighlight: true
    }
]
// export const Bearish=[
//     { title: "Bearish",
//     value:3},
//     {title: "Bearish",
//     value:3},
//     {
//         title: "Bearish",
//             value:3
//     }
// ]
