const koders = [
    {
        id: 1,
        first_name: "Laurella",
        last_name: "Tupper",
        age: 42,
        email: "ltupper0@123-reg.co.uk",
        generation: 2,
    },
    {
        id: 2,
        first_name: "Daron",
        last_name: "Cockle",
        age: 18,
        email: "dcockle1@salon.com",
        generation: 12,
    },
    {
        id: 3,
        first_name: "Marleen",
        last_name: "Eller",
        age: 18,
        email: "meller2@bloglovin.com",
        generation: 11,
    },
    {
        id: 4,
        first_name: "Worthington",
        last_name: "Vlach",
        age: 16,
        email: "wvlach3@taobao.com",
        generation: 22,
    },
    {
        id: 5,
        first_name: "Wendell",
        last_name: "Artiss",
        age: 17,
        email: "wartiss4@microsoft.com",
        generation: 12,
    },
    {
        id: 6,
        first_name: "Kin",
        last_name: "Pala",
        age: 55,
        email: "kpala5@photobucket.com",
        generation: 6,
    },
    {
        id: 7,
        first_name: "Lucio",
        last_name: "Bagshawe",
        age: 56,
        email: "lbagshawe6@behance.net",
        generation: 15,
    },
    {
        id: 8,
        first_name: "Reggy",
        last_name: "Bullingham",
        age: 30,
        email: "rbullingham7@fda.gov",
        generation: 2,
    },
    {
        id: 9,
        first_name: "Clarinda",
        last_name: "Steaning",
        age: 52,
        email: "csteaning8@liveinternet.ru",
        generation: 22,
    },
    {
        id: 10,
        first_name: "Karolina",
        last_name: "Leblanc",
        age: 59,
        email: "kleblanc9@tiny.cc",
        generation: 6,
    },
    {
        id: 11,
        first_name: "Colet",
        last_name: "McCuffie",
        age: 60,
        email: "cmccuffiea@dyndns.org",
        generation: 24,
    },
    {
        id: 12,
        first_name: "Kimble",
        last_name: "Dovermann",
        age: 54,
        email: "kdovermannb@gmail.com",
        generation: 3,
    },
    {
        id: 13,
        first_name: "Janessa",
        last_name: "Illing",
        age: 19,
        email: "jillingc@hubpages.com",
        generation: 6,
    },
    {
        id: 14,
        first_name: "Lani",
        last_name: "Ricardo",
        age: 44,
        email: "lricardod@opensource.org",
        generation: 6,
    },
    {
        id: 15,
        first_name: "Caye",
        last_name: "Cowmeadow",
        age: 16,
        email: "ccowmeadowe@narod.ru",
        generation: 11,
    },
    {
        id: 16,
        first_name: "Nataline",
        last_name: "MacInnes",
        age: 28,
        email: "nmacinnesf@gmail.com",
        generation: 13,
    },
    {
        id: 17,
        first_name: "Dayna",
        last_name: "Nimmo",
        age: 17,
        email: "dnimmog@infoseek.co.jp",
        generation: 12,
    },
    {
        id: 18,
        first_name: "Sheff",
        last_name: "Normanville",
        age: 23,
        email: "snormanvilleh@cisco.com",
        generation: 13,
    },
    {
        id: 19,
        first_name: "Olivie",
        last_name: "Bladesmith",
        age: 27,
        email: "obladesmithi@newyorker.com",
        generation: 6,
    },
    {
        id: 20,
        first_name: "Ida",
        last_name: "Jewess",
        age: 50,
        email: "ijewessj@ca.gov",
        generation: 9,
    },
];

// forEach
//no regresa nada
// Quiero enviar un correo a cada koder
// function sendemail(email) {
//     console.log("correo enviado a", email)
// }

// koders.forEach((koder/*alberga el valor de cada elemento*//*,el seugundo parametro es el index numero del array,posicion del objeto*/) => {
//     sendemail(koder.email)/*por cada koder extracto el correo del obj*/
// })

/*with reduce*/


// const emailToAll = koders.reduce((accu, koder) => {
//     return accu + " " + koder.email
// }, ' ')
// console.log("el correo: ", emailToAll)

// map
// Necesito Obtener el nombre completo de cada alumno en una sola cadena
// const fullNames = koders.map((koder, index) => {
//     const fullName = `${koder.first_name} ${koder.last_name}`
//     return fullName
// })
// console.log(fullNames)

//with reduce
// const allKodersNames = koders.reduce((accu, koder) => {
//     return accu + " " + koder.first_name + " " + koder.last_name + ","
// }, '')


// console.log(allKodersNames)


// filter
// quiero saber cuantos koders son menores de edad nos regresa un rsultado
// const minors = koders.filter((koder) => {
//     // const isMinor = koder.age < 18
//     return koder.age <= 18
// }).map((koder) => `${koder.first_name} ${koder.last_name}`)
//     // const nameMinors = minors.map((koder) => `${koder.first_name} ${koder.last_name}`)
//     .map((name) => name.toUpperCase())
// console.log(minors)


//with reduce
// const littleMinors = koders.reduce((accu, koder) => {
//     if (koder.age < 18) {
//         accu.push(koder.first_name + " "+ koder.last_name)
//     }
//     return accu

// }, [])
// console.log(littleMinors)


// find
// Quiero encontrar al koder con id 15
// const koder15 = koders.find((koder) => koder.id === 15)
// console.log(koder15)

//withreduce
// const koderWith15 = koders.reduce((accu, koder) => {
//     if (koder.id === 15) {
//         return koder
//     }
//     return accu
// }, ' ')

// console.log(koderWith15)



// some
// Quiero saber si algunos de los koders tienen correo con gmail
// const someoneHaveGmail = koders.some((koder) => koder.email.includes("@gmail"))
// console.log("gmail: ", someoneHaveGmail)


//with reduce

// const someoneUseGmail = koders.reduce((accu, koder) => {
//     if (koder.email.includes("@gmail")) {
//         return koder
//     }
//     return accu
// }, true)
// console.log(someoneUseGmail)


// every
// Quiero saber si todos los koders son mayores de edad
// const allSenior = koders.every((koder) => koder.koder >= 18)
// console.log("vamos por cehalr?", allSenior)


//with reduce
// const oldPeople = koders.reduce((accu, koder) => {
//     if (!accu) {
//         return false
//     }
//     return koder.age > 18
// }, true)
// console.log("vamos a chelear", oldPeople)



// reduce
// Quiero saber la cuenta de koders por generación

// const countPerGen = koders.reduce((mapaDeConteo, koder) => {
//     if (mapaDeConteo[`g${koder.generation}`]) {
//         // const conteoActual=mapaDeConteo[`g${koder.generation}`]
//         // const nuevoConteo=conteoActual+1
//         mapaDeConteo[`g${koder.generation}`] += 1 /*nuevoConteo*/
//     } else {
//         mapaDeConteo[`g${koder.generation}`] = 1
//     }
//     return mapaDeConteo
// }, {})
// console.log("conteo: ", countPerGen)

// const allNames = koders.reduce((anterior, valorActual, index) => {
//     return anterior + " " + valorActual.first_name + " " + valorActual.last_name
// }, '')
// const avarageAge = koders.reduce(
//     (anterior, valorActual) => (anterior += valorActual.age), 0
// )
// console.log("edad promedio: ", avarageAge / koders.length)
// console.log("nombres: ", allNames)

