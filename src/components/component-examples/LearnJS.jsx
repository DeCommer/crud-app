
const person = {
    name: 'Joseph DeCommer',
    address: {
        street: '201 Moon St',
        city: 'New Moonitzburg',
        country: 'Moontopia',
        planet: 'The Moon'
    },
    socials: ['Pee-ter', 'FlacidBook', 'Shitztagram'],

    printSocials: () => {
        person.socials.map (
            social => console.log(social)
        )
    }
}
export default function LearnJS() {
    return (
        <div>
        <div>{person.name}</div>
        <div>{person.address.street}</div>
        <div>{person.address.city}</div>
        <div>{person.address.country}</div>
        <div>{person.address.planet}</div>
        <div>{person.printSocials()}</div>
        <div>{person.socials[0]}</div>
        <div>{person.socials[1]}</div>
        <div>{person.socials[2]}</div>
        </div>
    )
}