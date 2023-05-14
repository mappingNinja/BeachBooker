const BEACH_ITEM_DATA = [
    { id: "", type: "Transat", img: "beachbooker_beach_sunbed_0_degrees_free.svg", name: "sunbed_0_degrees_free" },
    { id: "", type: "Transat", img: "beachbooker_beach_sunbed_90_degrees_free.svg", name: "sunbed_90_degrees_free" },
    { id: "", type: "Transat", img: "beachbooker_beach_sunbed_180_degrees_free.svg", name: "sunbed_180_degrees_free" },
    { id: "", type: "Transat", img: "beachbooker_beach_sunbed_270_degrees_free.svg", name: "sunbed_270_degrees_free" },
    { id: "", type: "Transat", img: "beachbooker_beach_sunbed_without0_degrees_free.svg", name: "sunbed_without0_degrees_free" },
    { id: "", type: "Transat", img: "beachbooker_beach_sunbed_0_degrees_unavailable.svg", name: "sunbed_0_degrees_unavailable" },
    { id: "", type: "Transat", img: "beachbooker_beach_sunbed_90_degrees_unavailable.svg", name: "sunbed_90_degrees_unavailable" },
    { id: "", type: "Transat", img: "beachbooker_beach_sunbed_180_degrees_unavailable.svg", name: "sunbed_180_degrees_unavailable" },
    { id: "", type: "Transat", img: "beachbooker_beach_sunbed_270_degrees_unavailable.svg", name: "sunbed_270_degrees_unavailable" },
    { id: "", type: "Transat", img: "beachbooker_beach_sunbed_without0_degrees_unavailable.svg", name: "sunbed_without0_degrees_unavailable" },

    { id: "", type: "Bed", img: "beachbooker_beach_double_sunbed_0_degrees_free.svg", name: "double_sunbed_0_degrees_free" },
    { id: "", type: "Bed", img: "beachbooker_beach_double_sunbed_90_degrees_free.svg", name: "double_sunbed_90_degrees_free" },
    { id: "", type: "Bed", img: "beachbooker_beach_double_sunbed_180_degrees_free.svg", name: "double_sunbed_180_degrees_free" },
    { id: "", type: "Bed", img: "beachbooker_beach_double_sunbed_270_degrees_free.svg", name: "double_sunbed_270_degrees_free" },
    { id: "", type: "Bed", img: "beachbooker_beach_double_sunbed_0_degrees_unavailable.svg", name: "double_sunbed_0_degrees_unavailable" },
    { id: "", type: "Bed", img: "beachbooker_beach_double_sunbed_90_degrees_unavailable.svg", name: "double_sunbed_90_degrees_unavailable" },
    { id: "", type: "Bed", img: "beachbooker_beach_double_sunbed_180_degrees_unavailable.svg", name: "double_sunbed_180_degrees_unavailable" },
    { id: "", type: "Bed", img: "beachbooker_beach_double_sunbed_270_degrees_unavailable.svg", name: "double_sunbed_270_degrees_unavailable" },

    { id: "", type: "Chemin", img: "beachbooker_beach_path_horizontal.svg", name: "path_horizontal" },
    { id: "", type: "Chemin", img: "beachbooker_beach_path_vertical.svg", name: "path_vertical" },
    { id: "", type: "Chemin", img: "beachbooker_beach_path_intersection_2_0_degrees.svg", name: "path_intersection_2_0_degrees" },
    { id: "", type: "Chemin", img: "beachbooker_beach_path_intersection_2_90_degrees.svg", name: "path_intersection_2_90_degrees" },

    { id: "", type: "Chemin", img: "beachbooker_beach_path_intersection_2_180_degrees.svg", name: "path_intersection_2_180_degrees" },
    { id: "", type: "Chemin", img: "beachbooker_beach_path_intersection_2_270_degrees.svg", name: "path_intersection_2_270_degrees" },
    { id: "", type: "Chemin", img: "beachbooker_beach_path_intersection_3_0_degrees.svg", name: "path_intersection_3_0_degrees" },
    { id: "", type: "Chemin", img: "beachbooker_beach_path_intersection_3_90_degrees.svg", name: "path_intersection_3_90_degrees" },

    { id: "", type: "Chemin", img: "beachbooker_beach_path_intersection_3_180_degrees.svg", name: "path_intersection_3_180_degrees" },
    { id: "", type: "Chemin", img: "beachbooker_beach_path_intersection_3_270_degrees.svg", name: "path_intersection_3_270_degrees" },
    { id: "", type: "Chemin", img: "beachbooker_beach_path_intersection_4.svg", name: "path_intersection_4" },

    { id: "", type: "Bar", img: "beachbooker_beach_bar.svg", name: "bar" },
    { id: "", type: "Bar", img: "beachbooker_beach_bar_0_degrees.svg", name: "bar_0_degrees" },
    { id: "", type: "Bar", img: "beachbooker_beach_bar_90_degrees.svg", name: "bar_90_degrees" },
    { id: "", type: "Bar", img: "beachbooker_beach_bar_180_degrees.svg", name: "bar_180_degrees" },
    { id: "", type: "Bar", img: "beachbooker_beach_bar_270_degrees.svg", name: "bar_270_degrees" },

    { id: "", type: "Cabane", img: "beachbooker_beach_hut.svg", name: "hut" },
    { id: "", type: "Cabane", img: "beachbooker_beach_hut_0_degrees.svg", name: "hut_0_degrees" },
    { id: "", type: "Cabane", img: "beachbooker_beach_hut_90_degrees.svg", name: "hut_90_degrees" },
    { id: "", type: "Cabane", img: "beachbooker_beach_hut_180_degrees.svg", name: "hut_180_degrees" },
    { id: "", type: "Cabane", img: "beachbooker_beach_hut_270_degrees.svg", name: "hut_270_degrees" },

    { id: "", type: "Piscine", img: "beachbooker_beach_pool.svg", name: "pool" },
    { id: "", type: "Piscine", img: "beachbooker_beach_pool_0_degrees.svg", name: "pool_0_degrees" },
    { id: "", type: "Piscine", img: "beachbooker_beach_pool_90_degrees.svg", name: "pool_90_degrees" },
    { id: "", type: "Piscine", img: "beachbooker_beach_pool_180_degrees.svg", name: "pool_180_degrees" },
    { id: "", type: "Piscine", img: "beachbooker_beach_pool_270_degrees.svg", name: "pool_270_degrees" },

    { id: "", type: "Douche", img: "beachbooker_beach_shower_0_degrees.svg", name: "shower_0_degrees" },
    { id: "", type: "Douche", img: "beachbooker_beach_shower_90_degrees.svg", name: "shower_90_degrees" },
    { id: "", type: "Douche", img: "beachbooker_beach_shower_180_degrees.svg", name: "shower_180_degrees" },
    { id: "", type: "Douche", img: "beachbooker_beach_shower_270_degrees.svg", name: "shower_270_degrees" },

    { id: "", type: "Vide", img: "beachbooker_beach_empty.svg", name: "empty" },
    { id: "", type: "initialState", img: "beachbooker_beach_initial_state.svg", name: "initial_state" },



]
const INITIAL_SPOT = {
    id: '',
    type: 'initial_state',
    selected: false
}

const INITIAL_SPOTS = [
    [{ id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }],
    [{ id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }],
    [{ id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }],
    [{ id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }],
    [{ id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }, { id: '', type: 'initial_state', selected: false }]
]


const SCHEDULE_DATA = [
    { value: "monday", label: "L" },
    { value: "tuesday", label: "M" },
    { value: "wednesday", label: "M" },
    { value: "thursday", label: "J" },
    { value: "friday", label: "V" },
    { value: "saturday", label: "S" },
    { value: "sunday", label: "D" },
]
export {
    BEACH_ITEM_DATA,
    INITIAL_SPOTS,
    INITIAL_SPOT,
    SCHEDULE_DATA
};