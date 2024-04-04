const express = require('express');
const router = express.Router();
const Product = require('../models/product')

// const products = [
//     // {
//     //     id: 1,
//     //     title: "Product 1",
//     //     description: "Description of product 1",
//     //     price: 10.99,
//     //     imageUrl: "https://s3-alpha-sig.figma.com/img/52ef/4984/7a51b2e4f48541a20d7215faf1b11879?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hPHXDAawidQZslzVHYqA~SYt58nu-VkaMGMTa-HF~wYW7jRpMj0Eb51QX9-HTpW1HLougvdkSKCPQlzAnIXLUSas5k5x8fWK-7SHRPgPT3C0SEmq73dF~FS8GaPFCxXS1US-z2xovAYg97eB0S3EEn5TXEGat6zzfjJNmfTLhP1JS2eXWOqH9nv7IkOqip-JcFQvE4sV7PwfFeKE9uQhkL4-LXcHrvd5imq3OIvcr8errBgDy3wsUe5GCYqSzcUxJS4aB6ANr~Tgb4qZeXqfOAbZj1eD9EKsakmGvHZyY2U0bBcW5bI770R9e72sk2NkkyGbe~8qEetu-~qlkf42yQ__"
//     // },
//         {
//         id: 1,
//         Heading:"Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones with Mic, up to 50 Hours Playtime, Multi-Point Connection, App Support, AUX & Voice Assistant Support for Mobile Phones (Black)",
//         company: "boAt",
        
//        headphoneType: "Sony WH-CH720N",
//         price:  3500 ,
//         color: " Over-ear headphone",
//         Available: "In Stock" ,
//         Brand :"Sony",
//         imageUrl: "https://s3-alpha-sig.figma.com/img/7118/6b72/ae89020cf50809fad5f38a0b16087b8b?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a1n~1DJJXh3b-z~hPlRh~X632GnXoZFhVWmsI7ma~cvYRoqaJXhkSGjdsQPps0cHOWKiAMK06AU9nXLHMx42a0iGXm5BFqkGGXaieFVvTa0dcrIrM8Mj-sT1zlXRoGQrTlFRfdu72hemU9Qbm3jrxxF9LPCz9NVRWHdk6TiQhfvh~pqMIKEj902QredmzY~YSsyizVay5rontzaXhTewYdlkCUdb42WgnHi2YbhX3~ypA5fKPtJOIM6Calqqn-K7By4TxYVZU1L55AK-LQkJqlasywEHTiXAJmISsHGAHp~qq9NsdXB7Z~zRNF3ibEaaLzDwviztnvlEYeJSFjRijw",
//                 imageUrl1: "https://s3-alpha-sig.figma.com/img/9d16/1dca/51b1eab04c1bb7f76be0ff7d72170807?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OuTCDBY3F5pUtMFsAEu6xoInT32lFkaLL9BFVXiTl7LCraFPPiQFBnaHS7rI5Im2udaIOrGs-x2L0~oyBgFKTVZD7DsEf79iZchDR3KgrgQml4SmycqQRkffDR~1FNLZoN4F-e1PvAI9uCd65MRTxh0~CvXg~RCB~8YzXv5w~AveBJU3lhSNgiwfGnXc4ZZkpyiRzROHWw82Jbv9dusXDdJ7ZkWDub2dOKSVFfoaWHrn8rDnCbM1zHlg2smlx0DnGDSG3AGsNKZZJD7Cy72HrkI0jVAKvEPFXDcWYBDN6dUh0-AlCW9TKv8z9FNh7sgjYYp6H9PY5s9d3O8y5ng4-Q",
//                imageUrl2:" https://s3-alpha-sig.figma.com/img/b7e9/bbbc/d1c4a98c4185b82ceb753acae0ea47f9?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=osWqPdI9iEpPbbG3ap53G8htkWyTBJQ0V6iLeRWfrqIHjsJ9hsqVjvyxEn5CKjuM6SLrAIyZPZ23P7hncGHSMkrVjJ3~4EYdKzIHNetBTAHxG43wMgV8leNt-Iq0adChUZnI7YxhWr7c~1Qiw94JRiIPf4q7zdzgFKIAIwhvC9dh517LtY3LhMomHQgd0eWW4perwwBu2Hx6OsxPSdLg2yDUkA1uIo5er-VoKrF-7h6eXSjFCTEvNrBTN-9z9kfRmVu9QbI~MHY0fbCUMzZLrNgDUjCnZHUWWhDTvzE3Lc5J7LokRVdkfXi2mwFHIhNOJ-1syO84Ytpbq9TQ6sxAzw",
//                imageUr3:"https://s3-alpha-sig.figma.com/img/e2fc/7b6a/01b12c3476263b6cd1871f3cd9334a02?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kDAamDdfKH1t1PWgOsM3K8vpEYfHQ~6kBNiCrARJ~Fl6MpWgHXMlCLyyogeNqwpP1WyioiSeD4wGfzePT1qNqhax3NHcJwqAHV7eRrba9eCOb-iukl5fAcZIQxUm-o7DtE-WqT9TQbQ0bTWvjOYy9CiZ1Yz91F7zzSvx5Sr7~GyOJBvDboBjy8AOv19RVMhh5WqLssb7ZDeUim7YgD9mfiHvi0lzboCjSn2~GpA~w5zt1OjTyzUAvR4crxYJRXmGgeaGbKva9P7-T3jA2vIp4U-9-LQmCJqYka9tPiCRwRfQApMXgAgUt~1fY-7FIcgao-plGqLPU2PmfvY4gMBXVQ",
//                li1:"Up to 50-hour battery life with quick charging (3 mincharge for up to 1 hour of playback)",
//                li2:"Sony’s lightest Wireless Noise-cancelling headband       ever",
//                li3:"Multi-Point Connection helps to pair with two Bluetooth devices at the same time",
//                li4:"Take noise cancelling to the next level with Sony’s  Integrated Processor V1,so you can fully immerseyourself in the music",
//                li5:"Super comfortable and lightweight desig ( 192 Grams ) High sound quality and well-balanced sound tuning"
//         },
//     {          
    
//         id: 2,
//       Heading:"Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones with Mic, up to 50 Hours Playtime, Multi-Point Connection, App Support, AUX & Voice Assistant Support for Mobile Phones (Black)",
//         company: "Sony",
        
