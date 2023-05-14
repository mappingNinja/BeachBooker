const BEACH_RESTAURANT_ITEM_DATA = [
    { id: "", type: "Counter", img: "beachbooker_restaurant_bar-counter.svg", name: "bar-counter" },
    { id: "", type: "Counter", img: "beachbooker_restaurant_reception.svg", name: "reception" },


    { id: "", type: "Table", img: "beachbooker_restaurant_dining_table_2_seater.svg", name: "dining_table_2_seater" },
    { id: "", type: "Table", img: "beachbooker_restaurant_dining_table_4_seater.svg", name: "dining_table_4_seater" },
    { id: "", type: "Table", img: "beachbooker_restaurant_dining_table_6_seater.svg", name: "dining_table_6_seater" },

    { id: "", type: "Vide", img: "beachbooker_beach_empty.svg", name: "empty" },
    { id: "", type: "initialState", img: "beachbooker_beach_initial_state.svg", name: "initial_state" },



]
const RESTAURANT_INITIAL_SPOT = {
    id: '',
    type: 'initial_state',
    selected: false
}

const RESTAURANT_INITIAL_SPOTS = [
    [{ id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }],
    [{ id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }],
    [{ id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }],
    [{ id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }],
    [{ id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }]
]


const RESTAURANT_SCHEDULE_DATA = [
    { value: "monday", label: "L" },
    { value: "tuesday", label: "M" },
    { value: "wednesday", label: "M" },
    { value: "thursday", label: "J" },
    { value: "friday", label: "V" },
    { value: "saturday", label: "S" },
    { value: "sunday", label: "D" },
]
export {
    BEACH_RESTAURANT_ITEM_DATA,
    RESTAURANT_INITIAL_SPOT,
    RESTAURANT_INITIAL_SPOTS,
    RESTAURANT_SCHEDULE_DATA
};