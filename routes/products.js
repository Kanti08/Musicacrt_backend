const express = require('express');
const router = express.Router();

const products = [
    // {
    //     id: 1,
    //     title: "Product 1",
    //     description: "Description of product 1",
    //     price: 10.99,
    //     imageUrl: "https://s3-alpha-sig.figma.com/img/52ef/4984/7a51b2e4f48541a20d7215faf1b11879?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hPHXDAawidQZslzVHYqA~SYt58nu-VkaMGMTa-HF~wYW7jRpMj0Eb51QX9-HTpW1HLougvdkSKCPQlzAnIXLUSas5k5x8fWK-7SHRPgPT3C0SEmq73dF~FS8GaPFCxXS1US-z2xovAYg97eB0S3EEn5TXEGat6zzfjJNmfTLhP1JS2eXWOqH9nv7IkOqip-JcFQvE4sV7PwfFeKE9uQhkL4-LXcHrvd5imq3OIvcr8errBgDy3wsUe5GCYqSzcUxJS4aB6ANr~Tgb4qZeXqfOAbZj1eD9EKsakmGvHZyY2U0bBcW5bI770R9e72sk2NkkyGbe~8qEetu-~qlkf42yQ__"
    // },
        {
        id: 1,
        Heading:"Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones with Mic, up to 50 Hours Playtime, Multi-Point Connection, App Support, AUX & Voice Assistant Support for Mobile Phones (Black)",
        company: "Sony",
        
       headphoneType: "Sony WH-CH720N",
        price:  3500 ,
        color: "Black | Over-ear headphone",
        Available: "In Stock" ,
        Brand :"Sony",
        imageUrl: "https://s3-alpha-sig.figma.com/img/7118/6b72/ae89020cf50809fad5f38a0b16087b8b?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a1n~1DJJXh3b-z~hPlRh~X632GnXoZFhVWmsI7ma~cvYRoqaJXhkSGjdsQPps0cHOWKiAMK06AU9nXLHMx42a0iGXm5BFqkGGXaieFVvTa0dcrIrM8Mj-sT1zlXRoGQrTlFRfdu72hemU9Qbm3jrxxF9LPCz9NVRWHdk6TiQhfvh~pqMIKEj902QredmzY~YSsyizVay5rontzaXhTewYdlkCUdb42WgnHi2YbhX3~ypA5fKPtJOIM6Calqqn-K7By4TxYVZU1L55AK-LQkJqlasywEHTiXAJmISsHGAHp~qq9NsdXB7Z~zRNF3ibEaaLzDwviztnvlEYeJSFjRijw",
                imageUrl1: "https://s3-alpha-sig.figma.com/img/9d16/1dca/51b1eab04c1bb7f76be0ff7d72170807?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OuTCDBY3F5pUtMFsAEu6xoInT32lFkaLL9BFVXiTl7LCraFPPiQFBnaHS7rI5Im2udaIOrGs-x2L0~oyBgFKTVZD7DsEf79iZchDR3KgrgQml4SmycqQRkffDR~1FNLZoN4F-e1PvAI9uCd65MRTxh0~CvXg~RCB~8YzXv5w~AveBJU3lhSNgiwfGnXc4ZZkpyiRzROHWw82Jbv9dusXDdJ7ZkWDub2dOKSVFfoaWHrn8rDnCbM1zHlg2smlx0DnGDSG3AGsNKZZJD7Cy72HrkI0jVAKvEPFXDcWYBDN6dUh0-AlCW9TKv8z9FNh7sgjYYp6H9PY5s9d3O8y5ng4-Q",
               imageUrl2:" https://s3-alpha-sig.figma.com/img/b7e9/bbbc/d1c4a98c4185b82ceb753acae0ea47f9?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=osWqPdI9iEpPbbG3ap53G8htkWyTBJQ0V6iLeRWfrqIHjsJ9hsqVjvyxEn5CKjuM6SLrAIyZPZ23P7hncGHSMkrVjJ3~4EYdKzIHNetBTAHxG43wMgV8leNt-Iq0adChUZnI7YxhWr7c~1Qiw94JRiIPf4q7zdzgFKIAIwhvC9dh517LtY3LhMomHQgd0eWW4perwwBu2Hx6OsxPSdLg2yDUkA1uIo5er-VoKrF-7h6eXSjFCTEvNrBTN-9z9kfRmVu9QbI~MHY0fbCUMzZLrNgDUjCnZHUWWhDTvzE3Lc5J7LokRVdkfXi2mwFHIhNOJ-1syO84Ytpbq9TQ6sxAzw",
               imageUr3:"https://s3-alpha-sig.figma.com/img/e2fc/7b6a/01b12c3476263b6cd1871f3cd9334a02?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kDAamDdfKH1t1PWgOsM3K8vpEYfHQ~6kBNiCrARJ~Fl6MpWgHXMlCLyyogeNqwpP1WyioiSeD4wGfzePT1qNqhax3NHcJwqAHV7eRrba9eCOb-iukl5fAcZIQxUm-o7DtE-WqT9TQbQ0bTWvjOYy9CiZ1Yz91F7zzSvx5Sr7~GyOJBvDboBjy8AOv19RVMhh5WqLssb7ZDeUim7YgD9mfiHvi0lzboCjSn2~GpA~w5zt1OjTyzUAvR4crxYJRXmGgeaGbKva9P7-T3jA2vIp4U-9-LQmCJqYka9tPiCRwRfQApMXgAgUt~1fY-7FIcgao-plGqLPU2PmfvY4gMBXVQ",
               li1:"Up to 50-hour battery life with quick charging (3 mincharge for up to 1 hour of playback)",
               li2:"Sony’s lightest Wireless Noise-cancelling headband       ever",
               li3:"Multi-Point Connection helps to pair with two Bluetooth devices at the same time",
               li4:"Take noise cancelling to the next level with Sony’s  Integrated Processor V1,so you can fully immerseyourself in the music",
               li5:"Super comfortable and lightweight desig ( 192 Grams ) High sound quality and well-balanced sound tuning"
        },
    {          
    
        id: 2,
      Heading:"Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones with Mic, up to 50 Hours Playtime, Multi-Point Connection, App Support, AUX & Voice Assistant Support for Mobile Phones (Black)",
        company: "Sony",
        
       headphoneType: "Sony WH-CH720N",
        price:  3500 ,
        color: "Black | Over-ear headphone",
        Available: "In Stock" ,
        Brand :"Sony",
        imageUrl: "https://s3-alpha-sig.figma.com/img/1cba/c770/f2f9eedf1c329e134a7c31920b8a571f?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qihocpNYpeUNYXGjXhP8v~q-gT55ScY-2J~vPhbV0VCkAp8MOp2-ZgHuT8ulLmD841td~CUSLGfO96K~usbKMQYCHR6vAR5hcaoh3Y9ZjrSgN4tpx3Pdx91oGI5KSIPNQy3KgxYm58WWpe-8dk2KujAv6oHSErfQCzlxbc3RY9nQ5AL1yU~7sTUrTv-jIc7ZFqpfhfOtl4YXAe9xDl4-QLjgJrP1PR0Rfyz0pcXC99HiiFGxv2WOYWvmq9~GiH2pbk-erLl67NPXwcC22z2wCV2nvQDIYHZ5KlCirs1Mz3FNYHbRu8rBoNTrLvCsTYmhTsXrg87~HJr6~3dNPB4ZMA"
    },
    {
        id: 3,
        Heading:"Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones with Mic, up to 50 Hours Playtime, Multi-Point Connection, App Support, AUX & Voice Assistant Support for Mobile Phones (Black)",
        company: "Sony",
        
       headphoneType: "Sony WH-CH720N",
        price:  3500 ,
        color: "Black | Over-ear headphone",
        Available: "In Stock" ,
        Brand :"Sony",
        imageUrl: "https://s3-alpha-sig.figma.com/img/52ef/4984/7a51b2e4f48541a20d7215faf1b11879?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=osCJpR5klu-4uOAVGqgnWFe5kPcTLykgtemggN2p~mSvmgQut53taJBJH5IDmzwc7mLBs6dYjCXz8qo6ujJ~GVidINHCRmMShyOQutnWwuJBLYDtGjAGE7PMTdOBJxWJMAeKcjHhXMolxIbhXqKZsHKaFQnWdnFoS3PGPTB74249Bd0nNDGU2i3NBcGFHcizHiguiqXPUSHRcWAc~IyFzORymDe6DF5PqfhX0vokheRqq67Mp8OeNout1wBhiYjTgv9pXzVfEeX-OZvJJNOQFnBM2vrZ8Jf0VecT78wh2RzNx1tyN0YErVB9144FOZoTJreCdtzqagbQ3-R79dn4Hw"
    },
    {
        id: 4,
       Heading:"Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones with Mic, up to 50 Hours Playtime, Multi-Point Connection, App Support, AUX & Voice Assistant Support for Mobile Phones (Black)",
        company: "Sony",
        
       headphoneType: "Sony WH-CH720N",
        price:  3500 ,
        color: "Black | Over-ear headphone",
        Available: "In Stock" ,
        Brand :"Sony",
        imageUrl: "https://s3-alpha-sig.figma.com/img/643b/e3ec/b328e0dd0e721192439fb3566c3c933d?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PaxKdFYhQSfGDR3VrQzfa-nn9u50TUeC5yPk~SYDPKYNDMoyJvsyftRAowlNv1tc1eQYNBX-VRBMjcHT2XdR-ybdJh3XGg9hNI~JcVivpMf4FVTk36cPs6n4RDizfEbwvM20aAiEv2V53Dy8YhIAAXe0zgM4q9mL2Hg~x0kp3lZ-4aaGekWOLQhBwuvUic8aHHRaVcBl-7CQvCosBh0m4kOtK9qpyk9eeSVs0ICTG6yDzVVfyGbr-BQmfgtZhNV1Ez4ukCydVVwplT4~5-VjcZ5KaJkGeCehzmJZ5MuSB3DcMLbkNS0eiFjDUBadBfMVx83WIEhjmBA5N5cc4M2IaQ"
    },
    {
        id: 5,
        Heading:"Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones with Mic, up to 50 Hours Playtime, Multi-Point Connection, App Support, AUX & Voice Assistant Support for Mobile Phones (Black)",
        company: "Sony",
        
       headphoneType: "Sony WH-CH720N",
        price:  3500 ,
        color: "Black | Over-ear headphone",
        Available: "In Stock" ,
        Brand :"Sony",
        imageUrl: "https://s3-alpha-sig.figma.com/img/53f6/cd70/2f55bf42e2ee45062fd235375a40bc8b?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p3ww7cqn3yB2RNT60fnZGQvh1icurWCY0fKg9cNF-CnbBDCJndaXUmbLumhZvwnlYUR9wH7gBCtk8sj2rZKaQxQ0Qo-HzDL49UqhXfzM66NpfA7-lBa5hJVOv8lOX5-40LN5RgjR37cLakNWKyKm13p~etd3d6uQCK2Pwg0t8skF69TbZtZa9kW0DnbyuM291pJBz7PXWhisewrVMQrXmQfKgtVx0oUsnJWA4c~60lRV62mu6pwfjAL92PMYJCBBDfcWGMGCjT4jVwJE2eF1QFmBwcSBmUJHE88K~W9uWrIqlw-hFDA0StHITgUNGZC0M388qB~NSmBB09fyd7AJ4A"
    },
    {
        Heading:"Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones with Mic, up to 50 Hours Playtime, Multi-Point Connection, App Support, AUX & Voice Assistant Support for Mobile Phones (Black)",
        company: "Sony",
        
       headphoneType: "Sony WH-CH720N",
        price:  3500 ,
        color: "Black | Over-ear headphone",
        Available: "In Stock" ,
        Brand :"Sony",
        imageUrl:"https://s3-alpha-sig.figma.com/img/f197/56ea/6b149ce68f0b77792f7d56ecd499b59a?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UePDTXR8BJk3H5-Mn7sa11HKkqG8szrzyZ0JkC57wQ-bgdbHHF2JY7MU6sKZKbh6ZRo-e0yd8Zpt8P2wrYJIDBQDk96YZc~nEIDXI5XKoOrDqDN9VSLe3EgyvdDVfEr2oqKJRwjgFmFekOYPJJKuWMZccKq1O~clR3TK3OO8eAC7XIbJJGo-96-fWRLgGfNQbybx29lC18g7VAi5mipKCVwAFJLifWaezYa1jdHihCHGMEUOjVx6kg54BRm6r2CgDmDaK5hW2FpmQ-O1~AuN6ExL-ur2gok9MYZVd3pT2hf6QjPS3X-Q3jlL5liJb~TCOacs4Ny3esM1pG17Oki9~A"
    },
    {
      Heading:"Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones with Mic, up to 50 Hours Playtime, Multi-Point Connection, App Support, AUX & Voice Assistant Support for Mobile Phones (Black)",
        company: "Sony",
        
       headphoneType: "Sony WH-CH720N",
        price:  3500 ,
        color: "Black | Over-ear headphone",
        Available: "In Stock" ,
        Brand :"Sony",
        imageUrl: "https://s3-alpha-sig.figma.com/img/5942/2df0/d8f60cd50a8f2e22a1d9f3d9fb4023d8?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nSKJu5her2YG63rK1BgVPZxARl8op1gGpSdhJQ-0xHZ4uzyGnMJkwp6D2IISBxuYzV0FsOAkNGLoXlGpdBj4zeHql0zEn9kXKknaFPgtYhYLyzgm-4WsfJZfWVhcZCnspK1UKoa1VFT6k~Y64i21MqY-ZyqcrsFBmf4SIxK9BhS0djnUwbmMQ5NzFUlizGJS7UFVLAU4MZ9qPBU2OcfhcCE-t1teAqOzQh0Wg7nrSswds~IdhPc1gWuVHl5ga9ebdk2NtouHqboB1ywEJLCqzyFSvewwJ6IjKCubK784t1iDl0ZqmWksePB6XLHnRH5LVgpznKWhUDFGK3ZpnaLhhg"
    },
    {
        id: 8,
        Heading:"Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones with Mic, up to 50 Hours Playtime, Multi-Point Connection, App Support, AUX & Voice Assistant Support for Mobile Phones (Black)",
        company: "Sony",
        
       headphoneType: "Sony WH-CH720N",
        price:  3500 ,
        color: "Black | Over-ear headphone",
        Available: "In Stock" ,
        Brand :"Sony",
        imageUrl: "https://s3-alpha-sig.figma.com/img/115e/ded1/874efd99732432b7d55474506a92f4e9?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B7RJ2F5-gzCZzGW6-jduAvqzOZ5P1Kx7nEtuaDl-WfBT-ieI1WVhwu4XLuAjkk4B5~jsUyko6xKi8DHPIoKJMoXYmZfWPDsvaIM7dc7ZNxseJeBwrObY81J~Ff8cBOP3coJELvXe1SVHGRIObV7350900yLbC2d7bxZdAa9ZKgmcPWj~-jzj1YwOHxehKeqlwgTGixSWfZuGSB7asWqhvZVP50ZoEweXLJp-CUgVGJ3hQde-CvIjUWXVd019f78fW477VHc8ojU5Nt-xIEtz-yuSQOpAuSQij-tCYvtyMmh~3hM91IalSDfrSmX3yKQrCQEDsXmmJ6uQHjiuLpaj1w"
    },
    {
        id: 9,
        Heading:"Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones with Mic, up to 50 Hours Playtime, Multi-Point Connection, App Support, AUX & Voice Assistant Support for Mobile Phones (Black)",
        company: "Sony",
        
       headphoneType: "Sony WH-CH720N",
        price:  3500 ,
        color: "Black | Over-ear headphone",
        Available: "In Stock" ,
        Brand :"Sony",
        imageUrl:  "https://s3-alpha-sig.figma.com/img/bbb4/a2d4/9e634fea939d82b1d769c9e0b78e9765?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UIkqhllLF33ezZ3yYwWI4o8IzederRAwwhX8Ywn1wN14smbPm2CtH8qrsK0ENVSqtdhPh3V2JNpIIlEb3Y410vp4g8qB3U2eHrIG7muJ4HiIFApY1gU9zBHQACER4YnhfMj73H1S7ehuPbXHg7-U05Nweh7uwxcK2MDfFhve098vOfPbiAGMY1O7SoqsGVVMFhntrHMKjKuekvMW2~2-GTRKbGptmeSYXhlx81IrJyi-UajgIBfBDMfQ8rD7aEoBJptmABduCf3V41T3jYA1Qq~9-VxsoSSOEEdHq1uNrtLjHBmJRxOLu0~3p4CWa~R4o39s0sT5B0mfRMUOVNvU0w"
    },
    {
        id: 10,
        Heading:"Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones with Mic, up to 50 Hours Playtime, Multi-Point Connection, App Support, AUX & Voice Assistant Support for Mobile Phones (Black)",
        company: "Sony",
        
       headphoneType: "Sony WH-CH720N",
        price:  3500 ,
        color: "Black | Over-ear headphone",
        Available: "In Stock" ,
        Brand :"Sony",
        imageUrl:"https://s3-alpha-sig.figma.com/img/e072/b1a4/9891bd1480293bc72988a4a2ed980386?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zrc8T-~tz7fxZgkbi37X74I8ufe0JhztPJRpN4WfnDoKe~rjDv9AvVduvtacqEXRLUh7D-bkJnHa9Xwf3ph~n-RBrjwhuWMu3NBKxMDHqjalxARy0C0~dAJZUQbap-5iLT77iZbPt4YuQ19xKi48kZJfXZO01cWAxAPDsrk1BKtnN9vCokCFwmxh-scfdSgqNEWGa-xkLZ7zr9wauLQCLi-Ste5IdlQwzudoNoRdKScPvEzx872EFk4cI8iugzeAXZL70-n0s7LThY78h3FdliQO4qq~sd1SNpIf-XfEjUEGMCj7K7WVERDpeXe8X6NgjSzATJj8-qYUY4LrRvqFCw"
    },
    {
        id: 11,
        Heading:"Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones with Mic, up to 50 Hours Playtime, Multi-Point Connection, App Support, AUX & Voice Assistant Support for Mobile Phones (Black)",
        company: "Sony",
        
       headphoneType: "Sony WH-CH720N",
        price:  3500 ,
        color: "Black | Over-ear headphone",
        Available: "In Stock" ,
        Brand :"Sony",
        imageUrl: "https://s3-alpha-sig.figma.com/img/554f/c515/4d121305f11792d95b1abb9aace57f62?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=drWO2N9GqupqJaZ7kd1bS074QyLhukHoRmj3XbwqWaGi~q4pOGnRdW-EPYp15tKtqbLUPf8gV6QHtKbftFMAw21Wep-61S2jYwNh15bMy4j~TQSH3LOss7Sja5tga0lUytp8kd84OtRXEcpKyk-sjILG4taBY6dSi6dNqRxlmN9Nmtc3DkDChbOOkmpskAM6bHUMi6069lXs7yRQIOOMx8jht5j6WtwmOx6iK-tyLxnr8l6MTeRlJC~3rwg6bFgjZBssZZti1J-qCs1YEF~VKBKoUBG0wSfFh9o3P6KpuVJIs9vRuq1jsoksG894hynXj-McSPy2EJlz82xYU5nXkw",

    },
    {
        id: 12,
       Heading:"Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones with Mic, up to 50 Hours Playtime, Multi-Point Connection, App Support, AUX & Voice Assistant Support for Mobile Phones (Black)",
        company: "Sony",
        
       headphoneType: "Sony WH-CH720N",
        price:  3500 ,
        color: "Black | Over-ear headphone",
        Available: "In Stock" ,
        Brand :"Sony",
        imageUrl: "https://s3-alpha-sig.figma.com/img/1cba/c770/f2f9eedf1c329e134a7c31920b8a571f?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qihocpNYpeUNYXGjXhP8v~q-gT55ScY-2J~vPhbV0VCkAp8MOp2-ZgHuT8ulLmD841td~CUSLGfO96K~usbKMQYCHR6vAR5hcaoh3Y9ZjrSgN4tpx3Pdx91oGI5KSIPNQy3KgxYm58WWpe-8dk2KujAv6oHSErfQCzlxbc3RY9nQ5AL1yU~7sTUrTv-jIc7ZFqpfhfOtl4YXAe9xDl4-QLjgJrP1PR0Rfyz0pcXC99HiiFGxv2WOYWvmq9~GiH2pbk-erLl67NPXwcC22z2wCV2nvQDIYHZ5KlCirs1Mz3FNYHbRu8rBoNTrLvCsTYmhTsXrg87~HJr6~3dNPB4ZMA"
    },
    {
        id: 13,
      Heading:"Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones with Mic, up to 50 Hours Playtime, Multi-Point Connection, App Support, AUX & Voice Assistant Support for Mobile Phones (Black)",
        company: "Sony",
        
       headphoneType: "Sony WH-CH720N",
        price:  3500 ,
        color: "Black | Over-ear headphone",
        Available: "In Stock" ,
        Brand :"Sony",
 
       imageUrl: "https://s3-alpha-sig.figma.com/img/27f4/8145/9398cb679c284ec92697a7f522bce86f?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pkjNmTSCBMfpMkt63RtcAMLk7w9KBqAQCbF3xUPW2Akf4Il37DK5gGgCSFVrI-8jDknZLm7xIM-2HRz8Mrn6MySwycT6yCY7GLEn8b5FeeccbXjkfWWSgwJNkvWRgUrvUzUz5WIhB7HBeXaEALR8WdQDpxO9X3vN8fMvgmk0RRgNdSCNH5kQg9k5imO4nponeSrj0RkRHk-aty99eD2~iRTJdrsKZOmME1o4j3rC7wvr06pBtbK~ex4Hm-ldF~G6fXIc6ARCj-mQVXXm-K1ECUvWoH4MfLaf-un1wZmyF7IO5kCS0ed7BhBiadzRrzcEnIifuWUd8ng7ZIjpq16B4A"
    },
];



// GET /api/products
router.get('/product', (req, res) => {
    res.json(products);
});

router.get('/product/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(product => product.id === productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: 'Product not found' });
    }
});



module.exports = router;