//        headphoneType: "Over-ear headphone",
//         price:  3500 ,
//         color: " Black",
//         Available: "In Stock" ,
//         Brand :"Sony",
//         imageUrl: "https://s3-alpha-sig.figma.com/img/1cba/c770/f2f9eedf1c329e134a7c31920b8a571f?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qihocpNYpeUNYXGjXhP8v~q-gT55ScY-2J~vPhbV0VCkAp8MOp2-ZgHuT8ulLmD841td~CUSLGfO96K~usbKMQYCHR6vAR5hcaoh3Y9ZjrSgN4tpx3Pdx91oGI5KSIPNQy3KgxYm58WWpe-8dk2KujAv6oHSErfQCzlxbc3RY9nQ5AL1yU~7sTUrTv-jIc7ZFqpfhfOtl4YXAe9xDl4-QLjgJrP1PR0Rfyz0pcXC99HiiFGxv2WOYWvmq9~GiH2pbk-erLl67NPXwcC22z2wCV2nvQDIYHZ5KlCirs1Mz3FNYHbRu8rBoNTrLvCsTYmhTsXrg87~HJr6~3dNPB4ZMA",
//           imageUrl1: "https://s3-alpha-sig.figma.com/img/9d16/1dca/51b1eab04c1bb7f76be0ff7d72170807?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OuTCDBY3F5pUtMFsAEu6xoInT32lFkaLL9BFVXiTl7LCraFPPiQFBnaHS7rI5Im2udaIOrGs-x2L0~oyBgFKTVZD7DsEf79iZchDR3KgrgQml4SmycqQRkffDR~1FNLZoN4F-e1PvAI9uCd65MRTxh0~CvXg~RCB~8YzXv5w~AveBJU3lhSNgiwfGnXc4ZZkpyiRzROHWw82Jbv9dusXDdJ7ZkWDub2dOKSVFfoaWHrn8rDnCbM1zHlg2smlx0DnGDSG3AGsNKZZJD7Cy72HrkI0jVAKvEPFXDcWYBDN6dUh0-AlCW9TKv8z9FNh7sgjYYp6H9PY5s9d3O8y5ng4-Q",
//                imageUrl2:" https://s3-alpha-sig.figma.com/img/b7e9/bbbc/d1c4a98c4185b82ceb753acae0ea47f9?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=osWqPdI9iEpPbbG3ap53G8htkWyTBJQ0V6iLeRWfrqIHjsJ9hsqVjvyxEn5CKjuM6SLrAIyZPZ23P7hncGHSMkrVjJ3~4EYdKzIHNetBTAHxG43wMgV8leNt-Iq0adChUZnI7YxhWr7c~1Qiw94JRiIPf4q7zdzgFKIAIwhvC9dh517LtY3LhMomHQgd0eWW4perwwBu2Hx6OsxPSdLg2yDUkA1uIo5er-VoKrF-7h6eXSjFCTEvNrBTN-9z9kfRmVu9QbI~MHY0fbCUMzZLrNgDUjCnZHUWWhDTvzE3Lc5J7LokRVdkfXi2mwFHIhNOJ-1syO84Ytpbq9TQ6sxAzw",
//         li1:"Up to 50-hour battery life with quick charging (3 mincharge for up to 1 hour of playback)",
//                li2:"Sony’s lightest Wireless Noise-cancelling headband       ever",
//                li3:"Multi-Point Connection helps to pair with two Bluetooth devices at the same time",
//                li4:"Take noise cancelling to the next level with Sony’s  Integrated Processor V1,so you can fully immerseyourself in the music",
//                li5:"Super comfortable and lightweight desig ( 192 Grams ) High sound quality and well-balanced sound tuning"
//     },
//     {

//         id: 3,
//         Heading:"Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones with Mic, up to 50 Hours Playtime, Multi-Point Connection, App Support, AUX & Voice Assistant Support for Mobile Phones (Black)",
//         company: "JBL C100SI",
        
//        headphoneType: "In-ear headphone",
//         price:  599 ,
//         color: "Black",
//         Available: "In Stock" ,
//         Brand :"Sony",
//         imageUrl: "https://s3-alpha-sig.figma.com/img/52ef/4984/7a51b2e4f48541a20d7215faf1b11879?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=osCJpR5klu-4uOAVGqgnWFe5kPcTLykgtemggN2p~mSvmgQut53taJBJH5IDmzwc7mLBs6dYjCXz8qo6ujJ~GVidINHCRmMShyOQutnWwuJBLYDtGjAGE7PMTdOBJxWJMAeKcjHhXMolxIbhXqKZsHKaFQnWdnFoS3PGPTB74249Bd0nNDGU2i3NBcGFHcizHiguiqXPUSHRcWAc~IyFzORymDe6DF5PqfhX0vokheRqq67Mp8OeNout1wBhiYjTgv9pXzVfEeX-OZvJJNOQFnBM2vrZ8Jf0VecT78wh2RzNx1tyN0YErVB9144FOZoTJreCdtzqagbQ3-R79dn4Hw",
//           imageUrl1: "https://s3-alpha-sig.figma.com/img/9d16/1dca/51b1eab04c1bb7f76be0ff7d72170807?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OuTCDBY3F5pUtMFsAEu6xoInT32lFkaLL9BFVXiTl7LCraFPPiQFBnaHS7rI5Im2udaIOrGs-x2L0~oyBgFKTVZD7DsEf79iZchDR3KgrgQml4SmycqQRkffDR~1FNLZoN4F-e1PvAI9uCd65MRTxh0~CvXg~RCB~8YzXv5w~AveBJU3lhSNgiwfGnXc4ZZkpyiRzROHWw82Jbv9dusXDdJ7ZkWDub2dOKSVFfoaWHrn8rDnCbM1zHlg2smlx0DnGDSG3AGsNKZZJD7Cy72HrkI0jVAKvEPFXDcWYBDN6dUh0-AlCW9TKv8z9FNh7sgjYYp6H9PY5s9d3O8y5ng4-Q",
//                imageUrl2:" https://s3-alpha-sig.figma.com/img/b7e9/bbbc/d1c4a98c4185b82ceb753acae0ea47f9?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=osWqPdI9iEpPbbG3ap53G8htkWyTBJQ0V6iLeRWfrqIHjsJ9hsqVjvyxEn5CKjuM6SLrAIyZPZ23P7hncGHSMkrVjJ3~4EYdKzIHNetBTAHxG43wMgV8leNt-Iq0adChUZnI7YxhWr7c~1Qiw94JRiIPf4q7zdzgFKIAIwhvC9dh517LtY3LhMomHQgd0eWW4perwwBu2Hx6OsxPSdLg2yDUkA1uIo5er-VoKrF-7h6eXSjFCTEvNrBTN-9z9kfRmVu9QbI~MHY0fbCUMzZLrNgDUjCnZHUWWhDTvzE3Lc5J7LokRVdkfXi2mwFHIhNOJ-1syO84Ytpbq9TQ6sxAzw", 
//         li1:"Up to 50-hour battery life with quick charging (3 mincharge for up to 1 hour of playback)",
//                li2:"Sony’s lightest Wireless Noise-cancelling headband       ever",
//                li3:"Multi-Point Connection helps to pair with two Bluetooth devices at the same time",
//                li4:"Take noise cancelling to the next level with Sony’s  Integrated Processor V1,so you can fully immerseyourself in the music",
//                li5:"Super comfortable and lightweight desig ( 192 Grams ) High sound quality and well-balanced sound tuning"
//     },
//     {
//         id: 4,
//        Heading:"Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones with Mic, up to 50 Hours Playtime, Multi-Point Connection, App Support, AUX & Voice Assistant Support for Mobile Phones (Black)",
//         company: "baAt Rockwerz",
        
