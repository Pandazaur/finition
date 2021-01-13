import { ScreenCategory } from "@/types/ScreenCategory.type"

const screenCategories: ScreenCategory[] =[{
        label: "Login",
        apps: [
            {
                pictures: [`${process.env.BASE_URL}img/discord/login_1.png`],
                name: "Discord"
            }, {
                pictures: [
                    `${process.env.BASE_URL}img/disney-plus/login_1.png`,
                    `${process.env.BASE_URL}img/disney-plus/login_2.png`,
                ],
                name: "Disney +"
            }, {
                pictures: [`${process.env.BASE_URL}img/facebook/login_1.png`],
                name: "Facebook"
            }, {
                pictures: [`${process.env.BASE_URL}img/instagram/login_1.png`],
                name: "Instagram"
            }, {
                pictures: [`${process.env.BASE_URL}img/netflix/login_1.png`],
                name: "Netflix"
            }, {
                pictures: [`${process.env.BASE_URL}img/snapchat/login_1.png`],
                name: "Snapchat"
            }, {
                pictures: [`${process.env.BASE_URL}img/steam/login_1.png`],
                name: "Steam"
            }, {
                pictures: [`${process.env.BASE_URL}img/twitter/login_1.png`],
                name: "Twitter"
            },
        ]
    },
    // {
    //     label: "Home",
    //     apps: [
    //         {
    //             pictures: ["@/assets/screens/facebook/1.png"],
    //             name: "Facebook"
    //         },
    //         {
    //             pictures: ["@/assets/screens/instagram/1.png"],
    //             name: "Instagram"
    //         }
    //     ]
    // }
]

export default screenCategories