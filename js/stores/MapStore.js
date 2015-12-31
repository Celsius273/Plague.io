import alt from '../alt'
import {bind, datasource, decorate} from 'alt/utils/decorators'
import Immutable from 'immutable'

import {DISEASE_COLORS} from '../constants/GameConstants'
import PlayerActions from '../actions/PlayerActions'


@decorate(alt)
export class MapStore {
    static displayName = 'MapStore'

    constructor() {
        this.state = this.defaultState()
    }

    defaultState() {
        return new Immutable.Map({
            cities: new Immutable.Map({
                1: new Immutable.Map({
                    id: '1',
                    name: 'Reykjavik',
                    adjacencies: new Immutable.Set(['2', '3']),
                    coordinates: [64.133, -21.933],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.BLUE,
                    diseases: new Immutable.Map({
                        red: 0,
                        yellow: 0,
                        blue: 0,
                        black: 0
                    })
                }),
                2: new Immutable.Map({
                    id: '2',
                    name: 'Paris',
                    adjacencies: new Immutable.Set(['1', '3']),
                    coordinates: [48.857, 2.351],
                    hasResearchCenter: true,
                    initialDiseaseColouring: DISEASE_COLORS.BLUE
                }),
                3: new Immutable.Map({
                    id: '3',
                    name: `St. John's`,
                    adjacencies: new Immutable.Set(['1', '2', '4']),
                    coordinates: [47.567, -52.707],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.BLUE
                }),
                4: new Immutable.Map({
                    id: '4',
                    name: 'Washington D.C.',
                    adjacencies: new Immutable.Set(['3']),
                    coordinates: [38.905, -77.016],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.BLUE
                }),
                5: new Immutable.Map({
                    id: '5',
                    name: 'Lisbon',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [38.714, -9.1394],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.BLUE
                }),
                6: new Immutable.Map({
                    id: '6',
                    name: 'Oslo',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [59.95, 10.75],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.BLUE
                }),
                7: new Immutable.Map({
                    id: '7',
                    name: 'Athens',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [39.95, 23.72],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.BLUE
                }),
                8: new Immutable.Map({
                    id: '8',
                    name: 'Kiev',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [50.45, 30.52],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.BLUE
                }),
                9: new Immutable.Map({
                    id: '9',
                    name: 'Iqaluit',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [63.75, -68.52],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.BLUE
                }),
                10: new Immutable.Map({
                    id: '10',
                    name: 'St. Petersburg',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [59.95, 30.3],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.BLUE
                }),
                11: new Immutable.Map({
                    id: '11',
                    name: 'Regina',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [50.45, -104.6],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.BLUE
                }),
                12: new Immutable.Map({
                    id: '12',
                    name: 'Vancouver',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [49.28, -123.12],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.BLUE
                }),                
                13: new Immutable.Map({
                    id: '13',
                    name: 'Los Angeles',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [34.05, -118.25],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.YELLOW
                }),
                14: new Immutable.Map({
                    id: '14',
                    name: 'Mexico City',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [19.43, -99.13],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.YELLOW
                }),
                15: new Immutable.Map({
                    id: '15',
                    name: 'Havana',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [23.13, -82.38],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.YELLOW
                }),
                16: new Immutable.Map({
                    id: '16',
                    name: 'Panama',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [8.98, -79.52],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.YELLOW
                }),
                17: new Immutable.Map({
                    id: '17',
                    name: 'Antananarivo',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [-18.93, 47.52],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.YELLOW
                }),
                18: new Immutable.Map({
                    id: '18',
                    name: 'Cape Town',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [-33.92, 18.42],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.YELLOW
                }),
                19: new Immutable.Map({
                    id: '19',
                    name: 'Belem',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [-1.46, -48.5],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.YELLOW
                }),
                20: new Immutable.Map({
                    id: '20',
                    name: 'Lima',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [-12.04, -77.03],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.YELLOW
                }),
                21: new Immutable.Map({
                    id: '21',
                    name: 'Bueno Aires',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [-34.6, -58.38],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.YELLOW
                }),
                22: new Immutable.Map({
                    id: '22',
                    name: 'Punta Arenas',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [-53.17, -70.93],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.YELLOW
                }),
                23: new Immutable.Map({
                    id: '23',
                    name: 'Kinshasa',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [-4.32, 15.32],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.YELLOW
                }),
                24: new Immutable.Map({
                    id: '24',
                    name: 'Mombasa',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [-4.05, 39.67],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.YELLOW
                }),
                25: new Immutable.Map({
                    id: '25',
                    name: 'Monrovia',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [6.31, -10.8],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.BLACK
                }),
                26: new Immutable.Map({
                    id: '26',
                    name: 'NouakChott',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [18.1, -15.95],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.BLACK
                }),
                27: new Immutable.Map({
                    id: '27',
                    name: 'Tripoli',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [32.9, 13.18],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.BLACK
                }),
                28: new Immutable.Map({
                    id: '28',
                    name: 'Khartoum',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [15.63, 32.53],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.BLACK
                }),
                29: new Immutable.Map({
                    id: '29',
                    name: 'Medina',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [24.46, 39.6],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.BLACK
                }),
                30: new Immutable.Map({
                    id: '30',
                    name: 'Dubai',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [25.2, 55.27],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.BLACK
                }),
                31: new Immutable.Map({
                    id: '31',
                    name: 'Tehran',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [35.69, 51.42],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.BLACK
                }),
                32: new Immutable.Map({
                    id: '32',
                    name: 'Astana',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [51.16, 71.43],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.BLACK
                }),
                33: new Immutable.Map({
                    id: '33',
                    name: 'Delhi',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [28.61, 77.2],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.BLACK
                }),
                34: new Immutable.Map({
                    id: '34',
                    name: 'Chennai',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [13.08, 80.27],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.BLACK
                }),
                35: new Immutable.Map({
                    id: '35',
                    name: 'Lhasa',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [29.65, 91.11],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.BLACK
                }),
                36: new Immutable.Map({
                    id: '36',
                    name: 'Urumqi',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [43.82, 87.6],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.BLACK
                }),
                37: new Immutable.Map({
                    id: '37',
                    name: 'Irkutsk',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [52.31, 104.29],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.RED
                }),
                38: new Immutable.Map({
                    id: '38',
                    name: 'Xian',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [34.26, 108.9],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.RED
                }),
                39: new Immutable.Map({
                    id: '39',
                    name: 'Harbin',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [45.75, 126.63],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.RED
                }),
                40: new Immutable.Map({
                    id: '40',
                    name: 'Taipei',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [25.03, 121.63],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.RED
                }),
                41: new Immutable.Map({
                    id: '41',
                    name: 'Perth',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [-31.95, 115.85],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.RED
                }),
                42: new Immutable.Map({
                    id: '42',
                    name: 'Sydney',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [-33.86, 151.20],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.RED
                }),
                43: new Immutable.Map({
                    id: '43',
                    name: 'Wellington',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [-41.28, 174.77],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.RED
                }),
                44: new Immutable.Map({
                    id: '44',
                    name: 'Tokyo',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [35.68, 139.68],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.RED
                }),
                45: new Immutable.Map({
                    id: '45',
                    name: 'Bangkok',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [13.75, 100.5],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.RED
                }),
                46: new Immutable.Map({
                    id: '46',
                    name: 'Jakarta',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [-6.17, 106.82],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.RED
                }),
                47: new Immutable.Map({
                    id: '47',
                    name: 'Manila',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [14.58, 121],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.RED
                }),
                48: new Immutable.Map({
                    id: '48',
                    name: 'Port Moresby',
                    adjacencies: new Immutable.Set([]),
                    coordinates: [-9.51, 147.21],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.RED
                })
            }),
            selectedCity: null,
            currentCity: null
        })
    }

    @bind(PlayerActions.selectCity)
    onSelectCity(city) {
        console.log(city.toJS())
    }
}

export default alt.createStore(MapStore)