//        headphoneType: " On-ear headphone",
//         price:  1500,
//         color: " White",
//         Available: "In Stock" ,
//         Brand :"Sony",
//         imageUrl: "https://s3-alpha-sig.figma.com/img/643b/e3ec/b328e0dd0e721192439fb3566c3c933d?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PaxKdFYhQSfGDR3VrQzfa-nn9u50TUeC5yPk~SYDPKYNDMoyJvsyftRAowlNv1tc1eQYNBX-VRBMjcHT2XdR-ybdJh3XGg9hNI~JcVivpMf4FVTk36cPs6n4RDizfEbwvM20aAiEv2V53Dy8YhIAAXe0zgM4q9mL2Hg~x0kp3lZ-4aaGekWOLQhBwuvUic8aHHRaVcBl-7CQvCosBh0m4kOtK9qpyk9eeSVs0ICTG6yDzVVfyGbr-BQmfgtZhNV1Ez4ukCydVVwplT4~5-VjcZ5KaJkGeCehzmJZ5MuSB3DcMLbkNS0eiFjDUBadBfMVx83WIEhjmBA5N5cc4M2IaQ",
//           imageUrl1: "https://s3-alpha-sig.figma.com/img/9d16/1dca/51b1eab04c1bb7f76be0ff7d72170807?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OuTCDBY3F5pUtMFsAEu6xoInT32lFkaLL9BFVXiTl7LCraFPPiQFBnaHS7rI5Im2udaIOrGs-x2L0~oyBgFKTVZD7DsEf79iZchDR3KgrgQml4SmycqQRkffDR~1FNLZoN4F-e1PvAI9uCd65MRTxh0~CvXg~RCB~8YzXv5w~AveBJU3lhSNgiwfGnXc4ZZkpyiRzROHWw82Jbv9dusXDdJ7ZkWDub2dOKSVFfoaWHrn8rDnCbM1zHlg2smlx0DnGDSG3AGsNKZZJD7Cy72HrkI0jVAKvEPFXDcWYBDN6dUh0-AlCW9TKv8z9FNh7sgjYYp6H9PY5s9d3O8y5ng4-Q",
//                imageUrl2:" https://s3-alpha-sig.figma.com/img/b7e9/bbbc/d1c4a98c4185b82ceb753acae0ea47f9?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=osWqPdI9iEpPbbG3ap53G8htkWyTBJQ0V6iLeRWfrqIHjsJ9hsqVjvyxEn5CKjuM6SLrAIyZPZ23P7hncGHSMkrVjJ3~4EYdKzIHNetBTAHxG43wMgV8leNt-Iq0adChUZnI7YxhWr7c~1Qiw94JRiIPf4q7zdzgFKIAIwhvC9dh517LtY3LhMomHQgd0eWW4perwwBu2Hx6OsxPSdLg2yDUkA1uIo5er-VoKrF-7h6eXSjFCTEvNrBTN-9z9kfRmVu9QbI~MHY0fbCUMzZLrNgDUjCnZHUWWhDTvzE3Lc5J7LokRVdkfXi2mwFHIhNOJ-1syO84Ytpbq9TQ6sxAzw",
//         li1:"Up to 50-hour battery life with quick charging (3 mincharge for up to 1 hour of playback)",
//                li2:"Sony’s lightest Wireless Noise-cancelling headband       ever",
//                li3:"Multi-Point Connection helps to pair with two Bluetooth devices at the same time",
//                li4:"Take noise cancelling to the next level with Sony’s  Integrated Processor V1,so you can fully immerseyourself in the music",
//                li5:"Super comfortable and lightweight desig ( 192 Grams ) High sound quality and well-balanced sound tuning"
//     },
//     {
//         id: 5,
//         Heading:"Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones with Mic, up to 50 Hours Playtime, Multi-Point Connection, App Support, AUX & Voice Assistant Support for Mobile Phones (Black)",
//         company: "Sony",
        
