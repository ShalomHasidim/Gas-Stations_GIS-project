
const gasStations = [
    {
        id: 1,
        icon: "Delek",
        name: "אשדוד",
        description:"",
        xy:[31.8112906, 34.6656861],
        Address: "שד' בני ברית א.ת הקלה",
        number: 138,
        phone: "08-8523047",
        adBlue: "כן", //uria
        openTwentyFourHours: "כן",
        worksOnSaturday: "כן",
        fuelPrice: 5.35
    },
    {
        id: 2,
        icon: "DorAlon",
        name: "ניר גלים",
        description:"",
        xy:[31.8272601, 34.6752018],
        Address: "יציאה צפונית של אשדוד ליד ניר גלים",
        number: 138,
        phone: "08-8523047",
        adBlue: "לא",
        openTwentyFourHours: "כן",
        worksOnSaturday: "כן",
        fuelPrice: 5.45
    },
    {
        id: 3,
        icon: "Sonol",
        name: "אשקלון דוד",
        description:"",
        xy:[31.6598074, 34.6017303],
        Address: "יציאה צפונית של אשדוד ליד ניר גלים",
        number: 138,
        phone: "08-8523047",
        adBlue: "כן",
        openTwentyFourHours: "כן",
        worksOnSaturday: "כן",
        fuelPrice: 5.55
    }
];

export function getStations() {
    return gasStations;
}