//        headphoneType: " On-ear headphone",
//         price:  700 ,
//         color: " Black",
//         Available: "In Stock" ,
//         Brand :"Sony",
//         imageUrl: "https://s3-alpha-sig.figma.com/img/53f6/cd70/2f55bf42e2ee45062fd235375a40bc8b?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q44ezU~DrnGV4lLTad2Rse6pDaGgTVtjHXTmMUIuWHqWLJ6ApwpQe3tsAtVUBeFQ80ZirCEOohEH-vRkNgyFi7aqNW7Bt94IdNxetsrGPvHkMzDYcnqP7xy3azwgHtgizK~0FFQfAtBbYNYnZgDHVV4m6qbd6QUB2JEckO~mgxZTVkLtSkxeGs9AM0C8SCXlQe4coE4GRyFFdDDpMzr7k1Tj2gYhTqqg9U7VwKTe7WaLjXdXTj8CA4s6wgJdkh31hWwOgRCl0RIHITae2KvWmeLctCA2EQ3-QNBBbi6XDopCgPoQEFQJMo4IpfYFiLcRad3TSg4v2yOh1gqo1Oo32g__",
//           imageUrl1: "https://s3-alpha-sig.figma.com/img/9d16/1dca/51b1eab04c1bb7f76be0ff7d72170807?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OuTCDBY3F5pUtMFsAEu6xoInT32lFkaLL9BFVXiTl7LCraFPPiQFBnaHS7rI5Im2udaIOrGs-x2L0~oyBgFKTVZD7DsEf79iZchDR3KgrgQml4SmycqQRkffDR~1FNLZoN4F-e1PvAI9uCd65MRTxh0~CvXg~RCB~8YzXv5w~AveBJU3lhSNgiwfGnXc4ZZkpyiRzROHWw82Jbv9dusXDdJ7ZkWDub2dOKSVFfoaWHrn8rDnCbM1zHlg2smlx0DnGDSG3AGsNKZZJD7Cy72HrkI0jVAKvEPFXDcWYBDN6dUh0-AlCW9TKv8z9FNh7sgjYYp6H9PY5s9d3O8y5ng4-Q",
//                imageUrl2:" https://s3-alpha-sig.figma.com/img/b7e9/bbbc/d1c4a98c4185b82ceb753acae0ea47f9?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=osWqPdI9iEpPbbG3ap53G8htkWyTBJQ0V6iLeRWfrqIHjsJ9hsqVjvyxEn5CKjuM6SLrAIyZPZ23P7hncGHSMkrVjJ3~4EYdKzIHNetBTAHxG43wMgV8leNt-Iq0adChUZnI7YxhWr7c~1Qiw94JRiIPf4q7zdzgFKIAIwhvC9dh517LtY3LhMomHQgd0eWW4perwwBu2Hx6OsxPSdLg2yDUkA1uIo5er-VoKrF-7h6eXSjFCTEvNrBTN-9z9kfRmVu9QbI~MHY0fbCUMzZLrNgDUjCnZHUWWhDTvzE3Lc5J7LokRVdkfXi2mwFHIhNOJ-1syO84Ytpbq9TQ6sxAzw",
//         li1:"Up to 50-hour battery life with quick charging (3 mincharge for up to 1 hour of playback)",
//                li2:"Sony’s lightest Wireless Noise-cancelling headband       ever",
//                li3:"Multi-Point Connection helps to pair with two Bluetooth devices at the same time",
//                li4:"Take noise cancelling to the next level with Sony’s  Integrated Processor V1,so you can fully immerseyourself in the music",
//                li5:"Super comfortable and lightweight desig ( 192 Grams ) High sound quality and well-balanced sound tuning"
//     },
//     {
//         Heading:"Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones with Mic, up to 50 Hours Playtime, Multi-Point Connection, App Support, AUX & Voice Assistant Support for Mobile Phones (Black)",
//         company: "Marshall Majaor IV",
        
//        headphoneType: "Sony WH-CH720N",
//         price:  13000 ,
//         color: "Brown",
//         Available: "In Stock" ,
//         Brand :"Sony",
//         imageUrl:"https://s3-alpha-sig.figma.com/img/f197/56ea/6b149ce68f0b77792f7d56ecd499b59a?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lgdU2-5Q6G-HXqpwqc-csE0-KpLLXfkJrOOES-CMv6-MeHe24SyrDq1fC4aN9ITr2TcXrljlOPwCl59EYN6tWnGn79w-sgr7dWYiBoanvC0G8M-~7nRivJ~xREGyG2pWHKTbKLrwshIPofu9-pLc8pOSDwVvjpZx~PO3~33sBFEkh-kxxca6w9tvm3LbHPjPDV0Sdu2T5immEyh3aXfZBfxY4feI2tPhhuv2rUjlE0W5g3NVpJMNe3EVSBmwNhz3INDTb4hU4xc8ZsHpWklilmsYXq~VX9Gxnuj5Kf0oJqsbocZ7--A8XZlojur1N~HnXOtT2vIa~hIxoFm3j3mXOQ__",
//           imageUrl1: "https://s3-alpha-sig.figma.com/img/9d16/1dca/51b1eab04c1bb7f76be0ff7d72170807?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OuTCDBY3F5pUtMFsAEu6xoInT32lFkaLL9BFVXiTl7LCraFPPiQFBnaHS7rI5Im2udaIOrGs-x2L0~oyBgFKTVZD7DsEf79iZchDR3KgrgQml4SmycqQRkffDR~1FNLZoN4F-e1PvAI9uCd65MRTxh0~CvXg~RCB~8YzXv5w~AveBJU3lhSNgiwfGnXc4ZZkpyiRzROHWw82Jbv9dusXDdJ7ZkWDub2dOKSVFfoaWHrn8rDnCbM1zHlg2smlx0DnGDSG3AGsNKZZJD7Cy72HrkI0jVAKvEPFXDcWYBDN6dUh0-AlCW9TKv8z9FNh7sgjYYp6H9PY5s9d3O8y5ng4-Q",
//                imageUrl2:" https://s3-alpha-sig.figma.com/img/b7e9/bbbc/d1c4a98c4185b82ceb753acae0ea47f9?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=osWqPdI9iEpPbbG3ap53G8htkWyTBJQ0V6iLeRWfrqIHjsJ9hsqVjvyxEn5CKjuM6SLrAIyZPZ23P7hncGHSMkrVjJ3~4EYdKzIHNetBTAHxG43wMgV8leNt-Iq0adChUZnI7YxhWr7c~1Qiw94JRiIPf4q7zdzgFKIAIwhvC9dh517LtY3LhMomHQgd0eWW4perwwBu2Hx6OsxPSdLg2yDUkA1uIo5er-VoKrF-7h6eXSjFCTEvNrBTN-9z9kfRmVu9QbI~MHY0fbCUMzZLrNgDUjCnZHUWWhDTvzE3Lc5J7LokRVdkfXi2mwFHIhNOJ-1syO84Ytpbq9TQ6sxAzw", 
//         li1:"Up to 50-hour battery life with quick charging (3 mincharge for up to 1 hour of playback)",
//                li2:"Sony’s lightest Wireless Noise-cancelling headband       ever",
//                li3:"Multi-Point Connection helps to pair with two Bluetooth devices at the same time",
//                li4:"Take noise cancelling to the next level with Sony’s  Integrated Processor V1,so you can fully immerseyourself in the music",
//                li5:"Super comfortable and lightweight desig ( 192 Grams ) High sound quality and well-balanced sound tuning"
//     },
//     {
//       Heading:"Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones with Mic, up to 50 Hours Playtime, Multi-Point Connection, App Support, AUX & Voice Assistant Support for Mobile Phones (Black)",
//         company: "Sony",
        
//        headphoneType: "Sony WH-CH720N",
//         price:  600,
//         color: " Blue",
//         Available: "In Stock" ,
//         Brand :"Sony",
//         imageUrl:"https://s3-alpha-sig.figma.com/img/5942/2df0/d8f60cd50a8f2e22a1d9f3d9fb4023d8?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eCCN8Qa5C9cdF4V9vDe7svNlH7Odxk58Wp4OWCD1eqLlDHiskFnSWeH7KBTBDuVYxTFjyOj77LzMOvT7FraLVazQm4Fcy3vMtQPJQw3x3J9NNjbdIRZ1cFuQrghquYXp6tAvx4gVWEU63js6MC5NXARwq9j05Ui-LXIYzibAo5f03ga5WT7fFbFSL76iYAfg40O5pIlqdexj1-Su3PSS0iqjDxwq~A2Klh-rvn1cToYd8hEzBdcpctr6G7TTlI8ShHIdOs1pyVg7-HdkALUyoidomiB0OCuZJ65gFDzOwnvmgvD8rXI9zCFKM5GIEHvXXaXKMpdXMsjChTVrlQiz3g__",
//           imageUrl1: "https://s3-alpha-sig.figma.com/img/9d16/1dca/51b1eab04c1bb7f76be0ff7d72170807?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OuTCDBY3F5pUtMFsAEu6xoInT32lFkaLL9BFVXiTl7LCraFPPiQFBnaHS7rI5Im2udaIOrGs-x2L0~oyBgFKTVZD7DsEf79iZchDR3KgrgQml4SmycqQRkffDR~1FNLZoN4F-e1PvAI9uCd65MRTxh0~CvXg~RCB~8YzXv5w~AveBJU3lhSNgiwfGnXc4ZZkpyiRzROHWw82Jbv9dusXDdJ7ZkWDub2dOKSVFfoaWHrn8rDnCbM1zHlg2smlx0DnGDSG3AGsNKZZJD7Cy72HrkI0jVAKvEPFXDcWYBDN6dUh0-AlCW9TKv8z9FNh7sgjYYp6H9PY5s9d3O8y5ng4-Q",
//                imageUrl2:" https://s3-alpha-sig.figma.com/img/b7e9/bbbc/d1c4a98c4185b82ceb753acae0ea47f9?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=osWqPdI9iEpPbbG3ap53G8htkWyTBJQ0V6iLeRWfrqIHjsJ9hsqVjvyxEn5CKjuM6SLrAIyZPZ23P7hncGHSMkrVjJ3~4EYdKzIHNetBTAHxG43wMgV8leNt-Iq0adChUZnI7YxhWr7c~1Qiw94JRiIPf4q7zdzgFKIAIwhvC9dh517LtY3LhMomHQgd0eWW4perwwBu2Hx6OsxPSdLg2yDUkA1uIo5er-VoKrF-7h6eXSjFCTEvNrBTN-9z9kfRmVu9QbI~MHY0fbCUMzZLrNgDUjCnZHUWWhDTvzE3Lc5J7LokRVdkfXi2mwFHIhNOJ-1syO84Ytpbq9TQ6sxAzw", 
//         li1:"Up to 50-hour battery life with quick charging (3 mincharge for up to 1 hour of playback)",
//                li2:"Sony’s lightest Wireless Noise-cancelling headband       ever",
//                li3:"Multi-Point Connection helps to pair with two Bluetooth devices at the same time",
//                li4:"Take noise cancelling to the next level with Sony’s  Integrated Processor V1,so you can fully immerseyourself in the music",
//                li5:"Super comfortable and lightweight desig ( 192 Grams ) High sound quality and well-balanced sound tuning"
//     },
//     {
//         id: 8,
//         Heading:"Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones with Mic, up to 50 Hours Playtime, Multi-Point Connection, App Support, AUX & Voice Assistant Support for Mobile Phones (Black)",
//         company: "Sony",
        
//        headphoneType: "Over-ear headphone",
//         price:  3900 ,
//         color: "Blue",
//         Available: "In Stock" ,
//         Brand :"Sony",
//         imageUrl:"https://s3-alpha-sig.figma.com/img/115e/ded1/874efd99732432b7d55474506a92f4e9?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pE04782yUGVB6GeQkMUEg4yuKYMl8ybc~nhaUz9c-6CxXcEffLbxkCKz32EjUtJbsVYWystDRKmksyPoXZu3MnX-255WGAvMAjrDAG2zORhLE2eKC0b7v~8XB1y6X~-96UYvr-ugfmNvXwWv0KpYemLeROPTzaDlJBuRRL8~jH-ErcLXha3-0XQTi~nzdKQBXGTr81A-bD58XUgIs4tb4xZuH3-~AnQlS42f2zKsgeLl8XhhP2pHi0phzbZRArdYOyNKwTfI2pKUp7bmn4WKKlI5xLLbe8mRB~Spa3RVYzl4FETJXCH5ouylHy-H2rOqSzJ-Cj1hpQalwgGpdKueNA__" ,
//           imageUrl1: "https://s3-alpha-sig.figma.com/img/9d16/1dca/51b1eab04c1bb7f76be0ff7d72170807?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OuTCDBY3F5pUtMFsAEu6xoInT32lFkaLL9BFVXiTl7LCraFPPiQFBnaHS7rI5Im2udaIOrGs-x2L0~oyBgFKTVZD7DsEf79iZchDR3KgrgQml4SmycqQRkffDR~1FNLZoN4F-e1PvAI9uCd65MRTxh0~CvXg~RCB~8YzXv5w~AveBJU3lhSNgiwfGnXc4ZZkpyiRzROHWw82Jbv9dusXDdJ7ZkWDub2dOKSVFfoaWHrn8rDnCbM1zHlg2smlx0DnGDSG3AGsNKZZJD7Cy72HrkI0jVAKvEPFXDcWYBDN6dUh0-AlCW9TKv8z9FNh7sgjYYp6H9PY5s9d3O8y5ng4-Q",
//                imageUrl2:" https://s3-alpha-sig.figma.com/img/b7e9/bbbc/d1c4a98c4185b82ceb753acae0ea47f9?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=osWqPdI9iEpPbbG3ap53G8htkWyTBJQ0V6iLeRWfrqIHjsJ9hsqVjvyxEn5CKjuM6SLrAIyZPZ23P7hncGHSMkrVjJ3~4EYdKzIHNetBTAHxG43wMgV8leNt-Iq0adChUZnI7YxhWr7c~1Qiw94JRiIPf4q7zdzgFKIAIwhvC9dh517LtY3LhMomHQgd0eWW4perwwBu2Hx6OsxPSdLg2yDUkA1uIo5er-VoKrF-7h6eXSjFCTEvNrBTN-9z9kfRmVu9QbI~MHY0fbCUMzZLrNgDUjCnZHUWWhDTvzE3Lc5J7LokRVdkfXi2mwFHIhNOJ-1syO84Ytpbq9TQ6sxAzw",
//         li1:"Up to 50-hour battery life with quick charging (3 mincharge for up to 1 hour of playback)",
//                li2:"Sony’s lightest Wireless Noise-cancelling headband       ever",
//                li3:"Multi-Point Connection helps to pair with two Bluetooth devices at the same time",
//                li4:"Take noise cancelling to the next level with Sony’s  Integrated Processor V1,so you can fully immerseyourself in the music",
//                li5:"Super comfortable and lightweight desig ( 192 Grams ) High sound quality and well-balanced sound tuning"
//     },
//     {
//         id: 9,
//         Heading:"Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones with Mic, up to 50 Hours Playtime, Multi-Point Connection, App Support, AUX & Voice Assistant Support for Mobile Phones (Black)",
//         company: "Sony",
        
//        headphoneType: "",
//         price:  699 ,
//         color: " white",
//         Available: "In Stock" ,
//         Brand :"Sony",
//         imageUrl:  "https://s3-alpha-sig.figma.com/img/bbb4/a2d4/9e634fea939d82b1d769c9e0b78e9765?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=URZHGikoE-7tk5PVFAH2CtUpILL-542ADBpxyJlxxl6Ey-~802o8UZ55Y~p91zJKnOvL4i5Rlzvt69amxbCQX-6Q13ZMeNkeQYa0ynKaxADTBG2uOmuqJwcx00xEdMCh5c4F8s8oW7FRqHdIvSDvfhGRYFTW~k0oBF8j93Hq6NZalZ3Js~31f0NYowfU2TONPCPm2Y~misOWH-bBUglqsEeazSiTF~XNvAEdqXFZoayhIqvttKGVATA4nHXrD0dz2l6DjsiqsTvxlDAx51IyBMg8IRoYlNGDkXb3zRBQk~so30ABbDHr8rrmgF89ZM7NJ7uL6C~d2JjjQKnewP~-EA__",
//           imageUrl1: "https://s3-alpha-sig.figma.com/img/9d16/1dca/51b1eab04c1bb7f76be0ff7d72170807?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OuTCDBY3F5pUtMFsAEu6xoInT32lFkaLL9BFVXiTl7LCraFPPiQFBnaHS7rI5Im2udaIOrGs-x2L0~oyBgFKTVZD7DsEf79iZchDR3KgrgQml4SmycqQRkffDR~1FNLZoN4F-e1PvAI9uCd65MRTxh0~CvXg~RCB~8YzXv5w~AveBJU3lhSNgiwfGnXc4ZZkpyiRzROHWw82Jbv9dusXDdJ7ZkWDub2dOKSVFfoaWHrn8rDnCbM1zHlg2smlx0DnGDSG3AGsNKZZJD7Cy72HrkI0jVAKvEPFXDcWYBDN6dUh0-AlCW9TKv8z9FNh7sgjYYp6H9PY5s9d3O8y5ng4-Q",
//                imageUrl2:" https://s3-alpha-sig.figma.com/img/b7e9/bbbc/d1c4a98c4185b82ceb753acae0ea47f9?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=osWqPdI9iEpPbbG3ap53G8htkWyTBJQ0V6iLeRWfrqIHjsJ9hsqVjvyxEn5CKjuM6SLrAIyZPZ23P7hncGHSMkrVjJ3~4EYdKzIHNetBTAHxG43wMgV8leNt-Iq0adChUZnI7YxhWr7c~1Qiw94JRiIPf4q7zdzgFKIAIwhvC9dh517LtY3LhMomHQgd0eWW4perwwBu2Hx6OsxPSdLg2yDUkA1uIo5er-VoKrF-7h6eXSjFCTEvNrBTN-9z9kfRmVu9QbI~MHY0fbCUMzZLrNgDUjCnZHUWWhDTvzE3Lc5J7LokRVdkfXi2mwFHIhNOJ-1syO84Ytpbq9TQ6sxAzw",
//         li1:"Up to 50-hour battery life with quick charging (3 mincharge for up to 1 hour of playback)",
//                li2:"Sony’s lightest Wireless Noise-cancelling headband       ever",
//                li3:"Multi-Point Connection helps to pair with two Bluetooth devices at the same time",
//                li4:"Take noise cancelling to the next level with Sony’s  Integrated Processor V1,so you can fully immerseyourself in the music",
//                li5:"Super comfortable and lightweight desig ( 192 Grams ) High sound quality and well-balanced sound tuning"
//     },
//     {
//         id: 10,
//         Heading:"Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones with Mic, up to 50 Hours Playtime, Multi-Point Connection, App Support, AUX & Voice Assistant Support for Mobile Phones (Black)",
//         company: "Sony",
        
//        headphoneType: "Sony WH-CH720N",
//         price:  2000 ,
//         color: "Black",
//         Available: "In Stock" ,
//         Brand :"Sony",
//         imageUrl:"https://s3-alpha-sig.figma.com/img/bbb4/a2d4/9e634fea939d82b1d769c9e0b78e9765?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=URZHGikoE-7tk5PVFAH2CtUpILL-542ADBpxyJlxxl6Ey-~802o8UZ55Y~p91zJKnOvL4i5Rlzvt69amxbCQX-6Q13ZMeNkeQYa0ynKaxADTBG2uOmuqJwcx00xEdMCh5c4F8s8oW7FRqHdIvSDvfhGRYFTW~k0oBF8j93Hq6NZalZ3Js~31f0NYowfU2TONPCPm2Y~misOWH-bBUglqsEeazSiTF~XNvAEdqXFZoayhIqvttKGVATA4nHXrD0dz2l6DjsiqsTvxlDAx51IyBMg8IRoYlNGDkXb3zRBQk~so30ABbDHr8rrmgF89ZM7NJ7uL6C~d2JjjQKnewP~-EA__",
//           imageUrl1: "https://s3-alpha-sig.figma.com/img/9d16/1dca/51b1eab04c1bb7f76be0ff7d72170807?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OuTCDBY3F5pUtMFsAEu6xoInT32lFkaLL9BFVXiTl7LCraFPPiQFBnaHS7rI5Im2udaIOrGs-x2L0~oyBgFKTVZD7DsEf79iZchDR3KgrgQml4SmycqQRkffDR~1FNLZoN4F-e1PvAI9uCd65MRTxh0~CvXg~RCB~8YzXv5w~AveBJU3lhSNgiwfGnXc4ZZkpyiRzROHWw82Jbv9dusXDdJ7ZkWDub2dOKSVFfoaWHrn8rDnCbM1zHlg2smlx0DnGDSG3AGsNKZZJD7Cy72HrkI0jVAKvEPFXDcWYBDN6dUh0-AlCW9TKv8z9FNh7sgjYYp6H9PY5s9d3O8y5ng4-Q",
//                imageUrl2:" https://s3-alpha-sig.figma.com/img/b7e9/bbbc/d1c4a98c4185b82ceb753acae0ea47f9?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=osWqPdI9iEpPbbG3ap53G8htkWyTBJQ0V6iLeRWfrqIHjsJ9hsqVjvyxEn5CKjuM6SLrAIyZPZ23P7hncGHSMkrVjJ3~4EYdKzIHNetBTAHxG43wMgV8leNt-Iq0adChUZnI7YxhWr7c~1Qiw94JRiIPf4q7zdzgFKIAIwhvC9dh517LtY3LhMomHQgd0eWW4perwwBu2Hx6OsxPSdLg2yDUkA1uIo5er-VoKrF-7h6eXSjFCTEvNrBTN-9z9kfRmVu9QbI~MHY0fbCUMzZLrNgDUjCnZHUWWhDTvzE3Lc5J7LokRVdkfXi2mwFHIhNOJ-1syO84Ytpbq9TQ6sxAzw", 
//         li1:"Up to 50-hour battery life with quick charging (3 mincharge for up to 1 hour of playback)",
//                li2:"Sony’s lightest Wireless Noise-cancelling headband       ever",
//                li3:"Multi-Point Connection helps to pair with two Bluetooth devices at the same time",
//                li4:"Take noise cancelling to the next level with Sony’s  Integrated Processor V1,so you can fully immerseyourself in the music",
//                li5:"Super comfortable and lightweight desig ( 192 Grams ) High sound quality and well-balanced sound tuning"
//     },
//     {
//         id: 11,
//         Heading:"Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones with Mic, up to 50 Hours Playtime, Multi-Point Connection, App Support, AUX & Voice Assistant Support for Mobile Phones (Black)",
//         company: "Sony",
        
//        headphoneType: "Blue | Over-ear headphone",
//         price:  300 ,
//         color: "Blue",
//         Available: "In Stock" ,
//         Brand :"Sony",
//         imageUrl: "https://s3-alpha-sig.figma.com/img/554f/c515/4d121305f11792d95b1abb9aace57f62?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eM3r1NXL9OX3B7zJSuBBLsqmPlJ0qKXkKmfCTPkSLC7AZtdOCsWrZgRXnJE3FF7AUW55sjNy-O~mhV7Wl6FYHRbUCUO3HBzIP9czxZN76RTUgaLNaI8tPmy~H7h5PedQwHXtgoLFLW26Ima4K58CYjtKhQ0ZaBzmsJYAulW6XiPUpjTK01MnhFCnCgrvyou3QPNKK8qyh7cbZGMKOv1tOc3zVg6QRBCq0KMoQJhaqd3HeqVnOWppmwao5JAPBhxGFyyer06e7bl-EW1kiccNF3rqFPelAQP3iAjTDiqJjSnrV0kMypSnkkDlw80grby8lRAg9l9iSk5E3zBC1HXxhQ__",
//          imageUrl1: "https://s3-alpha-sig.figma.com/img/9d16/1dca/51b1eab04c1bb7f76be0ff7d72170807?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OuTCDBY3F5pUtMFsAEu6xoInT32lFkaLL9BFVXiTl7LCraFPPiQFBnaHS7rI5Im2udaIOrGs-x2L0~oyBgFKTVZD7DsEf79iZchDR3KgrgQml4SmycqQRkffDR~1FNLZoN4F-e1PvAI9uCd65MRTxh0~CvXg~RCB~8YzXv5w~AveBJU3lhSNgiwfGnXc4ZZkpyiRzROHWw82Jbv9dusXDdJ7ZkWDub2dOKSVFfoaWHrn8rDnCbM1zHlg2smlx0DnGDSG3AGsNKZZJD7Cy72HrkI0jVAKvEPFXDcWYBDN6dUh0-AlCW9TKv8z9FNh7sgjYYp6H9PY5s9d3O8y5ng4-Q",
//                imageUrl2:" https://s3-alpha-sig.figma.com/img/b7e9/bbbc/d1c4a98c4185b82ceb753acae0ea47f9?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=osWqPdI9iEpPbbG3ap53G8htkWyTBJQ0V6iLeRWfrqIHjsJ9hsqVjvyxEn5CKjuM6SLrAIyZPZ23P7hncGHSMkrVjJ3~4EYdKzIHNetBTAHxG43wMgV8leNt-Iq0adChUZnI7YxhWr7c~1Qiw94JRiIPf4q7zdzgFKIAIwhvC9dh517LtY3LhMomHQgd0eWW4perwwBu2Hx6OsxPSdLg2yDUkA1uIo5er-VoKrF-7h6eXSjFCTEvNrBTN-9z9kfRmVu9QbI~MHY0fbCUMzZLrNgDUjCnZHUWWhDTvzE3Lc5J7LokRVdkfXi2mwFHIhNOJ-1syO84Ytpbq9TQ6sxAzw",
//         li1:"Up to 50-hour battery life with quick charging (3 mincharge for up to 1 hour of playback)",
//                li2:"Sony’s lightest Wireless Noise-cancelling headband       ever",
//                li3:"Multi-Point Connection helps to pair with two Bluetooth devices at the same time",
//                li4:"Take noise cancelling to the next level with Sony’s  Integrated Processor V1,so you can fully immerseyourself in the music",
//                li5:"Super comfortable and lightweight desig ( 192 Grams ) High sound quality and well-balanced sound tuning"

//     },
//     {
//         id: 12,
//        Heading:"Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones with Mic, up to 50 Hours Playtime, Multi-Point Connection, App Support, AUX & Voice Assistant Support for Mobile Phones (Black)",
//         company: "Sony",
        
//        headphoneType: "Sony WH-CH720N",
//         price:  3500 ,
//         color: "Black ",
//         Available: "In Stock" ,
//         Brand :"Sony",
//         imageUrl: "https://s3-alpha-sig.figma.com/img/1cba/c770/f2f9eedf1c329e134a7c31920b8a571f?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qihocpNYpeUNYXGjXhP8v~q-gT55ScY-2J~vPhbV0VCkAp8MOp2-ZgHuT8ulLmD841td~CUSLGfO96K~usbKMQYCHR6vAR5hcaoh3Y9ZjrSgN4tpx3Pdx91oGI5KSIPNQy3KgxYm58WWpe-8dk2KujAv6oHSErfQCzlxbc3RY9nQ5AL1yU~7sTUrTv-jIc7ZFqpfhfOtl4YXAe9xDl4-QLjgJrP1PR0Rfyz0pcXC99HiiFGxv2WOYWvmq9~GiH2pbk-erLl67NPXwcC22z2wCV2nvQDIYHZ5KlCirs1Mz3FNYHbRu8rBoNTrLvCsTYmhTsXrg87~HJr6~3dNPB4ZMA",
//           imageUrl1: "https://s3-alpha-sig.figma.com/img/9d16/1dca/51b1eab04c1bb7f76be0ff7d72170807?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OuTCDBY3F5pUtMFsAEu6xoInT32lFkaLL9BFVXiTl7LCraFPPiQFBnaHS7rI5Im2udaIOrGs-x2L0~oyBgFKTVZD7DsEf79iZchDR3KgrgQml4SmycqQRkffDR~1FNLZoN4F-e1PvAI9uCd65MRTxh0~CvXg~RCB~8YzXv5w~AveBJU3lhSNgiwfGnXc4ZZkpyiRzROHWw82Jbv9dusXDdJ7ZkWDub2dOKSVFfoaWHrn8rDnCbM1zHlg2smlx0DnGDSG3AGsNKZZJD7Cy72HrkI0jVAKvEPFXDcWYBDN6dUh0-AlCW9TKv8z9FNh7sgjYYp6H9PY5s9d3O8y5ng4-Q",
//                imageUrl2:" https://s3-alpha-sig.figma.com/img/b7e9/bbbc/d1c4a98c4185b82ceb753acae0ea47f9?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=osWqPdI9iEpPbbG3ap53G8htkWyTBJQ0V6iLeRWfrqIHjsJ9hsqVjvyxEn5CKjuM6SLrAIyZPZ23P7hncGHSMkrVjJ3~4EYdKzIHNetBTAHxG43wMgV8leNt-Iq0adChUZnI7YxhWr7c~1Qiw94JRiIPf4q7zdzgFKIAIwhvC9dh517LtY3LhMomHQgd0eWW4perwwBu2Hx6OsxPSdLg2yDUkA1uIo5er-VoKrF-7h6eXSjFCTEvNrBTN-9z9kfRmVu9QbI~MHY0fbCUMzZLrNgDUjCnZHUWWhDTvzE3Lc5J7LokRVdkfXi2mwFHIhNOJ-1syO84Ytpbq9TQ6sxAzw",
//         li1:"Up to 50-hour battery life with quick charging (3 mincharge for up to 1 hour of playback)",
//                li2:"Sony’s lightest Wireless Noise-cancelling headband       ever",
//                li3:"Multi-Point Connection helps to pair with two Bluetooth devices at the same time",
//                li4:"Take noise cancelling to the next level with Sony’s  Integrated Processor V1,so you can fully immerseyourself in the music",
//                li5:"Super comfortable and lightweight desig ( 192 Grams ) High sound quality and well-balanced sound tuning"
//     },
//     {
//         id: 13,
//       Heading:"Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones with Mic, up to 50 Hours Playtime, Multi-Point Connection, App Support, AUX & Voice Assistant Support for Mobile Phones (Black)",
//         company: "Sony",
        
//        headphoneType: "In-ear headphone",
//         price:  500 ,
//         color: "Black ",
//         Available: "In Stock" ,
//         Brand :"Sony",
 
//        imageUrl: "https://s3-alpha-sig.figma.com/img/27f4/8145/9398cb679c284ec92697a7f522bce86f?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pkjNmTSCBMfpMkt63RtcAMLk7w9KBqAQCbF3xUPW2Akf4Il37DK5gGgCSFVrI-8jDknZLm7xIM-2HRz8Mrn6MySwycT6yCY7GLEn8b5FeeccbXjkfWWSgwJNkvWRgUrvUzUz5WIhB7HBeXaEALR8WdQDpxO9X3vN8fMvgmk0RRgNdSCNH5kQg9k5imO4nponeSrj0RkRHk-aty99eD2~iRTJdrsKZOmME1o4j3rC7wvr06pBtbK~ex4Hm-ldF~G6fXIc6ARCj-mQVXXm-K1ECUvWoH4MfLaf-un1wZmyF7IO5kCS0ed7BhBiadzRrzcEnIifuWUd8ng7ZIjpq16B4A",
       
//        li1:"Up to 50-hour battery life with quick charging (3 mincharge for up to 1 hour of playback)",
//                li2:"Sony’s lightest Wireless Noise-cancelling headband       ever",
//                li3:"Multi-Point Connection helps to pair with two Bluetooth devices at the same time",
//                li4:"Take noise cancelling to the next level with Sony’s  Integrated Processor V1,so you can fully immerseyourself in the music",
//                li5:"Super comfortable and lightweight desig ( 192 Grams ) High sound quality and well-balanced sound tuning"
//     },
// ];



// GET /api/products
// router.get('/product', (req, res) => {
//     res.json(product);
// });

// router.get('/product/:id', (req, res) => {
//     const productId = parseInt(req.params.id);
//     const product = product.find(product => product.id === productId);
//     if (product) {
//         res.json(product);
//     } else {
//         res.status(404).json({ error: 'Product not found' });
//     }
// });
router.get('/product', async (req, res) => {
    try {
        const product = await Product.find(); // Fetch all products from the database
        res.json(product); // Send the products as JSON response
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// router.post('/create', async (req, res) => {
//     try {
//         // Extract data from the request body
//         const { heading, company, headphoneType, price, color, available, brand, imageUrl, imageUrl1, imageUrl2, li1, li2, li3, li4, li5 } = req.body;

//         // Create a new product object
//         const newProduct = new Product({
//             heading,
//             company,
//             headphoneType,
//             price,
//             color,
//             available,
//             brand,
//             imageUrl,
//             imageUrl1,
//             imageUrl2,
//             li1,
//             li2,
//             li3,
//             li4,
//             li5
//         });

//         // Save the product to the database
//         const savedProduct = await newProduct.save();

//         // Send a success response with the saved product
//         res.status(201).json(savedProduct);
//     } catch (error) {
//         // Send an error response if there's any issue
//         res.status(400).json({ message: error.message });
//     }
// });


module.exports = router;