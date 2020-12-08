var stopsJson = JSON.parse(`[
    {
      "stop_id": "DELAHAL2",
      "stop_name": "Delaware Hall SB - #509",
      "stop_lat": 43.008569,
      "stop_lon": -81.269757,
      "stop_sequence": 10,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "DELAHAL2",
      "stop_name": "Delaware Hall SB - #509",
      "stop_lat": 43.008569,
      "stop_lon": -81.269757,
      "stop_sequence": 38,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "DUNDWEL5",
      "stop_name": "Dundas east of Wellington EB - #622",
      "stop_lat": 42.985037,
      "stop_lon": -81.244492,
      "stop_sequence": 19,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "DUNDWEL5",
      "stop_name": "Dundas east of Wellington EB - #622",
      "stop_lat": 42.985037,
      "stop_lon": -81.244492,
      "stop_sequence": 37,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "DUNDWEL5",
      "stop_name": "Dundas east of Wellington EB - #622",
      "stop_lat": 42.985037,
      "stop_lon": -81.244492,
      "stop_sequence": 8,
      "route_id": 94,
      "route_color": "FF8000"
    },
    {
      "stop_id": "FANSGLEN",
      "stop_name": "Fanshawe & Glenora Dr. WB - #694",
      "stop_lat": 43.039714,
      "stop_lon": -81.238775,
      "stop_sequence": 18,
      "route_id": 25,
      "route_color": "DFDF00"
    },
    {
      "stop_id": "FANSMCLE",
      "stop_name": "Fanshawe at McLean WB - #703",
      "stop_lat": 43.041634,
      "stop_lon": -81.232485,
      "stop_sequence": 16,
      "route_id": 25,
      "route_color": "DFDF00"
    },
    {
      "stop_id": "GOREBRAE",
      "stop_name": "Gore at Braeside WB - #783",
      "stop_lat": 42.978433,
      "stop_lon": -81.172081,
      "stop_sequence": 11,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "WELLBRA2",
      "stop_name": "Wellington at Bradley  SB - #1927",
      "stop_lat": 42.933922,
      "stop_lon": -81.223468,
      "stop_sequence": 27,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "WELLBRA2",
      "stop_name": "Wellington at Bradley  SB - #1927",
      "stop_lat": 42.933922,
      "stop_lon": -81.223468,
      "stop_sequence": 67,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "WHITOMA1",
      "stop_name": "White Oaks Mall Stop 1 - #2060",
      "stop_lat": 42.931378,
      "stop_lon": -81.22283,
      "stop_sequence": 68,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "WHITOMA1",
      "stop_name": "White Oaks Mall Stop 1 - #2060",
      "stop_lat": 42.931378,
      "stop_lon": -81.22283,
      "stop_sequence": 16,
      "route_id": 28,
      "route_color": "5555FF"
    },
    {
      "stop_id": "ADELHURN",
      "stop_name": "Adelaide at Huron St SB - #2307",
      "stop_lat": 43.011805,
      "stop_lon": -81.243115,
      "stop_sequence": 13,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "COMMWCO2",
      "stop_name": "Commissioners at Western Counties Rd - #2426",
      "stop_lat": 42.958514,
      "stop_lon": -81.22334,
      "stop_sequence": 17,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "VICTWEST",
      "stop_name": "Victoria Hospital West Entrance NB - #2499",
      "stop_lat": 42.958824,
      "stop_lon": -81.228335,
      "stop_sequence": 18,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "FANSALD1",
      "stop_name": "Fanshawe at Aldersbrook EB - #2510",
      "stop_lat": 43.01512,
      "stop_lon": -81.321545,
      "stop_sequence": 36,
      "route_id": "09",
      "route_color": "B36666"
    },
    {
      "stop_id": "FANSALD1",
      "stop_name": "Fanshawe at Aldersbrook EB - #2510",
      "stop_lat": 43.01512,
      "stop_lon": -81.321545,
      "stop_sequence": 41,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "FANSALD2",
      "stop_name": "Fanshawe at Aldersbrook WB - #2511",
      "stop_lat": 43.015051,
      "stop_lon": -81.322581,
      "stop_sequence": 21,
      "route_id": 31,
      "route_color": "00B700"
    },
    {
      "stop_id": "FANSPIN2",
      "stop_name": "Fanshawe at Pinnacle EB - #2514",
      "stop_lat": 43.02166,
      "stop_lon": -81.299195,
      "stop_sequence": 44,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "FANSWON1",
      "stop_name": "Fanshawe at Wonderland EB - #2516",
      "stop_lat": 43.018567,
      "stop_lon": -81.309713,
      "stop_sequence": 43,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "WONDWHAR",
      "stop_name": "Wonderland at Wharncliffe NB - #2528",
      "stop_lat": 42.924222,
      "stop_lon": -81.277947,
      "stop_sequence": 30,
      "route_id": 12,
      "route_color": "CA95FF"
    },
    {
      "stop_id": "COMMCHE1",
      "stop_name": "Commissioners at Chestnut Hill 1 SB - #2533",
      "stop_lat": 42.965489,
      "stop_lon": -81.351525,
      "stop_sequence": 2,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "COMMCHE2",
      "stop_name": "Commissioners at Chestnut Hill 2 SB - #2534",
      "stop_lat": 42.963767,
      "stop_lon": -81.347056,
      "stop_sequence": 3,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "COMMGRA2",
      "stop_name": "Commissioners at Grandview EB - #2535",
      "stop_lat": 42.963298,
      "stop_lon": -81.344232,
      "stop_sequence": 4,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "COMMHAL2",
      "stop_name": "Commissioners at Halls Mills EB - #2537",
      "stop_lat": 42.960233,
      "stop_lon": -81.334417,
      "stop_sequence": 7,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "COMMREYN",
      "stop_name": "Commissioners at Reynolds SB - #2538",
      "stop_lat": 42.962395,
      "stop_lon": -81.341114,
      "stop_sequence": 5,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "COMMSTE1",
      "stop_name": "Commissioners at Stephen SB - #2539",
      "stop_lat": 42.961279,
      "stop_lon": -81.33756,
      "stop_sequence": 6,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "SHORKAIN",
      "stop_name": "Shore at Kains EB - #2548",
      "stop_lat": 42.969417,
      "stop_lon": -81.355801,
      "stop_sequence": 1,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "DOONMUS3",
      "stop_name": "Doon north of Muskoka NB - #2549",
      "stop_lat": 43.022923,
      "stop_lon": -81.260715,
      "stop_sequence": 29,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "WHARLEGE",
      "stop_name": "Wharncliffe & Legendary FS SB - #2593",
      "stop_lat": 42.937396,
      "stop_lon": -81.261016,
      "stop_sequence": 27,
      "route_id": 12,
      "route_color": "CA95FF"
    },
    {
      "stop_id": "WHARSOUT",
      "stop_name": "Wharncliffe & Southdale NS SB - #2594",
      "stop_lat": 42.941215,
      "stop_lon": -81.257979,
      "stop_sequence": 26,
      "route_id": 12,
      "route_color": "CA95FF"
    },
    {
      "stop_id": "WHARWON2",
      "stop_name": "Wharncliffe & Morgan FS SB - #2595",
      "stop_lat": 42.926969,
      "stop_lon": -81.273561,
      "stop_sequence": 29,
      "route_id": 12,
      "route_color": "CA95FF"
    },
    {
      "stop_id": "BRADMEDI",
      "stop_name": "Bradley Medical Centre - #2597",
      "stop_lat": 42.934185,
      "stop_lon": -81.229978,
      "stop_sequence": 14,
      "route_id": 28,
      "route_color": "5555FF"
    },
    {
      "stop_id": "THIROFO2",
      "stop_name": "Third South of Oxford SB - #2600",
      "stop_lat": 43.01016,
      "stop_lon": -81.18933,
      "stop_sequence": 58,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "BRIAMEL3",
      "stop_name": "Briarhill south of Melsandra 2 SB - #2601",
      "stop_lat": 43.018166,
      "stop_lon": -81.22686,
      "stop_sequence": 7,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "BASECOTS",
      "stop_name": "Base Line at Cotswold WB - #2605",
      "stop_lat": 42.958416,
      "stop_lon": -81.27099,
      "stop_sequence": 52,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "WONDWHA2",
      "stop_name": "Wonderland & Wharncliffe FS 2 NB - #2610",
      "stop_lat": 42.926019,
      "stop_lon": -81.278341,
      "stop_sequence": 31,
      "route_id": 12,
      "route_color": "CA95FF"
    },
    {
      "stop_id": "CHEEGLOB",
      "stop_name": "3935 Cheese Factory Road - #2611",
      "stop_lat": 42.933423,
      "stop_lon": -81.160603,
      "stop_sequence": 23,
      "route_id": 30,
      "route_color": "CF2985"
    },
    {
      "stop_id": "COMMGLOB",
      "stop_name": "Commerce at Global NB - #2612",
      "stop_lat": 42.933104,
      "stop_lon": -81.167782,
      "stop_sequence": 21,
      "route_id": 30,
      "route_color": "CF2985"
    },
    {
      "stop_id": "COMMMABR",
      "stop_name": "Commerce at Max Brose NB - #2613",
      "stop_lat": 42.935706,
      "stop_lon": -81.16844,
      "stop_sequence": 22,
      "route_id": 30,
      "route_color": "CF2985"
    },
    {
      "stop_id": "FANSDAL2",
      "stop_name": "Fanshawe at Dalmagarry EB - #2614",
      "stop_lat": 43.012144,
      "stop_lon": -81.331911,
      "stop_sequence": 39,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "FANSDALM",
      "stop_name": "Fanshawe at Dalmagarry WB - #2615",
      "stop_lat": 43.012396,
      "stop_lon": -81.331691,
      "stop_sequence": 23,
      "route_id": 31,
      "route_color": "00B700"
    },
    {
      "stop_id": "COLTSOU2",
      "stop_name": "Colonel Talbot at Southdale NB - #2619",
      "stop_lat": 42.936291,
      "stop_lon": -81.317145,
      "stop_sequence": 51,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "CRANBAR2",
      "stop_name": "Cranbrook at Barclay SB - #2620",
      "stop_lat": 42.940934,
      "stop_lon": -81.303746,
      "stop_sequence": 43,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "CRANBIRC",
      "stop_name": "Cranbrook at Birchmount WB - #2622",
      "stop_lat": 42.938746,
      "stop_lon": -81.305251,
      "stop_sequence": 44,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "CRANSCHR",
      "stop_name": "Cranbrook at Schraeder WB - #2624",
      "stop_lat": 42.938708,
      "stop_lon": -81.307824,
      "stop_sequence": 45,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "TILLSOUT",
      "stop_name": "Tillman at Southdale SB - #2632",
      "stop_lat": 42.936809,
      "stop_lon": -81.308815,
      "stop_sequence": 46,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "CLARBAY1",
      "stop_name": "Clarke & Bayview NS SB - #2637",
      "stop_lat": 42.978538,
      "stop_lon": -81.162646,
      "stop_sequence": 11,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "CLARGOR2",
      "stop_name": "Clarke & Gore NS SB - #2638",
      "stop_lat": 42.980898,
      "stop_lon": -81.163876,
      "stop_sequence": 10,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "CLARGOR2",
      "stop_name": "Clarke & Gore NS SB - #2638",
      "stop_lat": 42.980898,
      "stop_lon": -81.163876,
      "stop_sequence": 9,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "CLARPEN1",
      "stop_name": "Clarke & Pension SB - #2639",
      "stop_lat": 42.97535,
      "stop_lon": -81.161051,
      "stop_sequence": 12,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "FERNHAM1",
      "stop_name": "Ferndale at Hampstead EB - #2641",
      "stop_lat": 42.94714,
      "stop_lon": -81.247113,
      "stop_sequence": 19,
      "route_id": 93,
      "route_color": "FF8000"
    },
    {
      "stop_id": "FERNHOM1",
      "stop_name": "Ferndale at Homeview EB - #2643",
      "stop_lat": 42.94692,
      "stop_lon": -81.250697,
      "stop_sequence": 18,
      "route_id": 93,
      "route_color": "FF8000"
    },
    {
      "stop_id": "HAMIBRA2",
      "stop_name": "Hamilton at Braesyde WB - #2652",
      "stop_lat": 42.974125,
      "stop_lon": -81.171728,
      "stop_sequence": 16,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "HAMICRI1",
      "stop_name": "Hamilton at Crimson WB - #2654",
      "stop_lat": 42.971267,
      "stop_lon": -81.163125,
      "stop_sequence": 14,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "HAMIFAI1",
      "stop_name": "Hamilton at Fairmont WB - #2656",
      "stop_lat": 42.97713,
      "stop_lon": -81.189507,
      "stop_sequence": 21,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "HAMIGOR1",
      "stop_name": "Hamilton at Clarke WB - #2657",
      "stop_lat": 42.97066,
      "stop_lon": -81.159213,
      "stop_sequence": 13,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "HAMIOAKL",
      "stop_name": "Hamilton opp Oaklands Tower WB - #2658",
      "stop_lat": 42.974825,
      "stop_lon": -81.174103,
      "stop_sequence": 17,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "HAMIRIV2",
      "stop_name": "Hamilton at River Run WB - #2659",
      "stop_lat": 42.972893,
      "stop_lon": -81.167624,
      "stop_sequence": 15,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "HAMIVALL",
      "stop_name": "Hamilton at Valleyview Appartments WB - #2660",
      "stop_lat": 42.975412,
      "stop_lon": -81.177125,
      "stop_sequence": 18,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "HAMIWAT2",
      "stop_name": "Hamilton at Watmar WB - #2661",
      "stop_lat": 42.976184,
      "stop_lon": -81.182626,
      "stop_sequence": 19,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "HAMIYMCA",
      "stop_name": "Hamilton at YMCA WB - #2662",
      "stop_lat": 42.976602,
      "stop_lon": -81.185674,
      "stop_sequence": 20,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "HYDENRN1",
      "stop_name": "Hyde Park at North Routledge Park NB - #2685",
      "stop_lat": 43.003185,
      "stop_lon": -81.334084,
      "stop_sequence": 36,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "SPRIFORH",
      "stop_name": "Springbank at Forest Hill WB - #2688",
      "stop_lat": 42.972636,
      "stop_lon": -81.274765,
      "stop_sequence": 51,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "ADELDUFR",
      "stop_name": "Adelaide at Dufferin SB - #2690",
      "stop_lat": 42.991425,
      "stop_lon": -81.232891,
      "stop_sequence": 25,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "ADELBLAC",
      "stop_name": "Adelaide at Blackwater SB - #2693",
      "stop_lat": 43.044659,
      "stop_lon": -81.259913,
      "stop_sequence": 57,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "SUNNBLAC",
      "stop_name": "Sunningdale at Blackwater EB - #2699",
      "stop_lat": 43.045234,
      "stop_lon": -81.26551,
      "stop_sequence": 56,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "BEAVWHET",
      "stop_name": "Beaverbrook at Whetherfield EB - #2701",
      "stop_lat": 42.987011,
      "stop_lon": -81.304547,
      "stop_sequence": 10,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "FANSHIG2",
      "stop_name": "Fanshawe at Highbury WB - #2704",
      "stop_lat": 43.043082,
      "stop_lon": -81.227354,
      "stop_sequence": 15,
      "route_id": 25,
      "route_color": "DFDF00"
    },
    {
      "stop_id": "GENGRE2",
      "stop_name": "Grenfell at Grenfell Cres NB - #2705",
      "stop_lat": 43.038941,
      "stop_lon": -81.249265,
      "stop_sequence": 12,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "GRENADE2",
      "stop_name": "Grenfell at Adelaide EB - #2706",
      "stop_lat": 43.03817,
      "stop_lon": -81.255708,
      "stop_sequence": 10,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "GRENLAI2",
      "stop_name": "Grenfell at Laing EB - #2707",
      "stop_lat": 43.03879,
      "stop_lon": -81.252709,
      "stop_sequence": 11,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "GRENMID1",
      "stop_name": "Grenfell at Midale NB - #2708",
      "stop_lat": 43.040411,
      "stop_lon": -81.248328,
      "stop_sequence": 13,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "GRENTRO1",
      "stop_name": "Grenfell at Trossacks EB - #2709",
      "stop_lat": 43.042841,
      "stop_lon": -81.24634,
      "stop_sequence": 14,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "HIGH1550",
      "stop_name": "1550 Highbury NB - #2710",
      "stop_lat": 43.033585,
      "stop_lon": -81.222315,
      "stop_sequence": 13,
      "route_id": 25,
      "route_color": "DFDF00"
    },
    {
      "stop_id": "HIGHKIL2",
      "stop_name": "Highbury at Killarney NB - #2711",
      "stop_lat": 43.039406,
      "stop_lon": -81.224896,
      "stop_sequence": 14,
      "route_id": 25,
      "route_color": "DFDF00"
    },
    {
      "stop_id": "HIGHTOW1",
      "stop_name": "Highbury at Townsend NB - #2712",
      "stop_lat": 43.028165,
      "stop_lon": -81.219642,
      "stop_sequence": 11,
      "route_id": 25,
      "route_color": "DFDF00"
    },
    {
      "stop_id": "PHILBIL2",
      "stop_name": "Phillbrook at Billybrook NB 1 - #2713",
      "stop_lat": 43.035063,
      "stop_lon": -81.26471,
      "stop_sequence": 7,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "PHILBIL3",
      "stop_name": "Phillbrook at Billybrook NB 2 - #2714",
      "stop_lat": 43.037259,
      "stop_lon": -81.263054,
      "stop_sequence": 8,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "PHILDON2",
      "stop_name": "Phillbrook at Donnybrook NB - #2715",
      "stop_lat": 43.033056,
      "stop_lon": -81.26439,
      "stop_sequence": 6,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "PHILPEN2",
      "stop_name": "Phillbrook at Pennybrook EB - #2716",
      "stop_lat": 43.038484,
      "stop_lon": -81.259974,
      "stop_sequence": 9,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "WONDFAR5",
      "stop_name": "Wonderland south of Farrah NB - #2730",
      "stop_lat": 42.985342,
      "stop_lon": -81.293364,
      "stop_sequence": 3,
      "route_id": 33,
      "route_color": "BB77FF"
    },
    {
      "stop_id": "ARGYMAL1",
      "stop_name": "Argyle Mall SB - Stop 1 - #2731",
      "stop_lat": 43.002596,
      "stop_lon": -81.17356,
      "stop_sequence": 52,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "ARGYMAL1",
      "stop_name": "Argyle Mall SB - Stop 1 - #2731",
      "stop_lat": 43.002596,
      "stop_lon": -81.17356,
      "stop_sequence": 1,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "ARGYMAL1",
      "stop_name": "Argyle Mall SB - Stop 1 - #2731",
      "stop_lat": 43.002596,
      "stop_lon": -81.17356,
      "stop_sequence": 1,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "ARGYMAL1",
      "stop_name": "Argyle Mall SB - Stop 1 - #2731",
      "stop_lat": 43.002596,
      "stop_lon": -81.17356,
      "stop_sequence": 63,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "ARGYMAL1",
      "stop_name": "Argyle Mall SB - Stop 1 - #2731",
      "stop_lat": 43.002596,
      "stop_lon": -81.17356,
      "stop_sequence": 1,
      "route_id": 35,
      "route_color": "DBC004"
    },
    {
      "stop_id": "ARGYMAL1",
      "stop_name": "Argyle Mall SB - Stop 1 - #2731",
      "stop_lat": 43.002596,
      "stop_lon": -81.17356,
      "stop_sequence": 1,
      "route_id": 37,
      "route_color": "0098E1"
    },
    {
      "stop_id": "FANSSTAC",
      "stop_name": "Fanshawe at Stackhouse WB - #2734",
      "stop_lat": 43.04059,
      "stop_lon": -81.236044,
      "stop_sequence": 17,
      "route_id": 25,
      "route_color": "DFDF00"
    },
    {
      "stop_id": "KINGRIC1",
      "stop_name": "King at Richmond EB - #2735",
      "stop_lat": 42.982543,
      "stop_lon": -81.2488,
      "stop_sequence": 17,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "KINGRIC1",
      "stop_name": "King at Richmond EB - #2735",
      "stop_lat": 42.982543,
      "stop_lon": -81.2488,
      "stop_sequence": 28,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "KINGRIC1",
      "stop_name": "King at Richmond EB - #2735",
      "stop_lat": 42.982543,
      "stop_lon": -81.2488,
      "stop_sequence": 35,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "KINGRIC1",
      "stop_name": "King at Richmond EB - #2735",
      "stop_lat": 42.982543,
      "stop_lon": -81.2488,
      "stop_sequence": 6,
      "route_id": 94,
      "route_color": "FF8000"
    },
    {
      "stop_id": "KINGTALB",
      "stop_name": "King at Talbot EB - #2736",
      "stop_lat": 42.981637,
      "stop_lon": -81.252034,
      "stop_sequence": 16,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "KINGTALB",
      "stop_name": "King at Talbot EB - #2736",
      "stop_lat": 42.981637,
      "stop_lon": -81.252034,
      "stop_sequence": 27,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "KINGTALB",
      "stop_name": "King at Talbot EB - #2736",
      "stop_lat": 42.981637,
      "stop_lon": -81.252034,
      "stop_sequence": 34,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "QUEERIC1",
      "stop_name": "Queens at Richmond WB - #2737",
      "stop_lat": 42.985124,
      "stop_lon": -81.250081,
      "stop_sequence": 42,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "QUEERIC1",
      "stop_name": "Queens at Richmond WB - #2737",
      "stop_lat": 42.985124,
      "stop_lon": -81.250081,
      "stop_sequence": 4,
      "route_id": "09",
      "route_color": "B36666"
    },
    {
      "stop_id": "QUEERIC1",
      "stop_name": "Queens at Richmond WB - #2737",
      "stop_lat": 42.985124,
      "stop_lon": -81.250081,
      "stop_sequence": 23,
      "route_id": 102,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "QUEERIC1",
      "stop_name": "Queens at Richmond WB - #2737",
      "stop_lat": 42.985124,
      "stop_lon": -81.250081,
      "stop_sequence": 1,
      "route_id": 12,
      "route_color": "CA95FF"
    },
    {
      "stop_id": "QUEERIC1",
      "stop_name": "Queens at Richmond WB - #2737",
      "stop_lat": 42.985124,
      "stop_lon": -81.250081,
      "stop_sequence": 3,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "QUEETALB",
      "stop_name": "Queens at Talbot WB - #2738",
      "stop_lat": 42.984518,
      "stop_lon": -81.25234,
      "stop_sequence": 43,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "QUEETALB",
      "stop_name": "Queens at Talbot WB - #2738",
      "stop_lat": 42.984518,
      "stop_lon": -81.25234,
      "stop_sequence": 5,
      "route_id": "09",
      "route_color": "B36666"
    },
    {
      "stop_id": "QUEETALB",
      "stop_name": "Queens at Talbot WB - #2738",
      "stop_lat": 42.984518,
      "stop_lon": -81.25234,
      "stop_sequence": 2,
      "route_id": 12,
      "route_color": "CA95FF"
    },
    {
      "stop_id": "QUEETALB",
      "stop_name": "Queens at Talbot WB - #2738",
      "stop_lat": 42.984518,
      "stop_lon": -81.25234,
      "stop_sequence": 4,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "KINGWELL",
      "stop_name": "King at Wellington EB - #2739",
      "stop_lat": 42.983787,
      "stop_lon": -81.244139,
      "stop_sequence": 30,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "RICHKIN4",
      "stop_name": "Richmond at King SB - #2740",
      "stop_lat": 42.982623,
      "stop_lon": -81.249175,
      "stop_sequence": 27,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "RICHKIN4",
      "stop_name": "Richmond at King SB - #2740",
      "stop_lat": 42.982623,
      "stop_lon": -81.249175,
      "stop_sequence": 36,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "RICHQUE1",
      "stop_name": "Richmond north of Queens SB - #2741",
      "stop_lat": 42.985098,
      "stop_lon": -81.250438,
      "stop_sequence": 26,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "RICHQUE2",
      "stop_name": "Richmond south of Queens SB - #2742",
      "stop_lat": 42.984459,
      "stop_lon": -81.250107,
      "stop_sequence": 41,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "RICHQUE2",
      "stop_name": "Richmond south of Queens SB - #2742",
      "stop_lat": 42.984459,
      "stop_lon": -81.250107,
      "stop_sequence": 18,
      "route_id": 102,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "RICHQUE2",
      "stop_name": "Richmond south of Queens SB - #2742",
      "stop_lat": 42.984459,
      "stop_lon": -81.250107,
      "stop_sequence": 23,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "RICHQUE2",
      "stop_name": "Richmond south of Queens SB - #2742",
      "stop_lat": 42.984459,
      "stop_lon": -81.250107,
      "stop_sequence": 35,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "RICHQUE2",
      "stop_name": "Richmond south of Queens SB - #2742",
      "stop_lat": 42.984459,
      "stop_lon": -81.250107,
      "stop_sequence": 6,
      "route_id": 90,
      "route_color": "FF8A15"
    },
    {
      "stop_id": "RIDOYOR2",
      "stop_name": "Ridout at York NB - #2743",
      "stop_lat": 42.980336,
      "stop_lon": -81.252865,
      "stop_sequence": 26,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "WATEKINS",
      "stop_name": "Waterloo & King St SB - #2744",
      "stop_lat": 42.984423,
      "stop_lon": -81.241892,
      "stop_sequence": 31,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "WHARCAST",
      "stop_name": "Wharncliffe at Castle Rock SB - #2751",
      "stop_lat": 42.932731,
      "stop_lon": -81.266579,
      "stop_sequence": 28,
      "route_id": 12,
      "route_color": "CA95FF"
    },
    {
      "stop_id": "FANSDAL3",
      "stop_name": "Fanshawe at Dalmagarry FS1 EB - #2753",
      "stop_lat": 43.01347,
      "stop_lon": -81.327632,
      "stop_sequence": 40,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "FANSDAL4",
      "stop_name": "Fanshawe at Dalmagarry NS2 WB - #2754",
      "stop_lat": 43.013903,
      "stop_lon": -81.326357,
      "stop_sequence": 22,
      "route_id": 31,
      "route_color": "00B700"
    },
    {
      "stop_id": "FANSFOX1",
      "stop_name": "Fanshawe at Foxwood EB - #2755",
      "stop_lat": 43.016456,
      "stop_lon": -81.317319,
      "stop_sequence": 37,
      "route_id": "09",
      "route_color": "B36666"
    },
    {
      "stop_id": "FANSFOX1",
      "stop_name": "Fanshawe at Foxwood EB - #2755",
      "stop_lat": 43.016456,
      "stop_lon": -81.317319,
      "stop_sequence": 42,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "COMMWES1",
      "stop_name": "Commissioners at West WB - #2759",
      "stop_lat": 42.956494,
      "stop_lon": -81.270401,
      "stop_sequence": 31,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "KERNSPR1",
      "stop_name": "Kernohan at Springbank Dr SB - #2763",
      "stop_lat": 42.968954,
      "stop_lon": -81.281168,
      "stop_sequence": 53,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "SOUTBAS2",
      "stop_name": "Southcrest at Base Line EB - #2765",
      "stop_lat": 42.963954,
      "stop_lon": -81.279755,
      "stop_sequence": 11,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "SOUTGAR2",
      "stop_name": "Southcrest east of Gardenwood EB - #2767",
      "stop_lat": 42.96383,
      "stop_lon": -81.28437,
      "stop_sequence": 10,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "TOPPCOM1",
      "stop_name": "Topping Lane at Commissioners NB - #2770",
      "stop_lat": 42.955886,
      "stop_lon": -81.283106,
      "stop_sequence": 6,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "WESTWIN1",
      "stop_name": "Windermere at Western EB - #2772",
      "stop_lat": 43.015039,
      "stop_lon": -81.276075,
      "stop_sequence": 3,
      "route_id": 102,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "1985RICH",
      "stop_name": "1985 Richmond SB - #2774",
      "stop_lat": 43.035062,
      "stop_lon": -81.287222,
      "stop_sequence": 55,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "ADELGLE1",
      "stop_name": "Adelaide at Glenora SB - #2779",
      "stop_lat": 43.028772,
      "stop_lon": -81.251725,
      "stop_sequence": 22,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "BRADJAL1",
      "stop_name": "Bradley at Jalna FS EB - West Leg - #2792",
      "stop_lat": 42.933373,
      "stop_lon": -81.243164,
      "stop_sequence": 11,
      "route_id": 28,
      "route_color": "5555FF"
    },
    {
      "stop_id": "COMMCAR2",
      "stop_name": "Commissioners at Carnegie WB - #2803",
      "stop_lat": 42.957299,
      "stop_lon": -81.25202,
      "stop_sequence": 26,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "COMMHIG3",
      "stop_name": "Commissioners at High WB - #2805",
      "stop_lat": 42.958172,
      "stop_lon": -81.235294,
      "stop_sequence": 22,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "COMMHILD",
      "stop_name": "Commissioners at Highland WB - #2807",
      "stop_lat": 42.95706,
      "stop_lon": -81.258284,
      "stop_sequence": 27,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "COMMKIFD",
      "stop_name": "Commissioners at Kingsford WB - #2808",
      "stop_lat": 42.958033,
      "stop_lon": -81.238789,
      "stop_sequence": 23,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "COMMRIDO",
      "stop_name": "Commissioners at Ridout WB - #2809",
      "stop_lat": 42.957808,
      "stop_lon": -81.242128,
      "stop_sequence": 24,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "COMMWELL",
      "stop_name": "Commissioners at Wellington WB - #2812",
      "stop_lat": 42.958353,
      "stop_lon": -81.230904,
      "stop_sequence": 21,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "COMMWHA2",
      "stop_name": "Commissioners at Wharncliffe WB - #2814",
      "stop_lat": 42.956915,
      "stop_lon": -81.261072,
      "stop_sequence": 28,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "COMMWORT",
      "stop_name": "Commissioners at Wortley WB - #2815",
      "stop_lat": 42.957617,
      "stop_lon": -81.245721,
      "stop_sequence": 25,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "DEVEBANB",
      "stop_name": "Deveron at Banbury NB - #2816",
      "stop_lat": 42.959415,
      "stop_lon": -81.192223,
      "stop_sequence": 48,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "DEVEGLEN",
      "stop_name": "Deveron at Glenroy EB - #2817",
      "stop_lat": 42.954873,
      "stop_lon": -81.194643,
      "stop_sequence": 46,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "DEVELYSA",
      "stop_name": "Deveron at Lysanda NB - #2818",
      "stop_lat": 42.956786,
      "stop_lon": -81.191196,
      "stop_sequence": 47,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "DEVEPOND",
      "stop_name": "Deveron at Pond Mills EB - #2819",
      "stop_lat": 42.955722,
      "stop_lon": -81.198692,
      "stop_sequence": 45,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "EXETBRE1",
      "stop_name": "Exeter at Breck FS 2 EB - #2820",
      "stop_lat": 42.922879,
      "stop_lon": -81.250712,
      "stop_sequence": 5,
      "route_id": 28,
      "route_color": "5555FF"
    },
    {
      "stop_id": "EXETBREC",
      "stop_name": "Exeter at Breck FS 1 EB - #2822",
      "stop_lat": 42.922582,
      "stop_lon": -81.253885,
      "stop_sequence": 4,
      "route_id": 28,
      "route_color": "5555FF"
    },
    {
      "stop_id": "EXETMEA4",
      "stop_name": "Exeter at Meadowbrook FS 1 EB - #2825",
      "stop_lat": 42.921557,
      "stop_lon": -81.266372,
      "stop_sequence": 2,
      "route_id": 28,
      "route_color": "5555FF"
    },
    {
      "stop_id": "EXETMEA5",
      "stop_name": "Exeter at Meadowbrook FS 2 EB - #2826",
      "stop_lat": 42.921883,
      "stop_lon": -81.262239,
      "stop_sequence": 3,
      "route_id": 28,
      "route_color": "5555FF"
    },
    {
      "stop_id": "FANSFREE",
      "stop_name": "Fanshawe at Freemont WB - #2830",
      "stop_lat": 43.036392,
      "stop_lon": -81.250153,
      "stop_sequence": 20,
      "route_id": 25,
      "route_color": "DFDF00"
    },
    {
      "stop_id": "FANSTRO4",
      "stop_name": "Fanshawe at Trossacks FS WB - #2834",
      "stop_lat": 43.038011,
      "stop_lon": -81.24474,
      "stop_sequence": 19,
      "route_id": 25,
      "route_color": "DFDF00"
    },
    {
      "stop_id": "GLENFANS",
      "stop_name": "Glenora at Fanshawe SB - #2839",
      "stop_lat": 43.039197,
      "stop_lon": -81.238956,
      "stop_sequence": 18,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "GLENMCL2",
      "stop_name": "Glenora at McLean SB - #2842",
      "stop_lat": 43.037156,
      "stop_lon": -81.237099,
      "stop_sequence": 19,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "GRENDEV1",
      "stop_name": "Grenfell at Devos EB - #2844",
      "stop_lat": 43.043682,
      "stop_lon": -81.243259,
      "stop_sequence": 15,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "GRENSTAC",
      "stop_name": "Grenfell at Stackhouse EB - #2847",
      "stop_lat": 43.044568,
      "stop_lon": -81.239735,
      "stop_sequence": 16,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "MEADQUAR",
      "stop_name": "Meadowlands at Quarrier NB - #2854",
      "stop_lat": 43.032528,
      "stop_lon": -81.294123,
      "stop_sequence": 51,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "MEADSUNN",
      "stop_name": "Meadowlands at Sunningdale NB - #2856",
      "stop_lat": 43.036043,
      "stop_lon": -81.295833,
      "stop_sequence": 52,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "PINNERIV",
      "stop_name": "Pinnacle at East Rivertrace Walk NS NB - #2857",
      "stop_lat": 43.023625,
      "stop_lon": -81.30063,
      "stop_sequence": 47,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "PINNPLNE",
      "stop_name": "Pinnacle at Plane Tree NS NB - #2861",
      "stop_lat": 43.02576,
      "stop_lon": -81.301789,
      "stop_sequence": 48,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "PLANFAIR",
      "stop_name": "Plane Tree at Faircloth NS EB - #2863",
      "stop_lat": 43.027095,
      "stop_lon": -81.298419,
      "stop_sequence": 49,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "PONDOLD1",
      "stop_name": "Pond Mills at Oldham South Leg SB - #2864",
      "stop_lat": 42.959338,
      "stop_lon": -81.200146,
      "stop_sequence": 43,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "DUFFWATS",
      "stop_name": "Dufferin at Waterloo WB - #",
      "stop_lat": 42.988309,
      "stop_lon": -81.243822,
      "stop_sequence": 27,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "PROUOXFO",
      "stop_name": "Proudfoot at Oxford - #",
      "stop_lat": 42.985155,
      "stop_lon": -81.288054,
      "stop_sequence": 1,
      "route_id": 33,
      "route_color": "BB77FF"
    },
    {
      "stop_id": "HUROBRI2",
      "stop_name": "Huron at Briarhill WB - #1003",
      "stop_lat": 43.016375,
      "stop_lon": -81.227748,
      "stop_sequence": 9,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "HUROBRI2",
      "stop_name": "Huron at Briarhill WB - #1003",
      "stop_lat": 43.016375,
      "stop_lon": -81.227748,
      "stop_sequence": 11,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "HUROFRAS",
      "stop_name": "Huron at Fraser WB - #1006",
      "stop_lat": 43.009652,
      "stop_lon": -81.250539,
      "stop_sequence": 21,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "HUROHIG2",
      "stop_name": "Huron east of Highbury WB - #1008",
      "stop_lat": 43.020129,
      "stop_lon": -81.215049,
      "stop_sequence": 8,
      "route_id": 25,
      "route_color": "DFDF00"
    },
    {
      "stop_id": "ADMIVAU1",
      "stop_name": "Admiral at Vaubois EB - #101",
      "stop_lat": 43.002464,
      "stop_lon": -81.156352,
      "stop_sequence": 10,
      "route_id": 35,
      "route_color": "DBC004"
    },
    {
      "stop_id": "HUROHIG4",
      "stop_name": "Huron west of Highbury WB - #1010",
      "stop_lat": 43.019826,
      "stop_lon": -81.21617,
      "stop_sequence": 11,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "HUROHIG4",
      "stop_name": "Huron west of Highbury WB - #1010",
      "stop_lat": 43.019826,
      "stop_lon": -81.21617,
      "stop_sequence": 8,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "HUROMCN2",
      "stop_name": "Huron at McNay WB - #1012",
      "stop_lat": 43.017229,
      "stop_lon": -81.224919,
      "stop_sequence": 10,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "HURORIC2",
      "stop_name": "Huron at Richmond WB - #1014",
      "stop_lat": 43.007234,
      "stop_lon": -81.258655,
      "stop_sequence": 23,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "HUROSAN2",
      "stop_name": "Huron at Sandford WB - #1016",
      "stop_lat": 43.022613,
      "stop_lon": -81.206383,
      "stop_sequence": 9,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "HUROSAN2",
      "stop_name": "Huron at Sandford WB - #1016",
      "stop_lat": 43.022613,
      "stop_lon": -81.206383,
      "stop_sequence": 6,
      "route_id": 25,
      "route_color": "DFDF00"
    },
    {
      "stop_id": "HUROSAN2",
      "stop_name": "Huron at Sandford WB - #1016",
      "stop_lat": 43.022613,
      "stop_lon": -81.206383,
      "stop_sequence": 6,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "HUROVES2",
      "stop_name": "Huron at Vesta WB - #1018",
      "stop_lat": 43.018876,
      "stop_lon": -81.219421,
      "stop_sequence": 12,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "HUROVES2",
      "stop_name": "Huron at Vesta WB - #1018",
      "stop_lat": 43.018876,
      "stop_lon": -81.219421,
      "stop_sequence": 9,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "HUROWAT2",
      "stop_name": "Huron at Waterloo WB - #1020",
      "stop_lat": 43.00868,
      "stop_lon": -81.253797,
      "stop_sequence": 22,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "HUROWEB2",
      "stop_name": "Huron at Webster WB - #1022",
      "stop_lat": 43.021579,
      "stop_lon": -81.209919,
      "stop_sequence": 10,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "HUROWEB2",
      "stop_name": "Huron at Webster WB - #1022",
      "stop_lat": 43.021579,
      "stop_lon": -81.209919,
      "stop_sequence": 7,
      "route_id": 25,
      "route_color": "DFDF00"
    },
    {
      "stop_id": "HUROWEB2",
      "stop_name": "Huron at Webster WB - #1022",
      "stop_lat": 43.021579,
      "stop_lon": -81.209919,
      "stop_sequence": 7,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "HUROWEDG",
      "stop_name": "Huron at Wedgewood WB - #1024",
      "stop_lat": 43.013786,
      "stop_lon": -81.236594,
      "stop_sequence": 11,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "HYDEFIG1",
      "stop_name": "Hyde Park at Fiddlers Green NB - #1026",
      "stop_lat": 42.971772,
      "stop_lon": -81.316912,
      "stop_sequence": 15,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "HYDEFIG1",
      "stop_name": "Hyde Park at Fiddlers Green NB - #1026",
      "stop_lat": 42.971772,
      "stop_lon": -81.316912,
      "stop_sequence": 27,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "HYDEIVAN",
      "stop_name": "Hyde Park at Ivanhill NB - #1028",
      "stop_lat": 42.981119,
      "stop_lon": -81.323053,
      "stop_sequence": 31,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "HYDEOXF1",
      "stop_name": "Hyde Park south of Oxford NB - #1029",
      "stop_lat": 42.97504,
      "stop_lon": -81.320034,
      "stop_sequence": 16,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "HYDEOXF1",
      "stop_name": "Hyde Park south of Oxford NB - #1029",
      "stop_lat": 42.97504,
      "stop_lon": -81.320034,
      "stop_sequence": 28,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "HYDERIVE",
      "stop_name": "Hyde Park at Riverside NB - #1031",
      "stop_lat": 42.965014,
      "stop_lon": -81.315052,
      "stop_sequence": 13,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "HYDEVALE",
      "stop_name": "Hyde Park at Valetta NB - #1032",
      "stop_lat": 42.96904,
      "stop_lon": -81.316032,
      "stop_sequence": 14,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "JALNBRA4",
      "stop_name": "Jalna south of Bradley SB - #1047",
      "stop_lat": 42.932977,
      "stop_lon": -81.228337,
      "stop_sequence": 30,
      "route_id": 93,
      "route_color": "FF8000"
    },
    {
      "stop_id": "JALNERI2",
      "stop_name": "Jalna at Erica north SB - #1052",
      "stop_lat": 42.936714,
      "stop_lon": -81.245736,
      "stop_sequence": 25,
      "route_id": 93,
      "route_color": "FF8000"
    },
    {
      "stop_id": "JALNERI4",
      "stop_name": "Jalna at Erica south SB - #1053",
      "stop_lat": 42.933905,
      "stop_lon": -81.244384,
      "stop_sequence": 26,
      "route_id": 93,
      "route_color": "FF8000"
    },
    {
      "stop_id": "JALNERN5",
      "stop_name": "Jalna at Ernest south EB - #1057",
      "stop_lat": 42.925268,
      "stop_lon": -81.234714,
      "stop_sequence": 57,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "JALNJOS2",
      "stop_name": "Jalna north of Josselyn SB - #1061",
      "stop_lat": 42.940554,
      "stop_lon": -81.244017,
      "stop_sequence": 23,
      "route_id": 93,
      "route_color": "FF8000"
    },
    {
      "stop_id": "JALNJOS4",
      "stop_name": "Jalna south of Josselyn SB - #1062",
      "stop_lat": 42.938103,
      "stop_lon": -81.245772,
      "stop_sequence": 24,
      "route_id": 93,
      "route_color": "FF8000"
    },
    {
      "stop_id": "JALNPIER",
      "stop_name": "Jalna at Piers NB - #1064",
      "stop_lat": 42.928458,
      "stop_lon": -81.22641,
      "stop_sequence": 62,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "KINGCLAR",
      "stop_name": "King at Clarence EB - #1080",
      "stop_lat": 42.983335,
      "stop_lon": -81.245868,
      "stop_sequence": 18,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "KINGCLAR",
      "stop_name": "King at Clarence EB - #1080",
      "stop_lat": 42.983335,
      "stop_lon": -81.245868,
      "stop_sequence": 29,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "KINGCLAR",
      "stop_name": "King at Clarence EB - #1080",
      "stop_lat": 42.983335,
      "stop_lon": -81.245868,
      "stop_sequence": 1,
      "route_id": "09",
      "route_color": "B36666"
    },
    {
      "stop_id": "KINGCLAR",
      "stop_name": "King at Clarence EB - #1080",
      "stop_lat": 42.983335,
      "stop_lon": -81.245868,
      "stop_sequence": 20,
      "route_id": 102,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "KINGCLAR",
      "stop_name": "King at Clarence EB - #1080",
      "stop_lat": 42.983335,
      "stop_lon": -81.245868,
      "stop_sequence": 25,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "KINGCLAR",
      "stop_name": "King at Clarence EB - #1080",
      "stop_lat": 42.983335,
      "stop_lon": -81.245868,
      "stop_sequence": 36,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "KINGCLAR",
      "stop_name": "King at Clarence EB - #1080",
      "stop_lat": 42.983335,
      "stop_lon": -81.245868,
      "stop_sequence": 7,
      "route_id": 90,
      "route_color": "FF8A15"
    },
    {
      "stop_id": "KINGCLAR",
      "stop_name": "King at Clarence EB - #1080",
      "stop_lat": 42.983335,
      "stop_lon": -81.245868,
      "stop_sequence": 7,
      "route_id": 94,
      "route_color": "FF8000"
    },
    {
      "stop_id": "KINGOAK2",
      "stop_name": "Kingsway at Oakridge WB - #1085",
      "stop_lat": 42.977689,
      "stop_lon": -81.294624,
      "stop_sequence": 17,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "KINGRICH",
      "stop_name": "King at Richmond EB - #1086",
      "stop_lat": 42.982623,
      "stop_lon": -81.248536,
      "stop_sequence": 19,
      "route_id": 102,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "KINGRICH",
      "stop_name": "King at Richmond EB - #1086",
      "stop_lat": 42.982623,
      "stop_lon": -81.248536,
      "stop_sequence": 24,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "KINGWON2",
      "stop_name": "Kingsway at Wonderland WB - #1092",
      "stop_lat": 42.978844,
      "stop_lon": -81.290607,
      "stop_sequence": 16,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "KIPPADEL",
      "stop_name": "Kipps at Adelaide EB - #1093",
      "stop_lat": 43.01807,
      "stop_lon": -81.244059,
      "stop_sequence": 1,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "KIPPARBO",
      "stop_name": "Kipps at Arbour Glen EB - #1094",
      "stop_lat": 43.021146,
      "stop_lon": -81.233784,
      "stop_sequence": 4,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "KIPPBARK",
      "stop_name": "Kipps at Barker EB - #1095",
      "stop_lat": 43.020271,
      "stop_lon": -81.236561,
      "stop_sequence": 3,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "KIPPBELF",
      "stop_name": "Kipps at Belfield EB - #1096",
      "stop_lat": 43.019017,
      "stop_lon": -81.240873,
      "stop_sequence": 2,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "KIPPBRIA",
      "stop_name": "Kipps at Briarhill EB - #1097",
      "stop_lat": 43.022453,
      "stop_lon": -81.229344,
      "stop_sequence": 5,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "LAWSBAN2",
      "stop_name": "Lawson at Banting WB - #1108",
      "stop_lat": 42.999634,
      "stop_lon": -81.304529,
      "stop_sequence": 23,
      "route_id": "09",
      "route_color": "B36666"
    },
    {
      "stop_id": "LAWSLIMB",
      "stop_name": "Lawson at Limberlost WB - #1110",
      "stop_lat": 42.99789,
      "stop_lon": -81.306596,
      "stop_sequence": 24,
      "route_id": "09",
      "route_color": "B36666"
    },
    {
      "stop_id": "LIMBARD1",
      "stop_name": "Limberlost at Ardsley NB - #1118",
      "stop_lat": 43.00247,
      "stop_lon": -81.309096,
      "stop_sequence": 26,
      "route_id": "09",
      "route_color": "B36666"
    },
    {
      "stop_id": "LIMBARD3",
      "stop_name": "Limberlost between Lawson and Ardsley NB - #1120",
      "stop_lat": 42.999973,
      "stop_lon": -81.308371,
      "stop_sequence": 25,
      "route_id": "09",
      "route_color": "B36666"
    },
    {
      "stop_id": "LIMBGAI1",
      "stop_name": "Limberlost at Gainsborough NB - #1124",
      "stop_lat": 43.005037,
      "stop_lon": -81.309399,
      "stop_sequence": 27,
      "route_id": "09",
      "route_color": "B36666"
    },
    {
      "stop_id": "MANITWEE",
      "stop_name": "Manitoulin at Tweedsmuir NB - #1133",
      "stop_lat": 42.982666,
      "stop_lon": -81.181256,
      "stop_sequence": 15,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "MARCNOEL",
      "stop_name": "Marconi at Noel SB - #1137",
      "stop_lat": 42.990376,
      "stop_lon": -81.164965,
      "stop_sequence": 58,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "MARCTRAF",
      "stop_name": "Marconi at Trafalgar SB - #1139",
      "stop_lat": 42.992638,
      "stop_lon": -81.167302,
      "stop_sequence": 57,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "ALDEARD1",
      "stop_name": "Aldersbrook at Ardsley NB - #114",
      "stop_lat": 43.001538,
      "stop_lon": -81.314869,
      "stop_sequence": 15,
      "route_id": 31,
      "route_color": "00B700"
    },
    {
      "stop_id": "MASOSTO1",
      "stop_name": "Masonville Place Stop #1 - #1140",
      "stop_lat": 43.025446,
      "stop_lon": -81.281591,
      "stop_sequence": 1,
      "route_id": 93,
      "route_color": "FF8000"
    },
    {
      "stop_id": "MASOSTO2",
      "stop_name": "Masonville Place Stop #2 - #1141",
      "stop_lat": 43.025666,
      "stop_lon": -81.281723,
      "stop_sequence": 28,
      "route_id": 25,
      "route_color": "DFDF00"
    },
    {
      "stop_id": "MASOSTO2",
      "stop_name": "Masonville Place Stop #2 - #1141",
      "stop_lat": 43.025666,
      "stop_lon": -81.281723,
      "stop_sequence": 1,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "MASOSTO2",
      "stop_name": "Masonville Place Stop #2 - #1141",
      "stop_lat": 43.025666,
      "stop_lon": -81.281723,
      "stop_sequence": 58,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "MASOSTO4",
      "stop_name": "Masonville Place Stop #4 - #1143",
      "stop_lat": 43.025883,
      "stop_lon": -81.28161,
      "stop_sequence": 1,
      "route_id": 90,
      "route_color": "FF8A15"
    },
    {
      "stop_id": "MASOSTO5",
      "stop_name": "Masonville Place Stop #5 - #1144",
      "stop_lat": 43.025452,
      "stop_lon": -81.281354,
      "stop_sequence": 1,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "MASOSTO6",
      "stop_name": "Masonville Place Stop #6 - #1145",
      "stop_lat": 43.025437,
      "stop_lon": -81.281381,
      "stop_sequence": 1,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "MCNACHEA",
      "stop_name": "McNay at Cheapside SB - #1155",
      "stop_lat": 43.011816,
      "stop_lon": -81.221157,
      "stop_sequence": 16,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "MCNAHUR2",
      "stop_name": "McNay at Huron SB - #1157",
      "stop_lat": 43.01692,
      "stop_lon": -81.223727,
      "stop_sequence": 13,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "MCNAROC2",
      "stop_name": "McNay at Rock SB - #1161",
      "stop_lat": 43.015513,
      "stop_lon": -81.222983,
      "stop_sequence": 14,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "MCNAVIC2",
      "stop_name": "McNay at Victoria SB - #1163",
      "stop_lat": 43.013474,
      "stop_lon": -81.221978,
      "stop_sequence": 15,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "MEADREA1",
      "stop_name": "Meadowgate at Reardon NB - #1165",
      "stop_lat": 42.963084,
      "stop_lon": -81.180223,
      "stop_sequence": 7,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "MEGEXE2",
      "stop_name": "Meg at Exeter SB - #1169",
      "stop_lat": 42.925303,
      "stop_lon": -81.232154,
      "stop_sequence": 58,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "MIDDPERT",
      "stop_name": "Talbot College - #1173",
      "stop_lat": 43.008224,
      "stop_lon": -81.270543,
      "stop_sequence": 70,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "MIDDPERT",
      "stop_name": "Talbot College - #1173",
      "stop_lat": 43.008224,
      "stop_lon": -81.270543,
      "stop_sequence": 14,
      "route_id": 106,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "MIDDPERT",
      "stop_name": "Talbot College - #1173",
      "stop_lat": 43.008224,
      "stop_lon": -81.270543,
      "stop_sequence": 26,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "MILLASHB",
      "stop_name": "Millbank at Ashbury SB - #1174",
      "stop_lat": 42.942113,
      "stop_lon": -81.202548,
      "stop_sequence": 51,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "MILLBEX2",
      "stop_name": "Millbank at Bexhill  SB - #1176",
      "stop_lat": 42.941025,
      "stop_lon": -81.201199,
      "stop_sequence": 52,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "MILLBEX4",
      "stop_name": "720 Millbank - #1178",
      "stop_lat": 42.938947,
      "stop_lon": -81.200415,
      "stop_sequence": 53,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "MILLDOWN",
      "stop_name": "Millbank at Downing NB - #1180",
      "stop_lat": 42.946786,
      "stop_lon": -81.211933,
      "stop_sequence": 44,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "MILLDUD2",
      "stop_name": "Millbank at Dudley SB - #1182",
      "stop_lat": 42.944011,
      "stop_lon": -81.204454,
      "stop_sequence": 50,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "MILLPAR1",
      "stop_name": "Millbank at Parliament EB - #1186",
      "stop_lat": 42.952091,
      "stop_lon": -81.20796,
      "stop_sequence": 47,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "MILLSDA1",
      "stop_name": "Millbank at Southdale NB - #1188",
      "stop_lat": 42.945211,
      "stop_lon": -81.21175,
      "stop_sequence": 43,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "MILLSDA4",
      "stop_name": "Laurier Secondary School - #1190",
      "stop_lat": 42.94561,
      "stop_lon": -81.204729,
      "stop_sequence": 49,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "MILLSHA2",
      "stop_name": "Millbank at Shaftsbury east SB - #1192",
      "stop_lat": 42.950104,
      "stop_lon": -81.205462,
      "stop_sequence": 48,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "MILLSHA3",
      "stop_name": "Millbank at Shaftsbury NB - #1193",
      "stop_lat": 42.949798,
      "stop_lon": -81.210517,
      "stop_sequence": 46,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "MILLSTAN",
      "stop_name": "Millbank at Stanhope NB - #1195",
      "stop_lat": 42.948279,
      "stop_lon": -81.21163,
      "stop_sequence": 45,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "MONTFUND",
      "stop_name": "Montabello at Fundy NB - #1199",
      "stop_lat": 42.978533,
      "stop_lon": -81.178654,
      "stop_sequence": 13,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "ALDEBLA3",
      "stop_name": "Aldersbrook north of Blackacres NB - #120",
      "stop_lat": 43.012055,
      "stop_lon": -81.321538,
      "stop_sequence": 35,
      "route_id": "09",
      "route_color": "B36666"
    },
    {
      "stop_id": "ALDEBLA3",
      "stop_name": "Aldersbrook north of Blackacres NB - #120",
      "stop_lat": 43.012055,
      "stop_lon": -81.321538,
      "stop_sequence": 20,
      "route_id": 31,
      "route_color": "00B700"
    },
    {
      "stop_id": "MONTGORE",
      "stop_name": "Montabello at Gore NB - #1200",
      "stop_lat": 42.977249,
      "stop_lon": -81.178022,
      "stop_sequence": 12,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "MONTTWEE",
      "stop_name": "Montabello at Tweedsmuir NB - #1206",
      "stop_lat": 42.979914,
      "stop_lon": -81.179396,
      "stop_sequence": 14,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "MORNCON1",
      "stop_name": "Mornington at Connaught EB - #1207",
      "stop_lat": 43.003582,
      "stop_lon": -81.211879,
      "stop_sequence": 55,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "ALDEBRAN",
      "stop_name": "Aldersbrook at Brandy Lane NB - #121",
      "stop_lat": 42.994024,
      "stop_lon": -81.311112,
      "stop_sequence": 11,
      "route_id": 31,
      "route_color": "00B700"
    },
    {
      "stop_id": "MORNOXF3",
      "stop_name": "Mornington at Oxford NB - #1215",
      "stop_lat": 43.006934,
      "stop_lon": -81.212908,
      "stop_sequence": 57,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "MORNSAL1",
      "stop_name": "Mornington at Salisbury EB - #1217",
      "stop_lat": 43.002589,
      "stop_lon": -81.214663,
      "stop_sequence": 54,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "MORNSTRA",
      "stop_name": "Mornington at Strand EB - #1219",
      "stop_lat": 43.001751,
      "stop_lon": -81.219938,
      "stop_sequence": 53,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "ALDEBRU1",
      "stop_name": "Aldersbrook at Brunswick NB - #122",
      "stop_lat": 42.999184,
      "stop_lon": -81.315359,
      "stop_sequence": 14,
      "route_id": 31,
      "route_color": "00B700"
    },
    {
      "stop_id": "NATSCI",
      "stop_name": "Natural Science - #1222",
      "stop_lat": 43.010172,
      "stop_lon": -81.273174,
      "stop_sequence": 1,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "NATSCI",
      "stop_name": "Natural Science - #1222",
      "stop_lat": 43.010172,
      "stop_lon": -81.273174,
      "stop_sequence": 71,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "NATSCI",
      "stop_name": "Natural Science - #1222",
      "stop_lat": 43.010172,
      "stop_lon": -81.273174,
      "stop_sequence": 1,
      "route_id": 102,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "NATSCI",
      "stop_name": "Natural Science - #1222",
      "stop_lat": 43.010172,
      "stop_lon": -81.273174,
      "stop_sequence": 15,
      "route_id": 106,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "NATSCI",
      "stop_name": "Natural Science - #1222",
      "stop_lat": 43.010172,
      "stop_lon": -81.273174,
      "stop_sequence": 27,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "NATSCI",
      "stop_name": "Natural Science - #1222",
      "stop_lat": 43.010172,
      "stop_lon": -81.273174,
      "stop_sequence": 39,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "NATSCI",
      "stop_name": "Natural Science - #1222",
      "stop_lat": 43.010172,
      "stop_lon": -81.273174,
      "stop_sequence": 1,
      "route_id": 94,
      "route_color": "FF8000"
    },
    {
      "stop_id": "NEPTSOV1",
      "stop_name": "Neptune at Sovereign NB - #1226",
      "stop_lat": 42.989696,
      "stop_lon": -81.137591,
      "stop_sequence": 16,
      "route_id": 37,
      "route_color": "0098E1"
    },
    {
      "stop_id": "NEWBADE1",
      "stop_name": "Newbold at Adelaide EB - #1228",
      "stop_lat": 42.934315,
      "stop_lon": -81.208905,
      "stop_sequence": 8,
      "route_id": 30,
      "route_color": "CF2985"
    },
    {
      "stop_id": "NEWBBESS",
      "stop_name": "Newbold at Bessemer EB - #1229",
      "stop_lat": 42.934002,
      "stop_lon": -81.211509,
      "stop_sequence": 7,
      "route_id": 30,
      "route_color": "CF2985"
    },
    {
      "stop_id": "NEWBCON1",
      "stop_name": "Newbold at Consortium EB - #1231",
      "stop_lat": 42.934763,
      "stop_lon": -81.20534,
      "stop_sequence": 9,
      "route_id": 30,
      "route_color": "CF2985"
    },
    {
      "stop_id": "NEWBTOWE",
      "stop_name": "Newbold at Towerline EB - #1232",
      "stop_lat": 42.93529,
      "stop_lon": -81.201678,
      "stop_sequence": 10,
      "route_id": 30,
      "route_color": "CF2985"
    },
    {
      "stop_id": "NIXOCRE2",
      "stop_name": "Nixon at Creston SB - #1234",
      "stop_lat": 42.944628,
      "stop_lon": -81.237278,
      "stop_sequence": 48,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "NIXOSDAL",
      "stop_name": "Nixon at Southdale SB - #1236",
      "stop_lat": 42.943059,
      "stop_lon": -81.236891,
      "stop_sequence": 49,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "NOELBOW",
      "stop_name": "Noel at Bow EB - #1238",
      "stop_lat": 42.990022,
      "stop_lon": -81.161463,
      "stop_sequence": 59,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "NOTRVISC",
      "stop_name": "Notre Dame at Viscount SB - #1240",
      "stop_lat": 42.94825,
      "stop_lon": -81.270439,
      "stop_sequence": 20,
      "route_id": 12,
      "route_color": "CA95FF"
    },
    {
      "stop_id": "OAKVCHIP",
      "stop_name": "Oakville at Chippewa NB - #1244",
      "stop_lat": 43.029372,
      "stop_lon": -81.19657,
      "stop_sequence": 3,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "OAKVHURO",
      "stop_name": "Oakville at Huron NB - #1245",
      "stop_lat": 43.027589,
      "stop_lon": -81.192298,
      "stop_sequence": 1,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "OAKVTILI",
      "stop_name": "Oakville at Tilipe NB - #1246",
      "stop_lat": 43.028653,
      "stop_lon": -81.193699,
      "stop_sequence": 2,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "OSGOBRE2",
      "stop_name": "Osgoode at Breckenridge WB - #1252",
      "stop_lat": 42.93763,
      "stop_lon": -81.217447,
      "stop_sequence": 62,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "OSGOFITZ",
      "stop_name": "Osgoode at Fitzroy WB - #1253",
      "stop_lat": 42.937771,
      "stop_lon": -81.214978,
      "stop_sequence": 61,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "OSGOKIN2",
      "stop_name": "Osgoode at Kinburn WB - #1255",
      "stop_lat": 42.939015,
      "stop_lon": -81.21095,
      "stop_sequence": 59,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "OSGOKIN4",
      "stop_name": "1081 Osgoode WB - #1256",
      "stop_lat": 42.938117,
      "stop_lon": -81.212643,
      "stop_sequence": 60,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "OSGOWOO2",
      "stop_name": "Osgoode at Woodrow WB - #1259",
      "stop_lat": 42.938269,
      "stop_lon": -81.206641,
      "stop_sequence": 57,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "ALDEGAI1",
      "stop_name": "Aldersbrook at Gainsborough NB - #126",
      "stop_lat": 43.003132,
      "stop_lon": -81.315752,
      "stop_sequence": 16,
      "route_id": 31,
      "route_color": "00B700"
    },
    {
      "stop_id": "OXFOADE1",
      "stop_name": "Oxford at Adelaide EB - #1260",
      "stop_lat": 42.99992,
      "stop_lon": -81.237831,
      "stop_sequence": 11,
      "route_id": 104,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "OXFOADE1",
      "stop_name": "Oxford at Adelaide EB - #1260",
      "stop_lat": 42.99992,
      "stop_lon": -81.237831,
      "stop_sequence": 40,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "OXFOADE1",
      "stop_name": "Oxford at Adelaide EB - #1260",
      "stop_lat": 42.99992,
      "stop_lon": -81.237831,
      "stop_sequence": 7,
      "route_id": 91,
      "route_color": "FF8000"
    },
    {
      "stop_id": "OXFOADE2",
      "stop_name": "Oxford at Adelaide WB - #1261",
      "stop_lat": 43.000109,
      "stop_lon": -81.237837,
      "stop_sequence": 15,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "OXFOANDR",
      "stop_name": "Oxford at St. Andrews EB - #1262",
      "stop_lat": 42.992511,
      "stop_lon": -81.262967,
      "stop_sequence": 31,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "OXFOBEA1",
      "stop_name": "Oxford at Beaverbrook EB - #1263",
      "stop_lat": 42.987116,
      "stop_lon": -81.281374,
      "stop_sequence": 25,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "OXFOBRI1",
      "stop_name": "Oxford at Britannia EB - #1266",
      "stop_lat": 42.989831,
      "stop_lon": -81.272053,
      "stop_sequence": 28,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "OXFOBRI1",
      "stop_name": "Oxford at Britannia EB - #1266",
      "stop_lat": 42.989831,
      "stop_lon": -81.272053,
      "stop_sequence": 4,
      "route_id": 91,
      "route_color": "FF8000"
    },
    {
      "stop_id": "OXFOCAP1",
      "stop_name": "Oxford at Capulet Lane EB - #1268",
      "stop_lat": 42.982657,
      "stop_lon": -81.296316,
      "stop_sequence": 22,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "OXFOCHE1",
      "stop_name": "Chelsey Park Retirement Home - #1270",
      "stop_lat": 42.988137,
      "stop_lon": -81.277858,
      "stop_sequence": 26,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "OXFOCHE1",
      "stop_name": "Chelsey Park Retirement Home - #1270",
      "stop_lat": 42.988137,
      "stop_lon": -81.277858,
      "stop_sequence": 21,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "OXFOCHE3",
      "stop_name": "Oxford at Cherryhill Blvd EB - #1272",
      "stop_lat": 42.988555,
      "stop_lon": -81.276434,
      "stop_sequence": 27,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "OXFOCLA1",
      "stop_name": "Oxford east of Clarke EB - #1273",
      "stop_lat": 43.016547,
      "stop_lon": -81.180449,
      "stop_sequence": 5,
      "route_id": 36,
      "route_color": "B43D61"
    },
    {
      "stop_id": "OXFOCLA3",
      "stop_name": "General Dynamics Gate 1 EB - #1275",
      "stop_lat": 43.017621,
      "stop_lon": -81.176624,
      "stop_sequence": 6,
      "route_id": 36,
      "route_color": "B43D61"
    },
    {
      "stop_id": "OXFOCLA5",
      "stop_name": "Oxford west of Clarke EB - #1276",
      "stop_lat": 43.015147,
      "stop_lon": -81.185342,
      "stop_sequence": 4,
      "route_id": 36,
      "route_color": "B43D61"
    },
    {
      "stop_id": "OXFOCLE1",
      "stop_name": "Oxford at Clemens EB - #1278",
      "stop_lat": 43.006137,
      "stop_lon": -81.216628,
      "stop_sequence": 20,
      "route_id": 104,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "OXFOCLE1",
      "stop_name": "Oxford at Clemens EB - #1278",
      "stop_lat": 43.006137,
      "stop_lon": -81.216628,
      "stop_sequence": 49,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "OXFOCLE2",
      "stop_name": "Oxford at Clemens WB - #1279",
      "stop_lat": 43.006156,
      "stop_lon": -81.216871,
      "stop_sequence": 7,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "ALDEHAW1",
      "stop_name": "Aldersbrook at Hawthorne NB - #128",
      "stop_lat": 43.006761,
      "stop_lon": -81.318598,
      "stop_sequence": 18,
      "route_id": 31,
      "route_color": "00B700"
    },
    {
      "stop_id": "OXFOCOL1",
      "stop_name": "Oxford at Colborne EB - #1280",
      "stop_lat": 42.997644,
      "stop_lon": -81.245728,
      "stop_sequence": 8,
      "route_id": 104,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "OXFOCOL1",
      "stop_name": "Oxford at Colborne EB - #1280",
      "stop_lat": 42.997644,
      "stop_lon": -81.245728,
      "stop_sequence": 37,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "OXFOCOL2",
      "stop_name": "Oxford at Colborne WB - #1281",
      "stop_lat": 42.997886,
      "stop_lon": -81.245338,
      "stop_sequence": 18,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "OXFOELI1",
      "stop_name": "Oxford at Elizabeth EB - #1285",
      "stop_lat": 43.000833,
      "stop_lon": -81.234811,
      "stop_sequence": 12,
      "route_id": 104,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "OXFOELI1",
      "stop_name": "Oxford at Elizabeth EB - #1285",
      "stop_lat": 43.000833,
      "stop_lon": -81.234811,
      "stop_sequence": 41,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "OXFOELI2",
      "stop_name": "Oxford at Elizabeth WB - #1286",
      "stop_lat": 43.00104,
      "stop_lon": -81.234328,
      "stop_sequence": 14,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "OXFOELL1",
      "stop_name": "Oxford at Elliott EB - #1287",
      "stop_lat": 43.001599,
      "stop_lon": -81.2321,
      "stop_sequence": 13,
      "route_id": 104,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "OXFOELL1",
      "stop_name": "Oxford at Elliott EB - #1287",
      "stop_lat": 43.001599,
      "stop_lon": -81.2321,
      "stop_sequence": 42,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "OXFOELL2",
      "stop_name": "Oxford at Elliott WB - #1288",
      "stop_lat": 43.001825,
      "stop_lon": -81.231662,
      "stop_sequence": 13,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "OXFOEMPI",
      "stop_name": "Oxford at Empire EB - #1289",
      "stop_lat": 43.006964,
      "stop_lon": -81.213768,
      "stop_sequence": 21,
      "route_id": 104,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "OXFOEMPI",
      "stop_name": "Oxford at Empire EB - #1289",
      "stop_lat": 43.006964,
      "stop_lon": -81.213768,
      "stop_sequence": 50,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "OXFOFID1",
      "stop_name": "Oxford at Fiddlers Green EB - #1291",
      "stop_lat": 42.976309,
      "stop_lon": -81.318179,
      "stop_sequence": 17,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "OXFOFLEE",
      "stop_name": "Oxford at Fleet EB - #1293",
      "stop_lat": 43.004968,
      "stop_lon": -81.220662,
      "stop_sequence": 18,
      "route_id": 104,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "OXFOFLEE",
      "stop_name": "Oxford at Fleet EB - #1293",
      "stop_lat": 43.004968,
      "stop_lon": -81.220662,
      "stop_sequence": 47,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "OXFOFRE1",
      "stop_name": "Oxford at Freele EB - #1294",
      "stop_lat": 42.978416,
      "stop_lon": -81.310941,
      "stop_sequence": 19,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "OXFOGAM1",
      "stop_name": "Oxford at Gammage EB - #1296",
      "stop_lat": 43.002591,
      "stop_lon": -81.228723,
      "stop_sequence": 14,
      "route_id": 104,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "OXFOGAM1",
      "stop_name": "Oxford at Gammage EB - #1296",
      "stop_lat": 43.002591,
      "stop_lon": -81.228723,
      "stop_sequence": 43,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "OXFOGAM1",
      "stop_name": "Oxford at Gammage EB - #1296",
      "stop_lat": 43.002591,
      "stop_lon": -81.228723,
      "stop_sequence": 8,
      "route_id": 91,
      "route_color": "FF8000"
    },
    {
      "stop_id": "OXFOGAM2",
      "stop_name": "Oxford at Gammage WB - #1297",
      "stop_lat": 43.002899,
      "stop_lon": -81.228015,
      "stop_sequence": 12,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "OXFOGEO1",
      "stop_name": "Oxford at St. George EB - #1298",
      "stop_lat": 42.994743,
      "stop_lon": -81.255576,
      "stop_sequence": 33,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "ALDELAW1",
      "stop_name": "Aldersbrook at Lawson NB - #130",
      "stop_lat": 42.994294,
      "stop_lon": -81.312784,
      "stop_sequence": 12,
      "route_id": 31,
      "route_color": "00B700"
    },
    {
      "stop_id": "OXFOGM1",
      "stop_name": "General Dynamics Gate 4 - #1300",
      "stop_lat": 43.01888,
      "stop_lon": -81.172206,
      "stop_sequence": 7,
      "route_id": 36,
      "route_color": "B43D61"
    },
    {
      "stop_id": "OXFOGM3",
      "stop_name": "2035 Oxford - #1302",
      "stop_lat": 43.019868,
      "stop_lon": -81.16872,
      "stop_sequence": 8,
      "route_id": 36,
      "route_color": "B43D61"
    },
    {
      "stop_id": "OXFOGUI1",
      "stop_name": "Oxford at Guildwood Gate EB - #1304",
      "stop_lat": 42.97745,
      "stop_lon": -81.314125,
      "stop_sequence": 18,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "OXFOHIG1",
      "stop_name": "Oxbury Centre - #1307",
      "stop_lat": 43.007889,
      "stop_lon": -81.210425,
      "stop_sequence": 23,
      "route_id": 104,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "OXFOHIG1",
      "stop_name": "Oxbury Centre - #1307",
      "stop_lat": 43.007889,
      "stop_lon": -81.210425,
      "stop_sequence": 52,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "OXFOHIG1",
      "stop_name": "Oxbury Centre - #1307",
      "stop_lat": 43.007889,
      "stop_lon": -81.210425,
      "stop_sequence": 59,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "OXFOHIG2",
      "stop_name": "Oxford at Highbury WB - #1308",
      "stop_lat": 43.008198,
      "stop_lon": -81.209901,
      "stop_sequence": 4,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "OXFOHIG3",
      "stop_name": "Oxford at Highbury EB - #1309",
      "stop_lat": 43.008538,
      "stop_lon": -81.208231,
      "stop_sequence": 24,
      "route_id": 104,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "OXFOHIG3",
      "stop_name": "Oxford at Highbury EB - #1309",
      "stop_lat": 43.008538,
      "stop_lon": -81.208231,
      "stop_sequence": 53,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "OXFOHIG3",
      "stop_name": "Oxford at Highbury EB - #1309",
      "stop_lat": 43.008538,
      "stop_lon": -81.208231,
      "stop_sequence": 60,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "OXFOHIG3",
      "stop_name": "Oxford at Highbury EB - #1309",
      "stop_lat": 43.008538,
      "stop_lon": -81.208231,
      "stop_sequence": 9,
      "route_id": 91,
      "route_color": "FF8000"
    },
    {
      "stop_id": "OXFOHIG4",
      "stop_name": "John Paul Secondary School - #1310",
      "stop_lat": 43.008983,
      "stop_lon": -81.2073,
      "stop_sequence": 3,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "OXFOIND1",
      "stop_name": "Oxford east of Industrial EB - #1313",
      "stop_lat": 43.021161,
      "stop_lon": -81.164167,
      "stop_sequence": 10,
      "route_id": 36,
      "route_color": "B43D61"
    },
    {
      "stop_id": "OXFOIND3",
      "stop_name": "Oxford west of Industrial EB - #1315",
      "stop_lat": 43.020401,
      "stop_lon": -81.16688,
      "stop_sequence": 9,
      "route_id": 36,
      "route_color": "B43D61"
    },
    {
      "stop_id": "OXFOJUNI",
      "stop_name": "Oxford at Juniper EB - #1316",
      "stop_lat": 42.979571,
      "stop_lon": -81.30685,
      "stop_sequence": 20,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "OXFOLAR1",
      "stop_name": "Oxford at Laruel EB - #1317",
      "stop_lat": 42.98131,
      "stop_lon": -81.300912,
      "stop_sequence": 21,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "OXFOLYMA",
      "stop_name": "Oxford at Lyman WB - #1319",
      "stop_lat": 43.005299,
      "stop_lon": -81.219749,
      "stop_sequence": 8,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "ALDERAN1",
      "stop_name": "Aldersbrook at Ranchwood NB - #132",
      "stop_lat": 43.004819,
      "stop_lon": -81.317311,
      "stop_sequence": 17,
      "route_id": 31,
      "route_color": "00B700"
    },
    {
      "stop_id": "OXFOMAI1",
      "stop_name": "Oxford at Maitland EB - #1320",
      "stop_lat": 42.998642,
      "stop_lon": -81.242401,
      "stop_sequence": 9,
      "route_id": 104,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "OXFOMAI1",
      "stop_name": "Oxford at Maitland EB - #1320",
      "stop_lat": 42.998642,
      "stop_lon": -81.242401,
      "stop_sequence": 38,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "OXFOMAI2",
      "stop_name": "Oxford at Maitland WB - #1321",
      "stop_lat": 42.998552,
      "stop_lon": -81.243088,
      "stop_sequence": 17,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "OXFOMORN",
      "stop_name": "Oxford at Mornington EB - #1322",
      "stop_lat": 43.00738,
      "stop_lon": -81.212057,
      "stop_sequence": 22,
      "route_id": 104,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "OXFOMORN",
      "stop_name": "Oxford at Mornington EB - #1322",
      "stop_lat": 43.00738,
      "stop_lon": -81.212057,
      "stop_sequence": 51,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "OXFOMORN",
      "stop_name": "Oxford at Mornington EB - #1322",
      "stop_lat": 43.00738,
      "stop_lon": -81.212057,
      "stop_sequence": 58,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "OXFOOAKS",
      "stop_name": "Oxford at Oakside WB - #1323",
      "stop_lat": 43.007013,
      "stop_lon": -81.213901,
      "stop_sequence": 6,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "OXFOPRO1",
      "stop_name": "Oxford at Proudfoot Lane EB - #1327",
      "stop_lat": 42.985262,
      "stop_lon": -81.287429,
      "stop_sequence": 24,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "OXFOPRO1",
      "stop_name": "Oxford at Proudfoot Lane EB - #1327",
      "stop_lat": 42.985262,
      "stop_lon": -81.287429,
      "stop_sequence": 3,
      "route_id": 91,
      "route_color": "FF8000"
    },
    {
      "stop_id": "OXFOQUE1",
      "stop_name": "Oxford at Quebec EB - #1329",
      "stop_lat": 43.003786,
      "stop_lon": -81.224718,
      "stop_sequence": 16,
      "route_id": 104,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "OXFOQUE1",
      "stop_name": "Oxford at Quebec EB - #1329",
      "stop_lat": 43.003786,
      "stop_lon": -81.224718,
      "stop_sequence": 45,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "OXFOQUE2",
      "stop_name": "Oxford at Quebec WB - #1330",
      "stop_lat": 43.003936,
      "stop_lon": -81.22446,
      "stop_sequence": 10,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "OXFORAT1",
      "stop_name": "Oxford at Rathowen EB - #1331",
      "stop_lat": 42.990925,
      "stop_lon": -81.268407,
      "stop_sequence": 29,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "OXFORIC1",
      "stop_name": "Oxford at Richmond EB - #1333",
      "stop_lat": 42.995586,
      "stop_lon": -81.252763,
      "stop_sequence": 5,
      "route_id": 104,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "OXFORIC1",
      "stop_name": "Oxford at Richmond EB - #1333",
      "stop_lat": 42.995586,
      "stop_lon": -81.252763,
      "stop_sequence": 34,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "OXFORIC1",
      "stop_name": "Oxford at Richmond EB - #1333",
      "stop_lat": 42.995586,
      "stop_lon": -81.252763,
      "stop_sequence": 6,
      "route_id": 91,
      "route_color": "FF8000"
    },
    {
      "stop_id": "OXFOROE2",
      "stop_name": "Oxford at Roehampton WB - #1336",
      "stop_lat": 43.010051,
      "stop_lon": -81.203514,
      "stop_sequence": 2,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "ALDEREX1",
      "stop_name": "Aldersbrook at Rexway NB - #134",
      "stop_lat": 43.008857,
      "stop_lon": -81.320511,
      "stop_sequence": 19,
      "route_id": 31,
      "route_color": "00B700"
    },
    {
      "stop_id": "OXFOSEC1",
      "stop_name": "Oxford at Second EB - #1343",
      "stop_lat": 43.012141,
      "stop_lon": -81.19586,
      "stop_sequence": 55,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "OXFOSEC1",
      "stop_name": "Oxford at Second EB - #1343",
      "stop_lat": 43.012141,
      "stop_lon": -81.19586,
      "stop_sequence": 2,
      "route_id": 36,
      "route_color": "B43D61"
    },
    {
      "stop_id": "OXFOSPIT",
      "stop_name": "Oxford at Spittal EB - #1345",
      "stop_lat": 43.005337,
      "stop_lon": -81.219336,
      "stop_sequence": 19,
      "route_id": 104,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "OXFOSPIT",
      "stop_name": "Oxford at Spittal EB - #1345",
      "stop_lat": 43.005337,
      "stop_lon": -81.219336,
      "stop_sequence": 48,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "OXFOSTE1",
      "stop_name": "Oxford at Sterling EB - #1346",
      "stop_lat": 43.003347,
      "stop_lon": -81.226199,
      "stop_sequence": 15,
      "route_id": 104,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "OXFOSTE1",
      "stop_name": "Oxford at Sterling EB - #1346",
      "stop_lat": 43.003347,
      "stop_lon": -81.226199,
      "stop_sequence": 44,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "OXFOSTE2",
      "stop_name": "Oxford at Sterling WB - #1347",
      "stop_lat": 43.003349,
      "stop_lon": -81.226471,
      "stop_sequence": 11,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "OXFOSTRA",
      "stop_name": "Oxford at Strand EB - #1348",
      "stop_lat": 43.004494,
      "stop_lon": -81.222268,
      "stop_sequence": 17,
      "route_id": 104,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "OXFOSTRA",
      "stop_name": "Oxford at Strand EB - #1348",
      "stop_lat": 43.004494,
      "stop_lon": -81.222268,
      "stop_sequence": 46,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "OXFOSTUA",
      "stop_name": "Oxford at Stuart WB - #1349",
      "stop_lat": 43.004707,
      "stop_lon": -81.221764,
      "stop_sequence": 9,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "OXFOTAL1",
      "stop_name": "Oxford at Talbot EB - #1350",
      "stop_lat": 42.993941,
      "stop_lon": -81.258169,
      "stop_sequence": 32,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "OXFOTHI1",
      "stop_name": "Oxford at Third EB - #1352",
      "stop_lat": 43.013429,
      "stop_lon": -81.191453,
      "stop_sequence": 56,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "OXFOTHI1",
      "stop_name": "Oxford at Third EB - #1352",
      "stop_lat": 43.013429,
      "stop_lon": -81.191453,
      "stop_sequence": 3,
      "route_id": 36,
      "route_color": "B43D61"
    },
    {
      "stop_id": "OXFOWAT1",
      "stop_name": "Oxford at Waterloo EB - #1354",
      "stop_lat": 42.996846,
      "stop_lon": -81.248395,
      "stop_sequence": 7,
      "route_id": 104,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "OXFOWAT1",
      "stop_name": "Oxford at Waterloo EB - #1354",
      "stop_lat": 42.996846,
      "stop_lon": -81.248395,
      "stop_sequence": 36,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "OXFOWAT2",
      "stop_name": "Oxford at Waterloo WB - #1355",
      "stop_lat": 42.997142,
      "stop_lon": -81.247865,
      "stop_sequence": 19,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "OXFOWEL1",
      "stop_name": "Oxford at Wellington EB - #1356",
      "stop_lat": 42.996041,
      "stop_lon": -81.251186,
      "stop_sequence": 6,
      "route_id": 104,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "OXFOWEL1",
      "stop_name": "Oxford at Wellington EB - #1356",
      "stop_lat": 42.996041,
      "stop_lon": -81.251186,
      "stop_sequence": 35,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "OXFOWEL2",
      "stop_name": "Oxford at Wellington WB - #1357",
      "stop_lat": 42.996245,
      "stop_lon": -81.250872,
      "stop_sequence": 20,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "OXFOWHA1",
      "stop_name": "Oxford at Wharncliffe EB - #1358",
      "stop_lat": 42.992073,
      "stop_lon": -81.264464,
      "stop_sequence": 30,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "OXFOWHA1",
      "stop_name": "Oxford at Wharncliffe EB - #1358",
      "stop_lat": 42.992073,
      "stop_lon": -81.264464,
      "stop_sequence": 5,
      "route_id": 91,
      "route_color": "FF8000"
    },
    {
      "stop_id": "ALDESOCT",
      "stop_name": "Aldersbrook at Southcott Crt WB - #136",
      "stop_lat": 42.99338,
      "stop_lon": -81.307674,
      "stop_sequence": 10,
      "route_id": 31,
      "route_color": "00B700"
    },
    {
      "stop_id": "OXFOWIL1",
      "stop_name": "Oxford at William EB - #1360",
      "stop_lat": 42.9993,
      "stop_lon": -81.240156,
      "stop_sequence": 10,
      "route_id": 104,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "OXFOWIL1",
      "stop_name": "Oxford at William EB - #1360",
      "stop_lat": 42.9993,
      "stop_lon": -81.240156,
      "stop_sequence": 39,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "OXFOWIL2",
      "stop_name": "Oxford at William WB - #1361",
      "stop_lat": 42.999381,
      "stop_lon": -81.240321,
      "stop_sequence": 16,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "OXFOWIST",
      "stop_name": "Oxford at Wistow WB - #1362",
      "stop_lat": 43.00755,
      "stop_lon": -81.211851,
      "stop_sequence": 5,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "OXFOWON1",
      "stop_name": "Oxford at Wonderland EB - #1363",
      "stop_lat": 42.984173,
      "stop_lon": -81.29128,
      "stop_sequence": 23,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "OXFOWON1",
      "stop_name": "Oxford at Wonderland EB - #1363",
      "stop_lat": 42.984173,
      "stop_lon": -81.29128,
      "stop_sequence": 2,
      "route_id": 91,
      "route_color": "FF8000"
    },
    {
      "stop_id": "OXFOWON2",
      "stop_name": "Oxford at Wonderland WB - #1364",
      "stop_lat": 42.984031,
      "stop_lon": -81.292317,
      "stop_sequence": 2,
      "route_id": 33,
      "route_color": "BB77FF"
    },
    {
      "stop_id": "ALDESPR1",
      "stop_name": "Aldersbrook at Brandy Ln N Leg NB - #137",
      "stop_lat": 42.996819,
      "stop_lon": -81.314796,
      "stop_sequence": 13,
      "route_id": 31,
      "route_color": "00B700"
    },
    {
      "stop_id": "PARKMAEN",
      "stop_name": "Parkwood Hospital Main Entrance WB - #1373",
      "stop_lat": 42.956426,
      "stop_lon": -81.22502,
      "stop_sequence": 1,
      "route_id": "06",
      "route_color": "008080"
    },
    {
      "stop_id": "PERTWIN2",
      "stop_name": "Perth at Windermere SB - #1379",
      "stop_lat": 43.014975,
      "stop_lon": -81.275094,
      "stop_sequence": 34,
      "route_id": "06",
      "route_color": "008080"
    },
    {
      "stop_id": "PERTWIN2",
      "stop_name": "Perth at Windermere SB - #1379",
      "stop_lat": 43.014975,
      "stop_lon": -81.275094,
      "stop_sequence": 8,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "PERTWIN2",
      "stop_name": "Perth at Windermere SB - #1379",
      "stop_lat": 43.014975,
      "stop_lon": -81.275094,
      "stop_sequence": 36,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "PLATCHE1",
      "stop_name": "Platts Lane at Cherryhill Place NB - #1389",
      "stop_lat": 42.991765,
      "stop_lon": -81.272751,
      "stop_sequence": 14,
      "route_id": "09",
      "route_color": "B36666"
    },
    {
      "stop_id": "PLATOXF1",
      "stop_name": "Platts Lane at Oxford NB - #1391",
      "stop_lat": 42.990499,
      "stop_lon": -81.272074,
      "stop_sequence": 13,
      "route_id": "09",
      "route_color": "B36666"
    },
    {
      "stop_id": "PLATOXF2",
      "stop_name": "Platts Lane at Oxford SB - #1392",
      "stop_lat": 42.990316,
      "stop_lon": -81.272041,
      "stop_sequence": 26,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "PLATTRO1",
      "stop_name": "Platts Lane at Trott NB - #1393",
      "stop_lat": 42.995535,
      "stop_lon": -81.274696,
      "stop_sequence": 15,
      "route_id": "09",
      "route_color": "B36666"
    },
    {
      "stop_id": "PONDAILS",
      "stop_name": "Pond Mills at Ailsa SB - #1399",
      "stop_lat": 42.970378,
      "stop_lon": -81.204489,
      "stop_sequence": 52,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "PONDBAN2",
      "stop_name": "Pond Mills at Banbury SB - #1401",
      "stop_lat": 42.957486,
      "stop_lon": -81.199719,
      "stop_sequence": 8,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "PONDBAN2",
      "stop_name": "Pond Mills at Banbury SB - #1401",
      "stop_lat": 42.957486,
      "stop_lon": -81.199719,
      "stop_sequence": 44,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "PONDBRA2",
      "stop_name": "Pond Mills south of Bradley SB - #1402",
      "stop_lat": 42.940033,
      "stop_lon": -81.192238,
      "stop_sequence": 12,
      "route_id": 30,
      "route_color": "CF2985"
    },
    {
      "stop_id": "PONDBUC4",
      "stop_name": "Pond Mills at Buchanan SB - #1405",
      "stop_lat": 42.935958,
      "stop_lon": -81.191411,
      "stop_sequence": 14,
      "route_id": 30,
      "route_color": "CF2985"
    },
    {
      "stop_id": "PONDCLE2",
      "stop_name": "Pond Mills at Cleveland SB - #1408",
      "stop_lat": 42.967599,
      "stop_lon": -81.202236,
      "stop_sequence": 53,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "ALUMHAL1",
      "stop_name": "Alumni Hall EB - #141",
      "stop_lat": 43.006041,
      "stop_lon": -81.274944,
      "stop_sequence": 69,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "PONDDEV2",
      "stop_name": "Pond Mills north of Deveron SB - #1410",
      "stop_lat": 42.960494,
      "stop_lon": -81.200409,
      "stop_sequence": 7,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "PONDDEV4",
      "stop_name": "Pond Mills south of Deveron SB - #1411",
      "stop_lat": 42.955138,
      "stop_lon": -81.198965,
      "stop_sequence": 9,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "PONDENT2",
      "stop_name": "Pond Mills at Enterprise SB - #1413",
      "stop_lat": 42.932011,
      "stop_lon": -81.191569,
      "stop_sequence": 15,
      "route_id": 30,
      "route_color": "CF2985"
    },
    {
      "stop_id": "PONDMILL",
      "stop_name": "Pond Mills at Millers SB - #1414",
      "stop_lat": 42.949311,
      "stop_lon": -81.195525,
      "stop_sequence": 12,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "PONDMIR2",
      "stop_name": "Pond Mills at Millridge SB - #1416",
      "stop_lat": 42.950517,
      "stop_lon": -81.196272,
      "stop_sequence": 11,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "PONDMIR4",
      "stop_name": "492 Pond Mills - #1418",
      "stop_lat": 42.953053,
      "stop_lon": -81.196603,
      "stop_sequence": 10,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "ALUMHAL2",
      "stop_name": "Alumni Hall WB - #142",
      "stop_lat": 43.006319,
      "stop_lon": -81.275351,
      "stop_sequence": 1,
      "route_id": 31,
      "route_color": "00B700"
    },
    {
      "stop_id": "PROUBEA1",
      "stop_name": "Proudfoot at Beaverbrook EB - #1423",
      "stop_lat": 42.984089,
      "stop_lon": -81.281458,
      "stop_sequence": 19,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "PROUBEA3",
      "stop_name": "Proudfoot at Beaverbrook SB - #1425",
      "stop_lat": 42.989486,
      "stop_lon": -81.290155,
      "stop_sequence": 15,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "PROUFAR2",
      "stop_name": "Proudfoot at Farrah SB - #1428",
      "stop_lat": 42.98627,
      "stop_lon": -81.288546,
      "stop_sequence": 16,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "PROUOXF2",
      "stop_name": "Proudfoot at Oxford SB - #1431",
      "stop_lat": 42.984805,
      "stop_lon": -81.287837,
      "stop_sequence": 17,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "QUEBDUND",
      "stop_name": "Quebec at Dundas NB - #1435",
      "stop_lat": 42.992891,
      "stop_lon": -81.219093,
      "stop_sequence": 47,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "QUEBELI1",
      "stop_name": "Quebec at Elias NB - #1436",
      "stop_lat": 42.997177,
      "stop_lon": -81.221188,
      "stop_sequence": 50,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "QUEBLOR1",
      "stop_name": "Quebec at Lorne NB - #1438",
      "stop_lat": 42.995928,
      "stop_lon": -81.220581,
      "stop_sequence": 49,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "QUEBQUEE",
      "stop_name": "Quebec at Queens NB - #1441",
      "stop_lat": 42.993921,
      "stop_lon": -81.219616,
      "stop_sequence": 48,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "QUEECLAR",
      "stop_name": "Queens at Clarence WB - #1442",
      "stop_lat": 42.98586,
      "stop_lon": -81.247506,
      "stop_sequence": 40,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "QUEECLAR",
      "stop_name": "Queens at Clarence WB - #1442",
      "stop_lat": 42.98586,
      "stop_lon": -81.247506,
      "stop_sequence": 41,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "QUEECLAR",
      "stop_name": "Queens at Clarence WB - #1442",
      "stop_lat": 42.98586,
      "stop_lon": -81.247506,
      "stop_sequence": 3,
      "route_id": "09",
      "route_color": "B36666"
    },
    {
      "stop_id": "QUEECLAR",
      "stop_name": "Queens at Clarence WB - #1442",
      "stop_lat": 42.98586,
      "stop_lon": -81.247506,
      "stop_sequence": 22,
      "route_id": 102,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "QUEECLAR",
      "stop_name": "Queens at Clarence WB - #1442",
      "stop_lat": 42.98586,
      "stop_lon": -81.247506,
      "stop_sequence": 2,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "QUENRIDO",
      "stop_name": "Queens at Ridout WB - #1443",
      "stop_lat": 42.98368,
      "stop_lon": -81.254207,
      "stop_sequence": 6,
      "route_id": "09",
      "route_color": "B36666"
    },
    {
      "stop_id": "QUENRIDO",
      "stop_name": "Queens at Ridout WB - #1443",
      "stop_lat": 42.98368,
      "stop_lon": -81.254207,
      "stop_sequence": 3,
      "route_id": 12,
      "route_color": "CA95FF"
    },
    {
      "stop_id": "QUENRIDO",
      "stop_name": "Queens at Ridout WB - #1443",
      "stop_lat": 42.98368,
      "stop_lon": -81.254207,
      "stop_sequence": 5,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "AMBLGRA2",
      "stop_name": "Ambleside at Grasmere Cres WB - #145",
      "stop_lat": 43.016358,
      "stop_lon": -81.285108,
      "stop_sequence": 42,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "REARROTH",
      "stop_name": "Reardon at Rothwell WB - #1454",
      "stop_lat": 42.962015,
      "stop_lon": -81.176893,
      "stop_sequence": 6,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "REGEMAIT",
      "stop_name": "Regent at Maitland WB - #1455",
      "stop_lat": 43.008797,
      "stop_lon": -81.247692,
      "stop_sequence": 20,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "RICHCENT",
      "stop_name": "Richmond at Central SB - #1463",
      "stop_lat": 42.990176,
      "stop_lon": -81.250873,
      "stop_sequence": 23,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "RICHCENT",
      "stop_name": "Richmond at Central SB - #1463",
      "stop_lat": 42.990176,
      "stop_lon": -81.250873,
      "stop_sequence": 15,
      "route_id": 102,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "RICHCENT",
      "stop_name": "Richmond at Central SB - #1463",
      "stop_lat": 42.990176,
      "stop_lon": -81.250873,
      "stop_sequence": 20,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "RICHCENT",
      "stop_name": "Richmond at Central SB - #1463",
      "stop_lat": 42.990176,
      "stop_lon": -81.250873,
      "stop_sequence": 32,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "RICHCHE1",
      "stop_name": "Richmond at Cheapside NB - #1464",
      "stop_lat": 43.001527,
      "stop_lon": -81.256205,
      "stop_sequence": 26,
      "route_id": "06",
      "route_color": "008080"
    },
    {
      "stop_id": "RICHCHE1",
      "stop_name": "Richmond at Cheapside NB - #1464",
      "stop_lat": 43.001527,
      "stop_lon": -81.256205,
      "stop_sequence": 8,
      "route_id": 106,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "RICHCHE2",
      "stop_name": "Richmond at Cheapside SB - #1465",
      "stop_lat": 43.001785,
      "stop_lon": -81.25651,
      "stop_sequence": 10,
      "route_id": 102,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "RICHCHE2",
      "stop_name": "Richmond at Cheapside SB - #1465",
      "stop_lat": 43.001785,
      "stop_lon": -81.25651,
      "stop_sequence": 15,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "RICHDUF2",
      "stop_name": "Richmond at Dufferin SB - #1467",
      "stop_lat": 42.986306,
      "stop_lon": -81.250755,
      "stop_sequence": 25,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "RICHDUF2",
      "stop_name": "Richmond at Dufferin SB - #1467",
      "stop_lat": 42.986306,
      "stop_lon": -81.250755,
      "stop_sequence": 17,
      "route_id": 102,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "RICHDUF2",
      "stop_name": "Richmond at Dufferin SB - #1467",
      "stop_lat": 42.986306,
      "stop_lon": -81.250755,
      "stop_sequence": 22,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "RICHDUF2",
      "stop_name": "Richmond at Dufferin SB - #1467",
      "stop_lat": 42.986306,
      "stop_lon": -81.250755,
      "stop_sequence": 34,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "AMBLHILL",
      "stop_name": "Ambleside at Hillside WB - #147",
      "stop_lat": 43.017645,
      "stop_lon": -81.280695,
      "stop_sequence": 41,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "RICHGRO1",
      "stop_name": "Richmond at Grosvenor NB - #1476",
      "stop_lat": 43.000039,
      "stop_lon": -81.255383,
      "stop_sequence": 25,
      "route_id": "06",
      "route_color": "008080"
    },
    {
      "stop_id": "RICHGRO1",
      "stop_name": "Richmond at Grosvenor NB - #1476",
      "stop_lat": 43.000039,
      "stop_lon": -81.255383,
      "stop_sequence": 7,
      "route_id": 106,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "RICHGRO2",
      "stop_name": "Richmond at Grosvenor SB - #1477",
      "stop_lat": 42.999325,
      "stop_lon": -81.255246,
      "stop_sequence": 11,
      "route_id": 102,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "RICHGRO2",
      "stop_name": "Richmond at Grosvenor SB - #1477",
      "stop_lat": 42.999325,
      "stop_lon": -81.255246,
      "stop_sequence": 16,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "RICHGRO2",
      "stop_name": "Richmond at Grosvenor SB - #1477",
      "stop_lat": 42.999325,
      "stop_lon": -81.255246,
      "stop_sequence": 28,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "RICHGRO2",
      "stop_name": "Richmond at Grosvenor SB - #1477",
      "stop_lat": 42.999325,
      "stop_lon": -81.255246,
      "stop_sequence": 4,
      "route_id": 90,
      "route_color": "FF8A15"
    },
    {
      "stop_id": "RICHHOT3",
      "stop_name": "Richmond south Horton NB - #1480",
      "stop_lat": 42.978707,
      "stop_lon": -81.247083,
      "stop_sequence": 17,
      "route_id": "06",
      "route_color": "008080"
    },
    {
      "stop_id": "RICHHUR1",
      "stop_name": "Richmond at Huron NB - #1481",
      "stop_lat": 43.007342,
      "stop_lon": -81.259406,
      "stop_sequence": 29,
      "route_id": "06",
      "route_color": "008080"
    },
    {
      "stop_id": "RICHHUR1",
      "stop_name": "Richmond at Huron NB - #1481",
      "stop_lat": 43.007342,
      "stop_lon": -81.259406,
      "stop_sequence": 11,
      "route_id": 106,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "RICHHUR2",
      "stop_name": "Richmond at Huron SB - #1482",
      "stop_lat": 43.007167,
      "stop_lon": -81.259424,
      "stop_sequence": 8,
      "route_id": 102,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "RICHHUR2",
      "stop_name": "Richmond at Huron SB - #1482",
      "stop_lat": 43.007167,
      "stop_lon": -81.259424,
      "stop_sequence": 13,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "RICHHYM1",
      "stop_name": "Richmond at Hyman NB - #1483",
      "stop_lat": 42.991222,
      "stop_lon": -81.250886,
      "stop_sequence": 21,
      "route_id": "06",
      "route_color": "008080"
    },
    {
      "stop_id": "RICHHYM1",
      "stop_name": "Richmond at Hyman NB - #1483",
      "stop_lat": 42.991222,
      "stop_lon": -81.250886,
      "stop_sequence": 3,
      "route_id": 104,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "RICHHYM1",
      "stop_name": "Richmond at Hyman NB - #1483",
      "stop_lat": 42.991222,
      "stop_lon": -81.250886,
      "stop_sequence": 3,
      "route_id": 106,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "RICHJACK",
      "stop_name": "Richmond at Jacksway SB - #1485",
      "stop_lat": 43.023201,
      "stop_lon": -81.28093,
      "stop_sequence": 2,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "RICHJAM1",
      "stop_name": "Richmond at St. James NB - #1486",
      "stop_lat": 42.997499,
      "stop_lon": -81.254137,
      "stop_sequence": 24,
      "route_id": "06",
      "route_color": "008080"
    },
    {
      "stop_id": "RICHJAM1",
      "stop_name": "Richmond at St. James NB - #1486",
      "stop_lat": 42.997499,
      "stop_lon": -81.254137,
      "stop_sequence": 6,
      "route_id": 106,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "RICHJAM2",
      "stop_name": "Richmond at St. James SB - #1487",
      "stop_lat": 42.997724,
      "stop_lon": -81.254361,
      "stop_sequence": 12,
      "route_id": 102,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "RICHJAM2",
      "stop_name": "Richmond at St. James SB - #1487",
      "stop_lat": 42.997724,
      "stop_lon": -81.254361,
      "stop_sequence": 17,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "RICHJAM2",
      "stop_name": "Richmond at St. James SB - #1487",
      "stop_lat": 42.997724,
      "stop_lon": -81.254361,
      "stop_sequence": 29,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "RICHKEN1",
      "stop_name": "Richmond at Kent NB - #1488",
      "stop_lat": 42.988374,
      "stop_lon": -81.250678,
      "stop_sequence": 20,
      "route_id": "06",
      "route_color": "008080"
    },
    {
      "stop_id": "RICHKEN1",
      "stop_name": "Richmond at Kent NB - #1488",
      "stop_lat": 42.988374,
      "stop_lon": -81.250678,
      "stop_sequence": 2,
      "route_id": 104,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "RICHKEN1",
      "stop_name": "Richmond at Kent NB - #1488",
      "stop_lat": 42.988374,
      "stop_lon": -81.250678,
      "stop_sequence": 2,
      "route_id": 106,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "RICHKEN2",
      "stop_name": "Richmond at Kent SB - #1489",
      "stop_lat": 42.988156,
      "stop_lon": -81.250752,
      "stop_sequence": 24,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "RICHKEN2",
      "stop_name": "Richmond at Kent SB - #1489",
      "stop_lat": 42.988156,
      "stop_lon": -81.250752,
      "stop_sequence": 16,
      "route_id": 102,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "RICHKEN2",
      "stop_name": "Richmond at Kent SB - #1489",
      "stop_lat": 42.988156,
      "stop_lon": -81.250752,
      "stop_sequence": 21,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "RICHKEN2",
      "stop_name": "Richmond at Kent SB - #1489",
      "stop_lat": 42.988156,
      "stop_lon": -81.250752,
      "stop_sequence": 33,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "AMBLWHI1",
      "stop_name": "Ambleside at Whitehaven WB - #149",
      "stop_lat": 43.019798,
      "stop_lon": -81.292995,
      "stop_sequence": 44,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "RICHKIN1",
      "stop_name": "Richmond at King NB - #1490",
      "stop_lat": 42.98234,
      "stop_lon": -81.2489,
      "stop_sequence": 18,
      "route_id": "06",
      "route_color": "008080"
    },
    {
      "stop_id": "RICHMILL",
      "stop_name": "Richmond at Mill SB - #1493",
      "stop_lat": 42.992941,
      "stop_lon": -81.251948,
      "stop_sequence": 22,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "RICHMILL",
      "stop_name": "Richmond at Mill SB - #1493",
      "stop_lat": 42.992941,
      "stop_lon": -81.251948,
      "stop_sequence": 14,
      "route_id": 102,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "RICHMILL",
      "stop_name": "Richmond at Mill SB - #1493",
      "stop_lat": 42.992941,
      "stop_lon": -81.251948,
      "stop_sequence": 19,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "RICHMILL",
      "stop_name": "Richmond at Mill SB - #1493",
      "stop_lat": 42.992941,
      "stop_lon": -81.251948,
      "stop_sequence": 31,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "RICHOXF1",
      "stop_name": "Richmond at Oxford NB - #1494",
      "stop_lat": 42.995977,
      "stop_lon": -81.253301,
      "stop_sequence": 23,
      "route_id": "06",
      "route_color": "008080"
    },
    {
      "stop_id": "RICHOXF1",
      "stop_name": "Richmond at Oxford NB - #1494",
      "stop_lat": 42.995977,
      "stop_lon": -81.253301,
      "stop_sequence": 5,
      "route_id": 106,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "RICHOXF2",
      "stop_name": "Richmond at Oxford SB - #1495",
      "stop_lat": 42.994909,
      "stop_lon": -81.252915,
      "stop_sequence": 21,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "RICHOXF2",
      "stop_name": "Richmond at Oxford SB - #1495",
      "stop_lat": 42.994909,
      "stop_lon": -81.252915,
      "stop_sequence": 13,
      "route_id": 102,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "RICHOXF2",
      "stop_name": "Richmond at Oxford SB - #1495",
      "stop_lat": 42.994909,
      "stop_lon": -81.252915,
      "stop_sequence": 18,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "RICHOXF2",
      "stop_name": "Richmond at Oxford SB - #1495",
      "stop_lat": 42.994909,
      "stop_lon": -81.252915,
      "stop_sequence": 30,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "RICHOXF2",
      "stop_name": "Richmond at Oxford SB - #1495",
      "stop_lat": 42.994909,
      "stop_lon": -81.252915,
      "stop_sequence": 5,
      "route_id": 90,
      "route_color": "FF8A15"
    },
    {
      "stop_id": "RICHPALL",
      "stop_name": "Richmond at Pall Mall NB - #1496",
      "stop_lat": 42.992773,
      "stop_lon": -81.251649,
      "stop_sequence": 22,
      "route_id": "06",
      "route_color": "008080"
    },
    {
      "stop_id": "RICHPALL",
      "stop_name": "Richmond at Pall Mall NB - #1496",
      "stop_lat": 42.992773,
      "stop_lon": -81.251649,
      "stop_sequence": 4,
      "route_id": 104,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "RICHPALL",
      "stop_name": "Richmond at Pall Mall NB - #1496",
      "stop_lat": 42.992773,
      "stop_lon": -81.251649,
      "stop_sequence": 4,
      "route_id": 106,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "RICHPAR2",
      "stop_name": "Richmond at Parkdale Ave SB - #1497",
      "stop_lat": 43.011195,
      "stop_lon": -81.263629,
      "stop_sequence": 6,
      "route_id": 102,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "AMBLWHI2",
      "stop_name": "286 Ambleside - #150",
      "stop_lat": 43.021005,
      "stop_lon": -81.294306,
      "stop_sequence": 45,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "RICHQUEE",
      "stop_name": "Richmond at Queens NB - #1501",
      "stop_lat": 42.985456,
      "stop_lon": -81.250388,
      "stop_sequence": 19,
      "route_id": "06",
      "route_color": "008080"
    },
    {
      "stop_id": "RICHQUEE",
      "stop_name": "Richmond at Queens NB - #1501",
      "stop_lat": 42.985456,
      "stop_lon": -81.250388,
      "stop_sequence": 1,
      "route_id": 104,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "RICHQUEE",
      "stop_name": "Richmond at Queens NB - #1501",
      "stop_lat": 42.985456,
      "stop_lon": -81.250388,
      "stop_sequence": 1,
      "route_id": 106,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "RICHRAY1",
      "stop_name": "Richmond north of Raymond NB - #1502",
      "stop_lat": 43.013188,
      "stop_lon": -81.265588,
      "stop_sequence": 32,
      "route_id": "06",
      "route_color": "008080"
    },
    {
      "stop_id": "RICHRAY2",
      "stop_name": "Richmond north of Raymond SB - #1503",
      "stop_lat": 43.012999,
      "stop_lon": -81.26554,
      "stop_sequence": 5,
      "route_id": 102,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "RICHREG1",
      "stop_name": "Richmond at Regent NB - #1506",
      "stop_lat": 43.005693,
      "stop_lon": -81.25836,
      "stop_sequence": 28,
      "route_id": "06",
      "route_color": "008080"
    },
    {
      "stop_id": "RICHREG1",
      "stop_name": "Richmond at Regent NB - #1506",
      "stop_lat": 43.005693,
      "stop_lon": -81.25836,
      "stop_sequence": 10,
      "route_id": 106,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "RICHSHAV",
      "stop_name": "Richmond at Shavian SB - #1508",
      "stop_lat": 43.021409,
      "stop_lon": -81.279995,
      "stop_sequence": 3,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "RICHSIM1",
      "stop_name": "Richmond at Simcoe NB - #1509",
      "stop_lat": 42.977308,
      "stop_lon": -81.246413,
      "stop_sequence": 16,
      "route_id": "06",
      "route_color": "008080"
    },
    {
      "stop_id": "RICHUNI1",
      "stop_name": "Richmond at University NB - #1512",
      "stop_lat": 43.008865,
      "stop_lon": -81.261028,
      "stop_sequence": 30,
      "route_id": "06",
      "route_color": "008080"
    },
    {
      "stop_id": "RICHUNI2",
      "stop_name": "Richmond at University SB - #1513",
      "stop_lat": 43.009232,
      "stop_lon": -81.261626,
      "stop_sequence": 7,
      "route_id": 102,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "RICHUNI2",
      "stop_name": "Richmond at University SB - #1513",
      "stop_lat": 43.009232,
      "stop_lon": -81.261626,
      "stop_sequence": 3,
      "route_id": 90,
      "route_color": "FF8A15"
    },
    {
      "stop_id": "RICHVIC1",
      "stop_name": "Richmond at Victoria NB - #1514",
      "stop_lat": 43.003609,
      "stop_lon": -81.257279,
      "stop_sequence": 27,
      "route_id": "06",
      "route_color": "008080"
    },
    {
      "stop_id": "RICHVIC1",
      "stop_name": "Richmond at Victoria NB - #1514",
      "stop_lat": 43.003609,
      "stop_lon": -81.257279,
      "stop_sequence": 9,
      "route_id": 106,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "RICHVIC2",
      "stop_name": "Richmond at Victoria SB - #1515",
      "stop_lat": 43.003846,
      "stop_lon": -81.257557,
      "stop_sequence": 9,
      "route_id": 102,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "RICHVIC2",
      "stop_name": "Richmond at Victoria SB - #1515",
      "stop_lat": 43.003846,
      "stop_lon": -81.257557,
      "stop_sequence": 14,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "RICHWES2",
      "stop_name": "Richmond at Western SB - #1518",
      "stop_lat": 43.019685,
      "stop_lon": -81.278143,
      "stop_sequence": 4,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "RICHWES4",
      "stop_name": "1548 Richmond - #1519",
      "stop_lat": 43.018984,
      "stop_lon": -81.276938,
      "stop_sequence": 5,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "RICHWIN2",
      "stop_name": "Richmond at Windermere SB - #1521",
      "stop_lat": 43.015204,
      "stop_lon": -81.270279,
      "stop_sequence": 2,
      "route_id": 90,
      "route_color": "FF8A15"
    },
    {
      "stop_id": "RICHWYND",
      "stop_name": "Richmond at Wyndham Gate SB - #1523",
      "stop_lat": 43.017966,
      "stop_lon": -81.275139,
      "stop_sequence": 6,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "RIDOBAS2",
      "stop_name": "Ridout at Baseline SB - #1533",
      "stop_lat": 42.961246,
      "stop_lon": -81.243171,
      "stop_sequence": 36,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "RIDOCRA2",
      "stop_name": "Ridout at Craig SB - #1538",
      "stop_lat": 42.974335,
      "stop_lon": -81.249832,
      "stop_sequence": 30,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "RIDOCRA2",
      "stop_name": "Ridout at Craig SB - #1538",
      "stop_lat": 42.974335,
      "stop_lon": -81.249832,
      "stop_sequence": 39,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "RIDOELMW",
      "stop_name": "Ridout at Elmwood SB - #1539",
      "stop_lat": 42.972601,
      "stop_lon": -81.248939,
      "stop_sequence": 31,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "RIDOELMW",
      "stop_name": "Ridout at Elmwood SB - #1539",
      "stop_lat": 42.972601,
      "stop_lon": -81.248939,
      "stop_sequence": 40,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "RIDOEME2",
      "stop_name": "Ridout at Emery SB - #1541",
      "stop_lat": 42.965227,
      "stop_lon": -81.245179,
      "stop_sequence": 34,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "RIDOHORT",
      "stop_name": "Ridout at Horton SB - #1546",
      "stop_lat": 42.977359,
      "stop_lon": -81.251468,
      "stop_sequence": 29,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "RIDOHORT",
      "stop_name": "Ridout at Horton SB - #1546",
      "stop_lat": 42.977359,
      "stop_lon": -81.251468,
      "stop_sequence": 38,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "RIDOKING",
      "stop_name": "Ridout at King SB - #1549",
      "stop_lat": 42.982047,
      "stop_lon": -81.253855,
      "stop_sequence": 44,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "ANDOCOM2",
      "stop_name": "Andover at Commissioners SB - #155",
      "stop_lat": 42.955721,
      "stop_lon": -81.275497,
      "stop_sequence": 54,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "RIDOMOU2",
      "stop_name": "Ridout at Mountsfiled SB - #1553",
      "stop_lat": 42.959504,
      "stop_lon": -81.242285,
      "stop_sequence": 37,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "RIDOROSE",
      "stop_name": "Ridout at Rosel SB - #1554",
      "stop_lat": 42.962909,
      "stop_lon": -81.244023,
      "stop_sequence": 35,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "RIDOTEC2",
      "stop_name": "Ridout at Tecumseh SB - #1556",
      "stop_lat": 42.969589,
      "stop_lon": -81.247432,
      "stop_sequence": 32,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "RIDOWINS",
      "stop_name": "Ridout at Windsor SB - #1557",
      "stop_lat": 42.967104,
      "stop_lon": -81.246159,
      "stop_sequence": 33,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "RIDOYORK",
      "stop_name": "Ridout at York SB - #1558",
      "stop_lat": 42.980443,
      "stop_lon": -81.253033,
      "stop_sequence": 45,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "ANDOELMG",
      "stop_name": "Andover at Elmgrove Cr SB - #156",
      "stop_lat": 42.951688,
      "stop_lon": -81.275511,
      "stop_sequence": 56,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "RIVEANT1",
      "stop_name": "Riverside at St. Anthony EB - #1562",
      "stop_lat": 42.962403,
      "stop_lon": -81.323363,
      "stop_sequence": 11,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "RIVEBEA2",
      "stop_name": "Riverside east of Beaverbrook WB - #1565",
      "stop_lat": 42.981044,
      "stop_lon": -81.276047,
      "stop_sequence": 11,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "RIVEBEA4",
      "stop_name": "Riverside west of Beaverbrook WB - #1566",
      "stop_lat": 42.980225,
      "stop_lon": -81.277985,
      "stop_sequence": 12,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "RIVEBRE2",
      "stop_name": "Riverside at Braemar WB - #1568",
      "stop_lat": 42.977418,
      "stop_lon": -81.286814,
      "stop_sequence": 14,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "RIVEBRIT",
      "stop_name": "Riverside at Britannia WB - #1569",
      "stop_lat": 42.982751,
      "stop_lon": -81.271188,
      "stop_sequence": 10,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "RIVECAVE",
      "stop_name": "Riverside at Cavendish EB - #1570",
      "stop_lat": 42.982955,
      "stop_lon": -81.26652,
      "stop_sequence": 31,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "RIVEHAR1",
      "stop_name": "Riverside at Hartson east EB - #1581",
      "stop_lat": 42.962934,
      "stop_lon": -81.318488,
      "stop_sequence": 12,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "RIVEHAR3",
      "stop_name": "Riverside at Hartson west EB - #1583",
      "stop_lat": 42.962989,
      "stop_lon": -81.326031,
      "stop_sequence": 10,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "RIVEMTPL",
      "stop_name": "Riverside at Mt. Pleasant  WB - #1587",
      "stop_lat": 42.983125,
      "stop_lon": -81.26699,
      "stop_sequence": 9,
      "route_id": "09",
      "route_color": "B36666"
    },
    {
      "stop_id": "RIVEMTPL",
      "stop_name": "Riverside at Mt. Pleasant  WB - #1587",
      "stop_lat": 42.983125,
      "stop_lon": -81.26699,
      "stop_sequence": 8,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "RIVEORI2",
      "stop_name": "Riverside at Old Riverside WB - #1590",
      "stop_lat": 42.978628,
      "stop_lon": -81.283336,
      "stop_sequence": 13,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "RIVESAN1",
      "stop_name": "Riverside at Sanatorium EB - #1592",
      "stop_lat": 42.963646,
      "stop_lon": -81.329265,
      "stop_sequence": 9,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "RIVEWHA1",
      "stop_name": "Riverside at Wharncliffe EB - #1600",
      "stop_lat": 42.982759,
      "stop_lon": -81.26198,
      "stop_sequence": 13,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "RIVEWHA1",
      "stop_name": "Riverside at Wharncliffe EB - #1600",
      "stop_lat": 42.982759,
      "stop_lon": -81.26198,
      "stop_sequence": 32,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "RIVEWHA1",
      "stop_name": "Riverside at Wharncliffe EB - #1600",
      "stop_lat": 42.982759,
      "stop_lon": -81.26198,
      "stop_sequence": 5,
      "route_id": 94,
      "route_color": "FF8000"
    },
    {
      "stop_id": "RIVEWHA4",
      "stop_name": "Riverside West of Wharncliffe WB - #1601",
      "stop_lat": 42.983051,
      "stop_lon": -81.263566,
      "stop_sequence": 8,
      "route_id": "09",
      "route_color": "B36666"
    },
    {
      "stop_id": "RIVEWHA4",
      "stop_name": "Riverside West of Wharncliffe WB - #1601",
      "stop_lat": 42.983051,
      "stop_lon": -81.263566,
      "stop_sequence": 7,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "RIVEWIL1",
      "stop_name": "Riverside at Wilson EB - #1602",
      "stop_lat": 42.982691,
      "stop_lon": -81.25983,
      "stop_sequence": 14,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "RIVEWIL1",
      "stop_name": "Riverside at Wilson EB - #1602",
      "stop_lat": 42.982691,
      "stop_lon": -81.25983,
      "stop_sequence": 33,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "RIVEWIL2",
      "stop_name": "Riverside at Wilson WB - #1603",
      "stop_lat": 42.982815,
      "stop_lon": -81.259629,
      "stop_sequence": 7,
      "route_id": "09",
      "route_color": "B36666"
    },
    {
      "stop_id": "RIVEWIL2",
      "stop_name": "Riverside at Wilson WB - #1603",
      "stop_lat": 42.982815,
      "stop_lon": -81.259629,
      "stop_sequence": 4,
      "route_id": 12,
      "route_color": "CA95FF"
    },
    {
      "stop_id": "RIVEWIL2",
      "stop_name": "Riverside at Wilson WB - #1603",
      "stop_lat": 42.982815,
      "stop_lon": -81.259629,
      "stop_sequence": 6,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "RIVEWOO1",
      "stop_name": "Riverside at Woodward EB - #1606",
      "stop_lat": 42.982944,
      "stop_lon": -81.268758,
      "stop_sequence": 30,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "RIVEWOO2",
      "stop_name": "Riverside at Woodward WB - #1607",
      "stop_lat": 42.983031,
      "stop_lon": -81.269268,
      "stop_sequence": 9,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "ROYACAS1",
      "stop_name": "Royal at Castle EB - #1609",
      "stop_lat": 42.998691,
      "stop_lon": -81.169127,
      "stop_sequence": 5,
      "route_id": 35,
      "route_color": "DBC004"
    },
    {
      "stop_id": "ANDOVIG2",
      "stop_name": "Andover at Village Green SB - #161",
      "stop_lat": 42.95356,
      "stop_lon": -81.275802,
      "stop_sequence": 55,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "SALIQUEB",
      "stop_name": "Salisbury at Quebec EB - #1617",
      "stop_lat": 42.999937,
      "stop_lon": -81.222027,
      "stop_sequence": 51,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "SANDBEC1",
      "stop_name": "Sandford at Beckworth NB - #1618",
      "stop_lat": 43.020779,
      "stop_lon": -81.203558,
      "stop_sequence": 4,
      "route_id": 25,
      "route_color": "DFDF00"
    },
    {
      "stop_id": "SANDBEC1",
      "stop_name": "Sandford at Beckworth NB - #1618",
      "stop_lat": 43.020779,
      "stop_lon": -81.203558,
      "stop_sequence": 4,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "SANDBENT",
      "stop_name": "Sandford at Bentley SB - #1620",
      "stop_lat": 43.026168,
      "stop_lon": -81.2047,
      "stop_sequence": 7,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "SANDHUR1",
      "stop_name": "Sandford at Huron NB - #1623",
      "stop_lat": 43.022057,
      "stop_lon": -81.204205,
      "stop_sequence": 5,
      "route_id": 25,
      "route_color": "DFDF00"
    },
    {
      "stop_id": "SANDHUR1",
      "stop_name": "Sandford at Huron NB - #1623",
      "stop_lat": 43.022057,
      "stop_lon": -81.204205,
      "stop_sequence": 5,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "SANDHUR2",
      "stop_name": "Sandford North of Huron SB - #1624",
      "stop_lat": 43.023417,
      "stop_lon": -81.204959,
      "stop_sequence": 8,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "SANDVER1",
      "stop_name": "Sandringham at Verulam EB - #1625",
      "stop_lat": 42.9482,
      "stop_lon": -81.23162,
      "stop_sequence": 44,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "SANDWIL2",
      "stop_name": "Sandringham at Wilkins SB - #1627",
      "stop_lat": 42.948826,
      "stop_lon": -81.234216,
      "stop_sequence": 43,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "ANDOVIS2",
      "stop_name": "Andover at Viscount SB - #163",
      "stop_lat": 42.948172,
      "stop_lon": -81.275288,
      "stop_sequence": 57,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "SARNALD2",
      "stop_name": "Sarnia at Aldersbrook WB - #1636",
      "stop_lat": 42.993911,
      "stop_lon": -81.30438,
      "stop_sequence": 9,
      "route_id": 31,
      "route_color": "00B700"
    },
    {
      "stop_id": "SARNBRES",
      "stop_name": "Sarnia at Brescia Lane WB - #1637",
      "stop_lat": 43.000384,
      "stop_lon": -81.282356,
      "stop_sequence": 18,
      "route_id": "09",
      "route_color": "B36666"
    },
    {
      "stop_id": "SARNBRES",
      "stop_name": "Sarnia at Brescia Lane WB - #1637",
      "stop_lat": 43.000384,
      "stop_lon": -81.282356,
      "stop_sequence": 31,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "SARNBRES",
      "stop_name": "Sarnia at Brescia Lane WB - #1637",
      "stop_lat": 43.000384,
      "stop_lon": -81.282356,
      "stop_sequence": 4,
      "route_id": 31,
      "route_color": "00B700"
    },
    {
      "stop_id": "SARNCAS1",
      "stop_name": "Sarnia at Wonderland EB - #1638",
      "stop_lat": 42.995637,
      "stop_lon": -81.297882,
      "stop_sequence": 63,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "SARNCAS3",
      "stop_name": "Sarnia at Castlegrove Blvd  2 EB - #1639",
      "stop_lat": 42.998833,
      "stop_lon": -81.287041,
      "stop_sequence": 65,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "SARNCOOM",
      "stop_name": "Sarnia at Coombs EB - #1640",
      "stop_lat": 43.000373,
      "stop_lon": -81.281972,
      "stop_sequence": 66,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "SARNLEYT",
      "stop_name": "Sarnia at Leyton WB - #1641",
      "stop_lat": 42.997241,
      "stop_lon": -81.293041,
      "stop_sequence": 20,
      "route_id": "09",
      "route_color": "B36666"
    },
    {
      "stop_id": "SARNLEYT",
      "stop_name": "Sarnia at Leyton WB - #1641",
      "stop_lat": 42.997241,
      "stop_lon": -81.293041,
      "stop_sequence": 33,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "SARNLEYT",
      "stop_name": "Sarnia at Leyton WB - #1641",
      "stop_lat": 42.997241,
      "stop_lon": -81.293041,
      "stop_sequence": 6,
      "route_id": 31,
      "route_color": "00B700"
    },
    {
      "stop_id": "SARNRIPP",
      "stop_name": "Sarnia at Rippleton Ave EB - #1643",
      "stop_lat": 42.997194,
      "stop_lon": -81.292838,
      "stop_sequence": 64,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "SARNSLEI",
      "stop_name": "Sarnia at Sleightholme WB - #1644",
      "stop_lat": 42.998918,
      "stop_lon": -81.287283,
      "stop_sequence": 19,
      "route_id": "09",
      "route_color": "B36666"
    },
    {
      "stop_id": "SARNSLEI",
      "stop_name": "Sarnia at Sleightholme WB - #1644",
      "stop_lat": 42.998918,
      "stop_lon": -81.287283,
      "stop_sequence": 32,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "SARNSLEI",
      "stop_name": "Sarnia at Sleightholme WB - #1644",
      "stop_lat": 42.998918,
      "stop_lon": -81.287283,
      "stop_sequence": 5,
      "route_id": 31,
      "route_color": "00B700"
    },
    {
      "stop_id": "SARNTHIS",
      "stop_name": "Sarnia at Thistledown Way WB - #1645",
      "stop_lat": 42.994976,
      "stop_lon": -81.300882,
      "stop_sequence": 8,
      "route_id": 31,
      "route_color": "00B700"
    },
    {
      "stop_id": "SARNWES1",
      "stop_name": "Sarnia at Western EB - #1646",
      "stop_lat": 43.001328,
      "stop_lon": -81.278769,
      "stop_sequence": 67,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "SARNWES2",
      "stop_name": "Sarnia at Western  WB - #1647",
      "stop_lat": 43.001883,
      "stop_lon": -81.277365,
      "stop_sequence": 17,
      "route_id": "09",
      "route_color": "B36666"
    },
    {
      "stop_id": "SARNWES2",
      "stop_name": "Sarnia at Western  WB - #1647",
      "stop_lat": 43.001883,
      "stop_lon": -81.277365,
      "stop_sequence": 30,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "SARNWES2",
      "stop_name": "Sarnia at Western  WB - #1647",
      "stop_lat": 43.001883,
      "stop_lon": -81.277365,
      "stop_sequence": 3,
      "route_id": 31,
      "route_color": "00B700"
    },
    {
      "stop_id": "SEAGHYPK",
      "stop_name": "Seagull at Hyde Park WB - #1653",
      "stop_lat": 43.008661,
      "stop_lon": -81.335843,
      "stop_sequence": 25,
      "route_id": 31,
      "route_color": "00B700"
    },
    {
      "stop_id": "SHELBUR2",
      "stop_name": "Shelbourne at Burlington Gate SB - #1656",
      "stop_lat": 42.963197,
      "stop_lon": -81.200141,
      "stop_sequence": 55,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "SHELDEVE",
      "stop_name": "Shelbourne at Deveron EB - #1657",
      "stop_lat": 42.963077,
      "stop_lon": -81.196346,
      "stop_sequence": 57,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "SHOLEXE1",
      "stop_name": "Sholto at Exeter NB - #1658",
      "stop_lat": 42.925738,
      "stop_lon": -81.225438,
      "stop_sequence": 60,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "SHOLJAL1",
      "stop_name": "Sholto at Jalna Blvd NB - #1660",
      "stop_lat": 42.926831,
      "stop_lon": -81.226266,
      "stop_sequence": 61,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "SOUTADE1",
      "stop_name": "Southdale & Adelaide EB - #1666",
      "stop_lat": 42.944433,
      "stop_lon": -81.21403,
      "stop_sequence": 42,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "SOUTAND2",
      "stop_name": "Southdale at Andover  WB - #1669",
      "stop_lat": 42.939725,
      "stop_lon": -81.273089,
      "stop_sequence": 43,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "ARGYMAL2",
      "stop_name": "Argyle Mall NB - Stop 2 - #167",
      "stop_lat": 43.003045,
      "stop_lon": -81.173569,
      "stop_sequence": 55,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "ARGYMAL2",
      "stop_name": "Argyle Mall NB - Stop 2 - #167",
      "stop_lat": 43.003045,
      "stop_lon": -81.173569,
      "stop_sequence": 71,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "ARGYMAL2",
      "stop_name": "Argyle Mall NB - Stop 2 - #167",
      "stop_lat": 43.003045,
      "stop_lon": -81.173569,
      "stop_sequence": 13,
      "route_id": 94,
      "route_color": "FF8000"
    },
    {
      "stop_id": "SOUTBEA1",
      "stop_name": "Southcrest at Beachwood EB - #1670",
      "stop_lat": 42.964424,
      "stop_lon": -81.276425,
      "stop_sequence": 12,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "SOUTDUL2",
      "stop_name": "Southdale at Dulaney WB - #1674",
      "stop_lat": 42.942263,
      "stop_lon": -81.240731,
      "stop_sequence": 36,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "SOUTDUN2",
      "stop_name": "Southdale at Dundalk WB - #1675",
      "stop_lat": 42.941979,
      "stop_lon": -81.244486,
      "stop_sequence": 37,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "SOUTEAS2",
      "stop_name": "Southdale at Easy WB - #1678",
      "stop_lat": 42.942993,
      "stop_lon": -81.232317,
      "stop_sequence": 34,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "SOUTHOME",
      "stop_name": "Southdale at Homeview WB - #1680",
      "stop_lat": 42.941369,
      "stop_lon": -81.251878,
      "stop_sequence": 38,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "SOUTKOR2",
      "stop_name": "Southdale at Koru Crt WB - #1684",
      "stop_lat": 42.945718,
      "stop_lon": -81.200797,
      "stop_sequence": 14,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "SOUTMIL2",
      "stop_name": "Southdale East of Millbank WB - #1686",
      "stop_lat": 42.945472,
      "stop_lon": -81.203992,
      "stop_sequence": 15,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "SOUTMIL4",
      "stop_name": "964 Southdale WB - #1688",
      "stop_lat": 42.944983,
      "stop_lon": -81.209328,
      "stop_sequence": 16,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "ASHBMIL2",
      "stop_name": "Ashbury at Millbank WB - #169",
      "stop_lat": 42.937358,
      "stop_lon": -81.202382,
      "stop_sequence": 54,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "SOUTMIL6",
      "stop_name": "Southdale West of Millbank WB - #1690",
      "stop_lat": 42.944705,
      "stop_lon": -81.212499,
      "stop_sequence": 17,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "SOUTNIX2",
      "stop_name": "Southdale at Nixon WB - #1692",
      "stop_lat": 42.942523,
      "stop_lon": -81.237558,
      "stop_sequence": 35,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "SOUTNOD2",
      "stop_name": "Southdale East of Notre Dame WB - #1695",
      "stop_lat": 42.940325,
      "stop_lon": -81.264321,
      "stop_sequence": 41,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "SOUTNOD4",
      "stop_name": "Southdale West of Notre Dame WB - #1696",
      "stop_lat": 42.940115,
      "stop_lon": -81.267119,
      "stop_sequence": 42,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "SOUTPOM2",
      "stop_name": "Southdale at Pond Mills WB - #1698",
      "stop_lat": 42.945995,
      "stop_lon": -81.196964,
      "stop_sequence": 13,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "ASHBSUR1",
      "stop_name": "Ashbury at Surrey Cres NB - #170",
      "stop_lat": 42.938413,
      "stop_lon": -81.204312,
      "stop_sequence": 55,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "SOUTVER2",
      "stop_name": "Southdale at Verulam WB - #1701",
      "stop_lat": 42.943186,
      "stop_lon": -81.230062,
      "stop_sequence": 33,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "SOUTWEL1",
      "stop_name": "Southdale at Wellington EB - #1703",
      "stop_lat": 42.94359,
      "stop_lon": -81.224377,
      "stop_sequence": 40,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "SOUTWHA2",
      "stop_name": "Southdale West of Wharncliffe WB - #1707",
      "stop_lat": 42.940725,
      "stop_lon": -81.259235,
      "stop_sequence": 40,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "SOUTWHA4",
      "stop_name": "Southdale East of Wharncliffe WB - #1709",
      "stop_lat": 42.940992,
      "stop_lon": -81.255824,
      "stop_sequence": 39,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "SOUTWIL1",
      "stop_name": "Southdale at Willow Dr EB - #1711",
      "stop_lat": 42.943924,
      "stop_lon": -81.220704,
      "stop_sequence": 41,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "SOUTWON2",
      "stop_name": "Southdale at Wonderland  WB - #1714",
      "stop_lat": 42.939343,
      "stop_lon": -81.278838,
      "stop_sequence": 44,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "SOVEBEL2",
      "stop_name": "Sovereign at Belleisle Crt SB - #1717",
      "stop_lat": 43.002321,
      "stop_lon": -81.146558,
      "stop_sequence": 11,
      "route_id": 37,
      "route_color": "0098E1"
    },
    {
      "stop_id": "SOVENEP2",
      "stop_name": "Sovereign at Neptune 1 SB - #1718",
      "stop_lat": 42.996341,
      "stop_lon": -81.143305,
      "stop_sequence": 13,
      "route_id": 37,
      "route_color": "0098E1"
    },
    {
      "stop_id": "SOVENEP4",
      "stop_name": "Sovereign at  Neptune Cres 2 SB - #1719",
      "stop_lat": 42.991413,
      "stop_lon": -81.140522,
      "stop_sequence": 15,
      "route_id": 37,
      "route_color": "0098E1"
    },
    {
      "stop_id": "SOVETART",
      "stop_name": "Sovereign at Tartan SB - #1720",
      "stop_lat": 42.994375,
      "stop_lon": -81.1422,
      "stop_sequence": 14,
      "route_id": 37,
      "route_color": "0098E1"
    },
    {
      "stop_id": "SOVETRA2",
      "stop_name": "Sovereign at Trafalgar SB - #1722",
      "stop_lat": 42.998875,
      "stop_lon": -81.144742,
      "stop_sequence": 12,
      "route_id": 37,
      "route_color": "0098E1"
    },
    {
      "stop_id": "SOWESUNN",
      "stop_name": "South Wenige at Sunningdale NB - #1727",
      "stop_lat": 43.048287,
      "stop_lon": -81.25293,
      "stop_sequence": 61,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "SPRIBER4",
      "stop_name": "Springbank at Berkshire WB - #1730",
      "stop_lat": 42.964413,
      "stop_lon": -81.291526,
      "stop_sequence": 60,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "SPRICHEL",
      "stop_name": "Springbank at Chelsea WB - #1732",
      "stop_lat": 42.971031,
      "stop_lon": -81.27803,
      "stop_sequence": 52,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "SPRICOM2",
      "stop_name": "Springbank at Commissioners WB - #1734",
      "stop_lat": 42.954791,
      "stop_lon": -81.315584,
      "stop_sequence": 66,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "SPRIGRE2",
      "stop_name": "Springbank at Greenside WB - #1736",
      "stop_lat": 42.97379,
      "stop_lon": -81.272368,
      "stop_sequence": 50,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "SPRIHIC2",
      "stop_name": "Springbank at Hillcrest Dr WB - #1739",
      "stop_lat": 42.959062,
      "stop_lon": -81.302965,
      "stop_sequence": 64,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "SPRIJAR2",
      "stop_name": "Springbank at Jarvis St WB - #1741",
      "stop_lat": 42.960018,
      "stop_lon": -81.300721,
      "stop_sequence": 63,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "SPRIQUI2",
      "stop_name": "Springbank at Quinella WB - #1747",
      "stop_lat": 42.961707,
      "stop_lon": -81.297108,
      "stop_sequence": 62,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "SPRIWES4",
      "stop_name": "Springbank West of Westmount WB - #1753",
      "stop_lat": 42.956117,
      "stop_lon": -81.312954,
      "stop_sequence": 65,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "SPRIWON2",
      "stop_name": "Springbank at Wonderland  WB - #1755",
      "stop_lat": 42.96345,
      "stop_lon": -81.293513,
      "stop_sequence": 61,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "STANFANS",
      "stop_name": "Stanton at Fanshawe Park SB - #1757",
      "stop_lat": 43.010887,
      "stop_lon": -81.333916,
      "stop_sequence": 24,
      "route_id": 31,
      "route_color": "00B700"
    },
    {
      "stop_id": "STANPERR",
      "stop_name": "Stanley at Perry EB - #1758",
      "stop_lat": 42.978172,
      "stop_lon": -81.259762,
      "stop_sequence": 23,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "STANWHAR",
      "stop_name": "Stanley at Wharncliffe EB - #1759",
      "stop_lat": 42.977719,
      "stop_lon": -81.261462,
      "stop_sequence": 22,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "STANWORT",
      "stop_name": "Stanley at Wortley EB - #1760",
      "stop_lat": 42.978927,
      "stop_lon": -81.257107,
      "stop_sequence": 24,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "THIRCUL2",
      "stop_name": "Third at Culver  SB - #1770",
      "stop_lat": 43.008655,
      "stop_lon": -81.188486,
      "stop_sequence": 59,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "THIROXF2",
      "stop_name": "Third at Oxford  SB - #1772",
      "stop_lat": 43.011824,
      "stop_lon": -81.190053,
      "stop_sequence": 57,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "THISBKW1",
      "stop_name": "Thistlewood at Blackwater EB - #1773",
      "stop_lat": 43.044314,
      "stop_lon": -81.25747,
      "stop_sequence": 59,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "THOMADE1",
      "stop_name": "Princess Elizabeth Elementary School EB - #1776",
      "stop_lat": 42.968377,
      "stop_lon": -81.221932,
      "stop_sequence": 46,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "THOMCHE1",
      "stop_name": "Thompson at Chesterfield  EB - #1779",
      "stop_lat": 42.969255,
      "stop_lon": -81.216183,
      "stop_sequence": 48,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "THOMEME1",
      "stop_name": "Thompson at Emerson  EB - #1781",
      "stop_lat": 42.968937,
      "stop_lon": -81.219792,
      "stop_sequence": 47,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "THOMGLA1",
      "stop_name": "Thompson at Gladstone Ave EB - #1783",
      "stop_lat": 42.969382,
      "stop_lon": -81.21484,
      "stop_sequence": 49,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "THOMKED1",
      "stop_name": "Thompson at King Edward EB - #1786",
      "stop_lat": 42.96964,
      "stop_lon": -81.212344,
      "stop_sequence": 50,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "TRAFBALF",
      "stop_name": "Trafalgar at Balfour Place EB - #1789",
      "stop_lat": 42.989742,
      "stop_lon": -81.179139,
      "stop_sequence": 44,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "TRAFCLA1",
      "stop_name": "Trafalgar at Clarke Rd EB - #1791",
      "stop_lat": 42.992012,
      "stop_lon": -81.171074,
      "stop_sequence": 46,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "TRAFHUD2",
      "stop_name": "Trafalgar at Hudson  WB - #1796",
      "stop_lat": 42.99612,
      "stop_lon": -81.157048,
      "stop_sequence": 65,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "TRAFSTE1",
      "stop_name": "Trafalgar at Stevenson Ave EB - #1799",
      "stop_lat": 42.986995,
      "stop_lon": -81.189037,
      "stop_sequence": 41,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "TRAFTHO1",
      "stop_name": "Trafalgar at Thorne Ave EB - #1801",
      "stop_lat": 42.987655,
      "stop_lon": -81.18663,
      "stop_sequence": 42,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "TRAFVAN1",
      "stop_name": "Trafalgar at Vancouver  EB - #1803",
      "stop_lat": 42.989143,
      "stop_lon": -81.181387,
      "stop_sequence": 43,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "TWEECOU2",
      "stop_name": "Tweedsmuir at Court Lane East WB - #1810",
      "stop_lat": 42.982252,
      "stop_lon": -81.183322,
      "stop_sequence": 16,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "TWEECOU4",
      "stop_name": "Tweedsmuir at Court Lane West WB - #1811",
      "stop_lat": 42.982365,
      "stop_lon": -81.185867,
      "stop_sequence": 17,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "TWEEELLE",
      "stop_name": "Tweedsmuir at Ellesworth WB - #1812",
      "stop_lat": 42.983016,
      "stop_lon": -81.187912,
      "stop_sequence": 18,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "TWEEHALE",
      "stop_name": "Tweedsmuir at Hale  WB - #1813",
      "stop_lat": 42.982862,
      "stop_lon": -81.191508,
      "stop_sequence": 20,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "TWEEJASP",
      "stop_name": "Tweedsmuir at Jasper WB - #1814",
      "stop_lat": 42.983139,
      "stop_lon": -81.189357,
      "stop_sequence": 19,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "UNIVHOS2",
      "stop_name": "Universtiy Hospital SB - #1817",
      "stop_lat": 43.012631,
      "stop_lon": -81.273926,
      "stop_sequence": 35,
      "route_id": "06",
      "route_color": "008080"
    },
    {
      "stop_id": "UNIVHOS2",
      "stop_name": "Universtiy Hospital SB - #1817",
      "stop_lat": 43.012631,
      "stop_lon": -81.273926,
      "stop_sequence": 9,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "UNIVHOS2",
      "stop_name": "Universtiy Hospital SB - #1817",
      "stop_lat": 43.012631,
      "stop_lon": -81.273926,
      "stop_sequence": 37,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "UNIVRIC1",
      "stop_name": "University Main Gates EB - #1818",
      "stop_lat": 43.008938,
      "stop_lon": -81.261536,
      "stop_sequence": 12,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "UNIVRIC2",
      "stop_name": "University Main Gates WB - #1819",
      "stop_lat": 43.008913,
      "stop_lon": -81.262137,
      "stop_sequence": 12,
      "route_id": 106,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "UNIVRIC2",
      "stop_name": "University Main Gates WB - #1819",
      "stop_lat": 43.008913,
      "stop_lon": -81.262137,
      "stop_sequence": 24,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "UNIVSUN1",
      "stop_name": "University Dr at Sunset EB - #1820",
      "stop_lat": 43.007727,
      "stop_lon": -81.26561,
      "stop_sequence": 11,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "UNIVSUN2",
      "stop_name": "Elgin Hall WB - #1821",
      "stop_lat": 43.007963,
      "stop_lon": -81.265357,
      "stop_sequence": 13,
      "route_id": 106,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "UNIVSUN2",
      "stop_name": "Elgin Hall WB - #1821",
      "stop_lat": 43.007963,
      "stop_lon": -81.265357,
      "stop_sequence": 25,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "UPPECHI4",
      "stop_name": "Upper Queens North of Chiddington SB - #1825",
      "stop_lat": 42.95352,
      "stop_lon": -81.240689,
      "stop_sequence": 39,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "UPPECOM2",
      "stop_name": "Upper Queens at Commissioners Rd SB - #1827",
      "stop_lat": 42.957062,
      "stop_lon": -81.24153,
      "stop_sequence": 38,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "VALEADEV",
      "stop_name": "Valetta at Adevon WB - #1832",
      "stop_lat": 42.975224,
      "stop_lon": -81.301735,
      "stop_sequence": 20,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "VALECAYL",
      "stop_name": "Valetta at Cayley Dr WB - #1833",
      "stop_lat": 42.976208,
      "stop_lon": -81.295904,
      "stop_sequence": 18,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "VALEDER2",
      "stop_name": "Valetta east of Deerpark Cr WB - #1835",
      "stop_lat": 42.974878,
      "stop_lon": -81.306085,
      "stop_sequence": 21,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "VALEDER4",
      "stop_name": "Valetta West of Deerpark WB - #1836",
      "stop_lat": 42.973494,
      "stop_lon": -81.306776,
      "stop_sequence": 22,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "VALEHIB2",
      "stop_name": "Valetta at Hibicus  WB - #1838",
      "stop_lat": 42.972441,
      "stop_lon": -81.308761,
      "stop_sequence": 23,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "VALEHYP2",
      "stop_name": "Valetta at Hyde Park WB - #1840",
      "stop_lat": 42.968863,
      "stop_lon": -81.315273,
      "stop_sequence": 26,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "VALEPLA2",
      "stop_name": "Valetta at Plantation Rd WB - #1845",
      "stop_lat": 42.971028,
      "stop_lon": -81.313638,
      "stop_sequence": 24,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "VALESHR2",
      "stop_name": "Valetta at Shrene Terrace WB - #1848",
      "stop_lat": 42.975439,
      "stop_lon": -81.29854,
      "stop_sequence": 19,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "VALEWOO2",
      "stop_name": "Valetta at Woodborough St WB - #1850",
      "stop_lat": 42.970037,
      "stop_lon": -81.314657,
      "stop_sequence": 25,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "VERUEDEN",
      "stop_name": "Verulam at Eden SB - #1852",
      "stop_lat": 42.947258,
      "stop_lon": -81.231175,
      "stop_sequence": 45,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "VICTCOMM",
      "stop_name": "Victoria Hospital at Commissioners NB - #1854",
      "stop_lat": 42.959454,
      "stop_lon": -81.223182,
      "stop_sequence": 2,
      "route_id": "06",
      "route_color": "008080"
    },
    {
      "stop_id": "VICTMUBU",
      "stop_name": "Victoria Hospital at Medical Unit Building - #1856",
      "stop_lat": 42.961257,
      "stop_lon": -81.221941,
      "stop_sequence": 3,
      "route_id": "06",
      "route_color": "008080"
    },
    {
      "stop_id": "VICTWES1",
      "stop_name": "Victoria Hospital at Western Counties EB - #1857",
      "stop_lat": 42.959117,
      "stop_lon": -81.223662,
      "stop_sequence": 20,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "VISCCOM2",
      "stop_name": "Viscount AT Commissioners SB - #1872",
      "stop_lat": 42.955816,
      "stop_lon": -81.269168,
      "stop_sequence": 17,
      "route_id": 12,
      "route_color": "CA95FF"
    },
    {
      "stop_id": "VISCCRAN",
      "stop_name": "Viscount at Cranbrook WB - #1873",
      "stop_lat": 42.944409,
      "stop_lon": -81.302864,
      "stop_sequence": 42,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "VISCFARN",
      "stop_name": "Viscount at Farnham Rd WB - #1874",
      "stop_lat": 42.945708,
      "stop_lon": -81.295842,
      "stop_sequence": 40,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "VISCFOXM",
      "stop_name": "Viscount at Foxmill Cr WB - #1875",
      "stop_lat": 42.947583,
      "stop_lon": -81.284005,
      "stop_sequence": 59,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "VISCGAL2",
      "stop_name": "Viscount South of Galloway Cr SB - #1877",
      "stop_lat": 42.950234,
      "stop_lon": -81.268816,
      "stop_sequence": 19,
      "route_id": 12,
      "route_color": "CA95FF"
    },
    {
      "stop_id": "VISCGARD",
      "stop_name": "Viscount at Gardenvale WB - #1879",
      "stop_lat": 42.947631,
      "stop_lon": -81.280906,
      "stop_sequence": 58,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "BASEFAI1",
      "stop_name": "Base Line east Fairview Ave EB - #188",
      "stop_lat": 42.962145,
      "stop_lon": -81.225577,
      "stop_sequence": 42,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "VISCTAV2",
      "stop_name": "Viscount at Tavistock Rd 1 SB - #1886",
      "stop_lat": 42.95324,
      "stop_lon": -81.268281,
      "stop_sequence": 18,
      "route_id": 12,
      "route_color": "CA95FF"
    },
    {
      "stop_id": "VISCVIGR",
      "stop_name": "Viscount at Village Green WB - #1888",
      "stop_lat": 42.944876,
      "stop_lon": -81.299283,
      "stop_sequence": 41,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "BASEFAI2",
      "stop_name": "Base Line west of Fairview Ave WB - #189",
      "stop_lat": 42.962147,
      "stop_lon": -81.226993,
      "stop_sequence": 5,
      "route_id": "06",
      "route_color": "008080"
    },
    {
      "stop_id": "VISCWON2",
      "stop_name": "Viscount East of Wonderland WB - #1890",
      "stop_lat": 42.947195,
      "stop_lon": -81.288537,
      "stop_sequence": 60,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "WAVECAS1",
      "stop_name": "Wavell at Castle Dr EB - #1896",
      "stop_lat": 42.999161,
      "stop_lon": -81.170685,
      "stop_sequence": 4,
      "route_id": 35,
      "route_color": "DBC004"
    },
    {
      "stop_id": "WAVECAS2",
      "stop_name": "Wavell at Castle Dr WB - #1897",
      "stop_lat": 42.999564,
      "stop_lon": -81.169557,
      "stop_sequence": 60,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "WAVECLA1",
      "stop_name": "Wavell East of Clarke Rd EB - #1898",
      "stop_lat": 42.998854,
      "stop_lon": -81.171841,
      "stop_sequence": 3,
      "route_id": 35,
      "route_color": "DBC004"
    },
    {
      "stop_id": "WAVEDUN2",
      "stop_name": "2040 Wavell SB - #1903",
      "stop_lat": 43.004325,
      "stop_lon": -81.168777,
      "stop_sequence": 58,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "WAVEDUN4",
      "stop_name": "1990 Wavell SB - #1905",
      "stop_lat": 43.002382,
      "stop_lon": -81.167767,
      "stop_sequence": 59,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "WAVEDUN6",
      "stop_name": "Wavell at Dundas SB - #1906",
      "stop_lat": 43.00596,
      "stop_lon": -81.169634,
      "stop_sequence": 57,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "WAVEEDM1",
      "stop_name": "Wavell at Edmonton St EB - #1907",
      "stop_lat": 42.99618,
      "stop_lon": -81.18115,
      "stop_sequence": 51,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "WAVEKIW1",
      "stop_name": "Wavell at Kiwanis Park Dr EB - #1910",
      "stop_lat": 42.993332,
      "stop_lon": -81.189834,
      "stop_sequence": 49,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "WAVEMER1",
      "stop_name": "Wavell East of Merlin Cr EB - #1912",
      "stop_lat": 42.997589,
      "stop_lon": -81.176181,
      "stop_sequence": 52,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "WAVEVANC",
      "stop_name": "Wavell at Vancouver St. EB - #1916",
      "stop_lat": 42.994928,
      "stop_lon": -81.185574,
      "stop_sequence": 50,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "WELLBAS2",
      "stop_name": "Wellington at Baseline SB - #1924",
      "stop_lat": 42.961977,
      "stop_lon": -81.231306,
      "stop_sequence": 34,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "WELLBAS2",
      "stop_name": "Wellington at Baseline SB - #1924",
      "stop_lat": 42.961977,
      "stop_lon": -81.231306,
      "stop_sequence": 9,
      "route_id": 90,
      "route_color": "FF8A15"
    },
    {
      "stop_id": "WELLBRA1",
      "stop_name": "Wellington North of Bradley  NB - #1926",
      "stop_lat": 42.935398,
      "stop_lon": -81.223745,
      "stop_sequence": 29,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "WELLCOLG",
      "stop_name": "Wellington at Colgrove Pl SB - #1930",
      "stop_lat": 42.970156,
      "stop_lon": -81.236499,
      "stop_sequence": 38,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "WELLCOLG",
      "stop_name": "Wellington at Colgrove Pl SB - #1930",
      "stop_lat": 42.970156,
      "stop_lon": -81.236499,
      "stop_sequence": 31,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "WELLCOM4",
      "stop_name": "Wellington South of Commissioners SB - #1933",
      "stop_lat": 42.957854,
      "stop_lon": -81.230256,
      "stop_sequence": 35,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "WELLCOM4",
      "stop_name": "Wellington South of Commissioners SB - #1933",
      "stop_lat": 42.957854,
      "stop_lon": -81.230256,
      "stop_sequence": 10,
      "route_id": 90,
      "route_color": "FF8A15"
    },
    {
      "stop_id": "WELLDUN2",
      "stop_name": "Wellington at Dundas SB - #1938",
      "stop_lat": 42.984565,
      "stop_lon": -81.245276,
      "stop_sequence": 30,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "WELLDUN3",
      "stop_name": "Wellington South of Dundas St NB - #1939",
      "stop_lat": 42.984487,
      "stop_lon": -81.244884,
      "stop_sequence": 39,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "WELLDUN3",
      "stop_name": "Wellington South of Dundas St NB - #1939",
      "stop_lat": 42.984487,
      "stop_lon": -81.244884,
      "stop_sequence": 40,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "WELLDUN3",
      "stop_name": "Wellington South of Dundas St NB - #1939",
      "stop_lat": 42.984487,
      "stop_lon": -81.244884,
      "stop_sequence": 2,
      "route_id": "09",
      "route_color": "B36666"
    },
    {
      "stop_id": "WELLDUN3",
      "stop_name": "Wellington South of Dundas St NB - #1939",
      "stop_lat": 42.984487,
      "stop_lon": -81.244884,
      "stop_sequence": 21,
      "route_id": 102,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "WELLDUN3",
      "stop_name": "Wellington South of Dundas St NB - #1939",
      "stop_lat": 42.984487,
      "stop_lon": -81.244884,
      "stop_sequence": 1,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "WELLEXE2",
      "stop_name": "Wellington at Exeter SB - #1941",
      "stop_lat": 42.927087,
      "stop_lon": -81.2183,
      "stop_sequence": 2,
      "route_id": 30,
      "route_color": "CF2985"
    },
    {
      "stop_id": "WELLGRA2",
      "stop_name": "Wellington at Grand SB - #1943",
      "stop_lat": 42.972119,
      "stop_lon": -81.23806,
      "stop_sequence": 37,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "WELLGRA2",
      "stop_name": "Wellington at Grand SB - #1943",
      "stop_lat": 42.972119,
      "stop_lon": -81.23806,
      "stop_sequence": 30,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "WELLGRA2",
      "stop_name": "Wellington at Grand SB - #1943",
      "stop_lat": 42.972119,
      "stop_lon": -81.23806,
      "stop_sequence": 8,
      "route_id": 90,
      "route_color": "FF8A15"
    },
    {
      "stop_id": "WELLGRE2",
      "stop_name": "Wellington at Grey SB - #1945",
      "stop_lat": 42.977378,
      "stop_lon": -81.241642,
      "stop_sequence": 35,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "WELLGRE2",
      "stop_name": "Wellington at Grey SB - #1945",
      "stop_lat": 42.977378,
      "stop_lon": -81.241642,
      "stop_sequence": 28,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "WELLHOR1",
      "stop_name": "Wellington North of Horton NB - #1947",
      "stop_lat": 42.98049,
      "stop_lon": -81.242866,
      "stop_sequence": 37,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "WELLHOR1",
      "stop_name": "Wellington North of Horton NB - #1947",
      "stop_lat": 42.98049,
      "stop_lon": -81.242866,
      "stop_sequence": 38,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "WELLHOR2",
      "stop_name": "Wellington at Horton SB - #1948",
      "stop_lat": 42.979808,
      "stop_lon": -81.242895,
      "stop_sequence": 27,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "WELLMON1",
      "stop_name": "Wellington at Montgomery Gate NB - #1952",
      "stop_lat": 42.939082,
      "stop_lon": -81.224643,
      "stop_sequence": 30,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "WELLNAD1",
      "stop_name": "705 Wellington SB - #1956",
      "stop_lat": 42.94844,
      "stop_lon": -81.228036,
      "stop_sequence": 38,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "WELLNADI",
      "stop_name": "Wellington at Creston SB - #1957",
      "stop_lat": 42.946946,
      "stop_lon": -81.227657,
      "stop_sequence": 39,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "WELLPERC",
      "stop_name": "Wellington at Percy SB - #1958",
      "stop_lat": 42.963536,
      "stop_lon": -81.231625,
      "stop_sequence": 40,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "WELLQUE2",
      "stop_name": "Wellington at Queens Ave SB - #1960",
      "stop_lat": 42.985598,
      "stop_lon": -81.245841,
      "stop_sequence": 29,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "WELLSOU2",
      "stop_name": "Wellington at South SB - #1969",
      "stop_lat": 42.975173,
      "stop_lon": -81.240561,
      "stop_sequence": 36,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "WELLSOU2",
      "stop_name": "Wellington at South SB - #1969",
      "stop_lat": 42.975173,
      "stop_lon": -81.240561,
      "stop_sequence": 29,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "WELLTHJA",
      "stop_name": "Wellington at Thomas Janes SB - #1970",
      "stop_lat": 42.965569,
      "stop_lon": -81.232118,
      "stop_sequence": 33,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "WELLWAT2",
      "stop_name": "Wellington at Waterman SB - #1972",
      "stop_lat": 42.954466,
      "stop_lon": -81.229486,
      "stop_sequence": 36,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "WELLWELL",
      "stop_name": "Wellington at Wellington Cres SB - #1974",
      "stop_lat": 42.968432,
      "stop_lon": -81.234085,
      "stop_sequence": 39,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "WELLWELL",
      "stop_name": "Wellington at Wellington Cres SB - #1974",
      "stop_lat": 42.968432,
      "stop_lon": -81.234085,
      "stop_sequence": 32,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "WELLWIL4",
      "stop_name": "Wellington South of Wilkins SB - #1978",
      "stop_lat": 42.951023,
      "stop_lon": -81.228688,
      "stop_sequence": 37,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "WELLYOR1",
      "stop_name": "Wellington at York NB - #1979",
      "stop_lat": 42.982917,
      "stop_lon": -81.244106,
      "stop_sequence": 38,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "WELLYOR1",
      "stop_name": "Wellington at York NB - #1979",
      "stop_lat": 42.982917,
      "stop_lon": -81.244106,
      "stop_sequence": 39,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "WELLYOR2",
      "stop_name": "Wellington at York SB - #1980",
      "stop_lat": 42.982963,
      "stop_lon": -81.244483,
      "stop_sequence": 31,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "WELLYOR2",
      "stop_name": "Wellington at York SB - #1980",
      "stop_lat": 42.982963,
      "stop_lon": -81.244483,
      "stop_sequence": 26,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "WESTAMB1",
      "stop_name": "Western at Ambleside Dr NB - #1983",
      "stop_lat": 43.015448,
      "stop_lon": -81.276724,
      "stop_sequence": 40,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "WESTBAS1",
      "stop_name": "Westminster at Baseline Rd NB - #1985",
      "stop_lat": 42.964112,
      "stop_lon": -81.224824,
      "stop_sequence": 43,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "WESTELG1",
      "stop_name": "Western at Elgin Dr NB - #1988",
      "stop_lat": 43.010811,
      "stop_lon": -81.277338,
      "stop_sequence": 2,
      "route_id": 102,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "WESTELG2",
      "stop_name": "Huron College - #1989",
      "stop_lat": 43.008253,
      "stop_lon": -81.277301,
      "stop_sequence": 2,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "WESTHOL2",
      "stop_name": "Western at Hollywood Crt SB - #1993",
      "stop_lat": 42.996161,
      "stop_lon": -81.27083,
      "stop_sequence": 7,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "WESTLAM2",
      "stop_name": "Western at Lambton  SB - #1996",
      "stop_lat": 43.005491,
      "stop_lon": -81.276961,
      "stop_sequence": 3,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "WESTLAM2",
      "stop_name": "Western at Lambton  SB - #1996",
      "stop_lat": 43.005491,
      "stop_lon": -81.276961,
      "stop_sequence": 29,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "WESTLAM2",
      "stop_name": "Western at Lambton  SB - #1996",
      "stop_lat": 43.005491,
      "stop_lon": -81.276961,
      "stop_sequence": 2,
      "route_id": 31,
      "route_color": "00B700"
    },
    {
      "stop_id": "WESTLAM2",
      "stop_name": "Western at Lambton  SB - #1996",
      "stop_lat": 43.005491,
      "stop_lon": -81.276961,
      "stop_sequence": 4,
      "route_id": 93,
      "route_color": "FF8000"
    },
    {
      "stop_id": "WESTMAL1",
      "stop_name": "Westmount Mall at Stop 1 - #1997",
      "stop_lat": 42.947415,
      "stop_lon": -81.29255,
      "stop_sequence": 39,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "WESTMAL3",
      "stop_name": "Westmount Mall at Stop 3 - #1999",
      "stop_lat": 42.947484,
      "stop_lon": -81.292059,
      "stop_sequence": 61,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "WESTPLA2",
      "stop_name": "Western at Platts Lane SB - #2002",
      "stop_lat": 42.996341,
      "stop_lon": -81.274171,
      "stop_sequence": 6,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "WESTSAR2",
      "stop_name": "Western at Sarnia Rd SB - #2003",
      "stop_lat": 43.001194,
      "stop_lon": -81.276529,
      "stop_sequence": 4,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "WESTSAR2",
      "stop_name": "Western at Sarnia Rd SB - #2003",
      "stop_lat": 43.001194,
      "stop_lon": -81.276529,
      "stop_sequence": 5,
      "route_id": 93,
      "route_color": "FF8000"
    },
    {
      "stop_id": "WESTSAR2",
      "stop_name": "Western at Sarnia Rd SB - #2003",
      "stop_lat": 43.001194,
      "stop_lon": -81.276529,
      "stop_sequence": 2,
      "route_id": 94,
      "route_color": "FF8000"
    },
    {
      "stop_id": "WESTSAR4",
      "stop_name": "Althouse College - #2004",
      "stop_lat": 42.999141,
      "stop_lon": -81.276379,
      "stop_sequence": 5,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "WESTWHE1",
      "stop_name": "Westminster at Whetter Ave NB - #2007",
      "stop_lat": 42.965611,
      "stop_lon": -81.225135,
      "stop_sequence": 44,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "WEXFADMI",
      "stop_name": "Wexford at Admiral Dr. SB - #2009",
      "stop_lat": 42.996197,
      "stop_lon": -81.164915,
      "stop_sequence": 7,
      "route_id": 35,
      "route_color": "DBC004"
    },
    {
      "stop_id": "WEXFROY2",
      "stop_name": "Wexford at Royal Cr SB - #2011",
      "stop_lat": 42.997897,
      "stop_lon": -81.165965,
      "stop_sequence": 6,
      "route_id": 35,
      "route_color": "DBC004"
    },
    {
      "stop_id": "WHARBAS2",
      "stop_name": "Wharncliffe at BaseLine NS SB - #2016",
      "stop_lat": 42.959545,
      "stop_lon": -81.261148,
      "stop_sequence": 13,
      "route_id": 12,
      "route_color": "CA95FF"
    },
    {
      "stop_id": "WHARBYR1",
      "stop_name": "Wharncliffe at Byron NB - #2022",
      "stop_lat": 42.973704,
      "stop_lon": -81.262004,
      "stop_sequence": 20,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "WHARBYR2",
      "stop_name": "Wharncliffe at Byron  SB - #2023",
      "stop_lat": 42.974058,
      "stop_lon": -81.262197,
      "stop_sequence": 8,
      "route_id": 12,
      "route_color": "CA95FF"
    },
    {
      "stop_id": "WHARBYR2",
      "stop_name": "Wharncliffe at Byron  SB - #2023",
      "stop_lat": 42.974058,
      "stop_lon": -81.262197,
      "stop_sequence": 9,
      "route_id": 93,
      "route_color": "FF8000"
    },
    {
      "stop_id": "WHARCENT",
      "stop_name": "Wharncliffe at Center SB - #2024",
      "stop_lat": 42.961302,
      "stop_lon": -81.261271,
      "stop_sequence": 12,
      "route_id": 12,
      "route_color": "CA95FF"
    },
    {
      "stop_id": "WHARCOM2",
      "stop_name": "Wharncliffe at Commissioners SB - #2027",
      "stop_lat": 42.957599,
      "stop_lon": -81.260802,
      "stop_sequence": 14,
      "route_id": 12,
      "route_color": "CA95FF"
    },
    {
      "stop_id": "WHARELM1",
      "stop_name": "Wharncliffe at Elmwood NB - #2031",
      "stop_lat": 42.969997,
      "stop_lon": -81.261765,
      "stop_sequence": 19,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "WHARELM2",
      "stop_name": "Wharncliffe at Elmwood SB - #2032",
      "stop_lat": 42.970327,
      "stop_lon": -81.261912,
      "stop_sequence": 9,
      "route_id": 12,
      "route_color": "CA95FF"
    },
    {
      "stop_id": "WHARELM2",
      "stop_name": "Wharncliffe at Elmwood SB - #2032",
      "stop_lat": 42.970327,
      "stop_lon": -81.261912,
      "stop_sequence": 10,
      "route_id": 93,
      "route_color": "FF8000"
    },
    {
      "stop_id": "WHAREME1",
      "stop_name": "Wharncliffe at Emery NB - #2033",
      "stop_lat": 42.964157,
      "stop_lon": -81.261322,
      "stop_sequence": 17,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "WHAREME2",
      "stop_name": "Wharncliffe at Emery SB - #2034",
      "stop_lat": 42.963383,
      "stop_lon": -81.261459,
      "stop_sequence": 11,
      "route_id": 12,
      "route_color": "CA95FF"
    },
    {
      "stop_id": "WHAREME2",
      "stop_name": "Wharncliffe at Emery SB - #2034",
      "stop_lat": 42.963383,
      "stop_lon": -81.261459,
      "stop_sequence": 11,
      "route_id": 93,
      "route_color": "FF8000"
    },
    {
      "stop_id": "WHAREUCL",
      "stop_name": "Wharncliffe at Euclid NB - #2037",
      "stop_lat": 42.97506,
      "stop_lon": -81.262093,
      "stop_sequence": 21,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "WHARLEXI",
      "stop_name": "Wharncliffe at Lexington  SB - #2041",
      "stop_lat": 42.986463,
      "stop_lon": -81.263031,
      "stop_sequence": 11,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "WHARMCDO",
      "stop_name": "Western at Essex SB - #2042",
      "stop_lat": 42.995329,
      "stop_lon": -81.266835,
      "stop_sequence": 8,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "WHARMCDO",
      "stop_name": "Western at Essex SB - #2042",
      "stop_lat": 42.995329,
      "stop_lon": -81.266835,
      "stop_sequence": 6,
      "route_id": 93,
      "route_color": "FF8000"
    },
    {
      "stop_id": "WHARMCDO",
      "stop_name": "Western at Essex SB - #2042",
      "stop_lat": 42.995329,
      "stop_lon": -81.266835,
      "stop_sequence": 3,
      "route_id": 94,
      "route_color": "FF8000"
    },
    {
      "stop_id": "WHARMPL2",
      "stop_name": "Wharncliffe at Mt. Pleasant Ave SB - #2045",
      "stop_lat": 42.984249,
      "stop_lon": -81.262931,
      "stop_sequence": 12,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "WHAROXF2",
      "stop_name": "Wharncliffe at Oxford SB - #2047",
      "stop_lat": 42.992144,
      "stop_lon": -81.265068,
      "stop_sequence": 9,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "WHAROXF2",
      "stop_name": "Wharncliffe at Oxford SB - #2047",
      "stop_lat": 42.992144,
      "stop_lon": -81.265068,
      "stop_sequence": 7,
      "route_id": 93,
      "route_color": "FF8000"
    },
    {
      "stop_id": "WHAROXF2",
      "stop_name": "Wharncliffe at Oxford SB - #2047",
      "stop_lat": 42.992144,
      "stop_lon": -81.265068,
      "stop_sequence": 4,
      "route_id": 94,
      "route_color": "FF8000"
    },
    {
      "stop_id": "WHARPAUL",
      "stop_name": "Wharncliffe at Paul SB - #2049",
      "stop_lat": 42.98908,
      "stop_lon": -81.263431,
      "stop_sequence": 10,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "WHARRIG2",
      "stop_name": "Wharncliffe at The Ridgeway SB - #2051",
      "stop_lat": 42.979557,
      "stop_lon": -81.262542,
      "stop_sequence": 6,
      "route_id": 12,
      "route_color": "CA95FF"
    },
    {
      "stop_id": "WHARTEC1",
      "stop_name": "Wharncliffe at Tecumseh NB - #2054",
      "stop_lat": 42.967274,
      "stop_lon": -81.261544,
      "stop_sequence": 18,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "WHARTEC2",
      "stop_name": "Wharncliffe at Tecumseh SB - #2055",
      "stop_lat": 42.967059,
      "stop_lon": -81.261704,
      "stop_sequence": 10,
      "route_id": 12,
      "route_color": "CA95FF"
    },
    {
      "stop_id": "WHARWDAL",
      "stop_name": "Wharncliffe at Westdale SB - #2056",
      "stop_lat": 42.944526,
      "stop_lon": -81.257707,
      "stop_sequence": 25,
      "route_id": 12,
      "route_color": "CA95FF"
    },
    {
      "stop_id": "WHARWYAT",
      "stop_name": "Wharncliffe at Wyatt SB - #2057",
      "stop_lat": 42.982171,
      "stop_lon": -81.26279,
      "stop_sequence": 5,
      "route_id": 12,
      "route_color": "CA95FF"
    },
    {
      "stop_id": "WHARWYAT",
      "stop_name": "Wharncliffe at Wyatt SB - #2057",
      "stop_lat": 42.982171,
      "stop_lon": -81.26279,
      "stop_sequence": 8,
      "route_id": 93,
      "route_color": "FF8000"
    },
    {
      "stop_id": "BASEWEL1",
      "stop_name": "Base Line east of Wellington EB - #206",
      "stop_lat": 42.961772,
      "stop_lon": -81.230042,
      "stop_sequence": 41,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "WHITOMA2",
      "stop_name": "White Oaks Mall Stop 2 - #2061",
      "stop_lat": 42.931714,
      "stop_lon": -81.222633,
      "stop_sequence": 1,
      "route_id": 30,
      "route_color": "CF2985"
    },
    {
      "stop_id": "WHITOMA3",
      "stop_name": "White Oaks Mall Stop 3 - #2062",
      "stop_lat": 42.932033,
      "stop_lon": -81.222974,
      "stop_sequence": 12,
      "route_id": 90,
      "route_color": "FF8A15"
    },
    {
      "stop_id": "WILKCHI2",
      "stop_name": "Wilkins at Chiddington Gate SB - #2067",
      "stop_lat": 42.951127,
      "stop_lon": -81.234432,
      "stop_sequence": 42,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "WILLOSG2",
      "stop_name": "Willow at Osgoode WB - #2070",
      "stop_lat": 42.93894,
      "stop_lon": -81.218681,
      "stop_sequence": 63,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "WILLREGE",
      "stop_name": "William at Regent SB - #2071",
      "stop_lat": 43.009705,
      "stop_lon": -81.245297,
      "stop_sequence": 19,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "WINDADE2",
      "stop_name": "Windermere at Adelaide WB - #2077",
      "stop_lat": 43.022906,
      "stop_lon": -81.250098,
      "stop_sequence": 24,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "WINDADE4",
      "stop_name": "Windermere between Adelaide & Doon WB - #2079",
      "stop_lat": 43.021931,
      "stop_lon": -81.253338,
      "stop_sequence": 25,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "WINDDOO2",
      "stop_name": "Windermere at Doon Dr  2 WB - #2080",
      "stop_lat": 43.020433,
      "stop_lon": -81.258534,
      "stop_sequence": 27,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "WINDDOO4",
      "stop_name": "Windermere at Doon Dr 1 WB - #2082",
      "stop_lat": 43.021463,
      "stop_lon": -81.254986,
      "stop_sequence": 26,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "WINDRIC1",
      "stop_name": "Windermere at Richmond EB - #2083",
      "stop_lat": 43.016099,
      "stop_lon": -81.272653,
      "stop_sequence": 4,
      "route_id": 102,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "WINDRIC2",
      "stop_name": "Windermere at Richmond  WB - #2084",
      "stop_lat": 43.016058,
      "stop_lon": -81.273063,
      "stop_sequence": 33,
      "route_id": "06",
      "route_color": "008080"
    },
    {
      "stop_id": "WINDRIC2",
      "stop_name": "Windermere at Richmond  WB - #2084",
      "stop_lat": 43.016058,
      "stop_lon": -81.273063,
      "stop_sequence": 7,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "WINDRIC2",
      "stop_name": "Windermere at Richmond  WB - #2084",
      "stop_lat": 43.016058,
      "stop_lon": -81.273063,
      "stop_sequence": 35,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "WINDTAL2",
      "stop_name": "Windermere at Tallwood WB - #2086",
      "stop_lat": 43.017494,
      "stop_lon": -81.268651,
      "stop_sequence": 34,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "WONDBEA1",
      "stop_name": "Wonderland at Beaverbrook NB - #2097",
      "stop_lat": 42.99006,
      "stop_lon": -81.295692,
      "stop_sequence": 62,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "ADELADA2",
      "stop_name": "Adelaide at Ada SB - #21",
      "stop_lat": 42.97461,
      "stop_lon": -81.225615,
      "stop_sequence": 31,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "BASEWEL6",
      "stop_name": "Base Line west of Wellington WB - #210",
      "stop_lat": 42.961786,
      "stop_lon": -81.231501,
      "stop_sequence": 6,
      "route_id": "06",
      "route_color": "008080"
    },
    {
      "stop_id": "WONDCOM1",
      "stop_name": "Wonderland South of Commissioners NB - #2100",
      "stop_lat": 42.95344,
      "stop_lon": -81.290359,
      "stop_sequence": 4,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "WONDCOM1",
      "stop_name": "Wonderland South of Commissioners NB - #2100",
      "stop_lat": 42.95344,
      "stop_lon": -81.290359,
      "stop_sequence": 52,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "WONDCOM2",
      "stop_name": "Wonderland at Commissioners SB - #2101",
      "stop_lat": 42.953736,
      "stop_lon": -81.290681,
      "stop_sequence": 36,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "WONDCOM3",
      "stop_name": "Wonderland North of Commissioners NB - #2102",
      "stop_lat": 42.955837,
      "stop_lon": -81.290977,
      "stop_sequence": 53,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "WONDFAR1",
      "stop_name": "Wonderland at Costco South Entrance NB - #2103",
      "stop_lat": 42.986003,
      "stop_lon": -81.293578,
      "stop_sequence": 60,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "WONDFAR3",
      "stop_name": "Wonderland North of Farrah NB - #2105",
      "stop_lat": 42.987627,
      "stop_lon": -81.294437,
      "stop_sequence": 61,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "WONDGAIN",
      "stop_name": "Wonderland at Gainsborough NB - #2107",
      "stop_lat": 43.007368,
      "stop_lon": -81.304338,
      "stop_sequence": 29,
      "route_id": "09",
      "route_color": "B36666"
    },
    {
      "stop_id": "WONDKIW1",
      "stop_name": "Wonderland at Kingsway  NB - #2108",
      "stop_lat": 42.97895,
      "stop_lon": -81.29008,
      "stop_sequence": 57,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "WONDMMA1",
      "stop_name": "Wonderland North of McMaster NB - #2111",
      "stop_lat": 42.943955,
      "stop_lon": -81.287721,
      "stop_sequence": 48,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "WONDMMA3",
      "stop_name": "Wonderland South of McMaster NB - #2113",
      "stop_lat": 42.942913,
      "stop_lon": -81.285326,
      "stop_sequence": 47,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "WONDOXF1",
      "stop_name": "Wonderland North of Oxford  NB - #2115",
      "stop_lat": 42.98418,
      "stop_lon": -81.292694,
      "stop_sequence": 59,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "WONDOXF3",
      "stop_name": "Wonderland at Oxford St NB - #2117",
      "stop_lat": 42.982517,
      "stop_lon": -81.29182,
      "stop_sequence": 58,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "WONDPVA1",
      "stop_name": "Wonderland at PineValley Gate NB - #2119",
      "stop_lat": 42.942462,
      "stop_lon": -81.283426,
      "stop_sequence": 46,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "BASEWES2",
      "stop_name": "30 Base Line WB - #212",
      "stop_lat": 42.959042,
      "stop_lon": -81.264016,
      "stop_sequence": 50,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "WONDRIV1",
      "stop_name": "Wonderland at Riverside NB - #2122",
      "stop_lat": 42.976791,
      "stop_lon": -81.289775,
      "stop_sequence": 56,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "WONDRIV1",
      "stop_name": "Wonderland at Riverside NB - #2122",
      "stop_lat": 42.976791,
      "stop_lon": -81.289775,
      "stop_sequence": 15,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "WONDSAR1",
      "stop_name": "Sarnia at Wonderland WB - #2125",
      "stop_lat": 42.995739,
      "stop_lon": -81.29845,
      "stop_sequence": 21,
      "route_id": "09",
      "route_color": "B36666"
    },
    {
      "stop_id": "WONDSAR1",
      "stop_name": "Sarnia at Wonderland WB - #2125",
      "stop_lat": 42.995739,
      "stop_lon": -81.29845,
      "stop_sequence": 7,
      "route_id": 31,
      "route_color": "00B700"
    },
    {
      "stop_id": "WONDSDA1",
      "stop_name": "Wonderland at Southdale NB - #2128",
      "stop_lat": 42.939594,
      "stop_lon": -81.281397,
      "stop_sequence": 45,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "WONDSPR1",
      "stop_name": "Wonderland at Springbank NB - #2132",
      "stop_lat": 42.964403,
      "stop_lon": -81.293102,
      "stop_sequence": 55,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "WONDTEE1",
      "stop_name": "Wonderland at Teeple Terrance NB - #2134",
      "stop_lat": 42.959046,
      "stop_lon": -81.293315,
      "stop_sequence": 54,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "WONDVIL1",
      "stop_name": "Wonderland at Village Green NB - #2135",
      "stop_lat": 42.95074,
      "stop_lon": -81.289716,
      "stop_sequence": 3,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "WONDVIL1",
      "stop_name": "Wonderland at Village Green NB - #2135",
      "stop_lat": 42.95074,
      "stop_lon": -81.289716,
      "stop_sequence": 51,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "WONDVIL2",
      "stop_name": "Wonderland at VillageGreen Ave SB - #2136",
      "stop_lat": 42.951463,
      "stop_lon": -81.290115,
      "stop_sequence": 37,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "WONDVIS3",
      "stop_name": "780 Wonderland Rd NB - #2139",
      "stop_lat": 42.948946,
      "stop_lon": -81.289303,
      "stop_sequence": 2,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "WONDVIS3",
      "stop_name": "780 Wonderland Rd NB - #2139",
      "stop_lat": 42.948946,
      "stop_lon": -81.289303,
      "stop_sequence": 50,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "BASEWES4",
      "stop_name": "90 Base Line WB - #214",
      "stop_lat": 42.958764,
      "stop_lon": -81.267069,
      "stop_sequence": 51,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "WOODCAM1",
      "stop_name": "Woodward at Cambridge NB - #2140",
      "stop_lat": 42.988255,
      "stop_lon": -81.270527,
      "stop_sequence": 12,
      "route_id": "09",
      "route_color": "B36666"
    },
    {
      "stop_id": "WOODCAM2",
      "stop_name": "Woodward at Cambridge SB - #2141",
      "stop_lat": 42.988327,
      "stop_lon": -81.270649,
      "stop_sequence": 27,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "WOODEDI1",
      "stop_name": "Woodward at Edinburgh  NB - #2142",
      "stop_lat": 42.986836,
      "stop_lon": -81.269791,
      "stop_sequence": 11,
      "route_id": "09",
      "route_color": "B36666"
    },
    {
      "stop_id": "WOODEDI2",
      "stop_name": "Woodward at Edinburgh SB - #2143",
      "stop_lat": 42.986627,
      "stop_lon": -81.269737,
      "stop_sequence": 28,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "WOODRIVE",
      "stop_name": "Woodward at Riverside  NB - #2144",
      "stop_lat": 42.983507,
      "stop_lon": -81.269484,
      "stop_sequence": 10,
      "route_id": "09",
      "route_color": "B36666"
    },
    {
      "stop_id": "WOODTOZ2",
      "stop_name": "Woodward at Tozer Ave SB - #2146",
      "stop_lat": 42.984804,
      "stop_lon": -81.269627,
      "stop_sequence": 29,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "YORKADE1",
      "stop_name": "York at Adelaide EB - #2154",
      "stop_lat": 42.986345,
      "stop_lon": -81.230015,
      "stop_sequence": 36,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "YORKCOL1",
      "stop_name": "York at Colborne EB - #2157",
      "stop_lat": 42.984043,
      "stop_lon": -81.238324,
      "stop_sequence": 33,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "BASEWHA2",
      "stop_name": "Base Line at Wharncliffe WB - #216",
      "stop_lat": 42.959398,
      "stop_lon": -81.260128,
      "stop_sequence": 49,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "YORKLYL1",
      "stop_name": "York at Lyle EB - #2161",
      "stop_lat": 42.987086,
      "stop_lon": -81.227262,
      "stop_sequence": 37,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "YORKMAI1",
      "stop_name": "York at Maitland EB - #2163",
      "stop_lat": 42.984718,
      "stop_lon": -81.235931,
      "stop_sequence": 34,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "YORKREC1",
      "stop_name": "York at Rectory EB - #2165",
      "stop_lat": 42.987526,
      "stop_lon": -81.222993,
      "stop_sequence": 38,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "YORKTHA1",
      "stop_name": "York at Thames EB - #2170",
      "stop_lat": 42.979448,
      "stop_lon": -81.255056,
      "stop_sequence": 25,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "YORKTHA2",
      "stop_name": "York at Thames WB - #2171",
      "stop_lat": 42.979536,
      "stop_lon": -81.255353,
      "stop_sequence": 46,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "YORKWAT1",
      "stop_name": "York at Waterloo EB - #2172",
      "stop_lat": 42.983467,
      "stop_lon": -81.240461,
      "stop_sequence": 32,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "YORKWIL1",
      "stop_name": "York at William EB - #2175",
      "stop_lat": 42.985372,
      "stop_lon": -81.233601,
      "stop_sequence": 35,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "YXUTERM",
      "stop_name": "London Airport - #2179",
      "stop_lat": 43.027719,
      "stop_lon": -81.148702,
      "stop_sequence": 17,
      "route_id": 36,
      "route_color": "B43D61"
    },
    {
      "stop_id": "ADELWILL",
      "stop_name": "Adelaide at Willowdale SB - #2186",
      "stop_lat": 43.02927,
      "stop_lon": -81.251929,
      "stop_sequence": 10,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "AMBLGRN2",
      "stop_name": "Ambleside at Grangeover WB - #2190",
      "stop_lat": 43.016439,
      "stop_lon": -81.290811,
      "stop_sequence": 43,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "BERKBER1",
      "stop_name": "Berkshire at Berkshire Place NB - #2195",
      "stop_lat": 42.962777,
      "stop_lon": -81.288488,
      "stop_sequence": 58,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "BRADWIL4",
      "stop_name": "Bradley at Willow 2 WB - #2205",
      "stop_lat": 42.934989,
      "stop_lon": -81.218937,
      "stop_sequence": 25,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "BRADWOPS",
      "stop_name": "White Oaks Elementary School - #2206",
      "stop_lat": 42.9342,
      "stop_lon": -81.232633,
      "stop_sequence": 13,
      "route_id": 28,
      "route_color": "5555FF"
    },
    {
      "stop_id": "BRADWOPS",
      "stop_name": "White Oaks Elementary School - #2206",
      "stop_lat": 42.9342,
      "stop_lon": -81.232633,
      "stop_sequence": 29,
      "route_id": 93,
      "route_color": "FF8000"
    },
    {
      "stop_id": "BRYDCORN",
      "stop_name": "Brydges at Cornish EB - #2207",
      "stop_lat": 42.991416,
      "stop_lon": -81.192435,
      "stop_sequence": 48,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "CHEABRA2",
      "stop_name": "Cheapside at Elliott WB - #2209",
      "stop_lat": 43.007531,
      "stop_lon": -81.235149,
      "stop_sequence": 20,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "CLARWHI2",
      "stop_name": "Clarke at Whitney SB - #2212",
      "stop_lat": 43.002719,
      "stop_lon": -81.174882,
      "stop_sequence": 70,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "COMMMED2",
      "stop_name": "Commissioners at Meadowlilly WB - #2216",
      "stop_lat": 42.963598,
      "stop_lon": -81.186234,
      "stop_sequence": 8,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "FANCOLL2",
      "stop_name": "Fanshawe College Stop 2 - #2223",
      "stop_lat": 43.010981,
      "stop_lon": -81.200959,
      "stop_sequence": 1,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "FANCOLL2",
      "stop_name": "Fanshawe College Stop 2 - #2223",
      "stop_lat": 43.010981,
      "stop_lon": -81.200959,
      "stop_sequence": 25,
      "route_id": 104,
      "route_color": "C58AFF"
    },
    {
      "stop_id": "FANCOLL3",
      "stop_name": "Fanshawe College Stop 3 - #2224",
      "stop_lat": 43.011058,
      "stop_lon": -81.20068,
      "stop_sequence": 61,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "FANCOLL3",
      "stop_name": "Fanshawe College Stop 3 - #2224",
      "stop_lat": 43.011058,
      "stop_lon": -81.20068,
      "stop_sequence": 1,
      "route_id": 36,
      "route_color": "B43D61"
    },
    {
      "stop_id": "FANCOLL4",
      "stop_name": "Fanshawe College Stop 5 - #2225",
      "stop_lat": 43.013262,
      "stop_lon": -81.199206,
      "stop_sequence": 1,
      "route_id": 25,
      "route_color": "DFDF00"
    },
    {
      "stop_id": "FANCOLL4",
      "stop_name": "Fanshawe College Stop 5 - #2225",
      "stop_lat": 43.013262,
      "stop_lon": -81.199206,
      "stop_sequence": 1,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "FCBLCHE1",
      "stop_name": "Fanshawe College Blvd at Cheapside NB - #2228",
      "stop_lat": 43.016753,
      "stop_lon": -81.201572,
      "stop_sequence": 3,
      "route_id": 25,
      "route_color": "DFDF00"
    },
    {
      "stop_id": "FCBLCHE1",
      "stop_name": "Fanshawe College Blvd at Cheapside NB - #2228",
      "stop_lat": 43.016753,
      "stop_lon": -81.201572,
      "stop_sequence": 3,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "BEACBAS2",
      "stop_name": "Beachwood at Base Line SB - #223",
      "stop_lat": 42.957706,
      "stop_lon": -81.275411,
      "stop_sequence": 53,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "FCBLFLE1",
      "stop_name": "Fanshawe College Blvd at Fleming NB - #2230",
      "stop_lat": 43.015534,
      "stop_lon": -81.198241,
      "stop_sequence": 2,
      "route_id": 25,
      "route_color": "DFDF00"
    },
    {
      "stop_id": "FCBLFLE1",
      "stop_name": "Fanshawe College Blvd at Fleming NB - #2230",
      "stop_lat": 43.015534,
      "stop_lon": -81.198241,
      "stop_sequence": 2,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "HIGBKIL1",
      "stop_name": "Highbury at Kilally NB - #2234",
      "stop_lat": 43.030903,
      "stop_lon": -81.220945,
      "stop_sequence": 12,
      "route_id": 25,
      "route_color": "DFDF00"
    },
    {
      "stop_id": "HIGVWHA3",
      "stop_name": "89 Highview - #2236",
      "stop_lat": 42.953949,
      "stop_lon": -81.257261,
      "stop_sequence": 14,
      "route_id": 93,
      "route_color": "FF8000"
    },
    {
      "stop_id": "HORTCOL1",
      "stop_name": "Horton at Colborne WB - #2239",
      "stop_lat": 42.981884,
      "stop_lon": -81.236955,
      "stop_sequence": 35,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "HORTCOL1",
      "stop_name": "Horton at Colborne WB - #2239",
      "stop_lat": 42.981884,
      "stop_lon": -81.236955,
      "stop_sequence": 36,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "BEAVBLYT",
      "stop_name": "Beaverbrook at Blythwood WB - #224",
      "stop_lat": 42.989057,
      "stop_lon": -81.298029,
      "stop_sequence": 1,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "BEAVBLYT",
      "stop_name": "Beaverbrook at Blythwood WB - #224",
      "stop_lat": 42.989057,
      "stop_lon": -81.298029,
      "stop_sequence": 35,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "HORTCOL2",
      "stop_name": "Horton at Colborne EB - #2240",
      "stop_lat": 42.981597,
      "stop_lon": -81.237487,
      "stop_sequence": 33,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "LAWSBLF2",
      "stop_name": "Lawson at Blue Forest WB - #2249",
      "stop_lat": 43.000438,
      "stop_lon": -81.302044,
      "stop_sequence": 22,
      "route_id": "09",
      "route_color": "B36666"
    },
    {
      "stop_id": "MORNCON3",
      "stop_name": "590 Mornington EB - #2251",
      "stop_lat": 43.00473,
      "stop_lon": -81.211838,
      "stop_sequence": 56,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "PINNFAN1",
      "stop_name": "Pinnacle Parkway at Fanshawe NB - #2259",
      "stop_lat": 43.021158,
      "stop_lon": -81.299333,
      "stop_sequence": 46,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "BEAVOXF1",
      "stop_name": "Beaverbrook at Oxford NB - #226",
      "stop_lat": 42.987086,
      "stop_lon": -81.281034,
      "stop_sequence": 20,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "PONDBRA4",
      "stop_name": "Pond Mills south of Bradley 2 SB - #2262",
      "stop_lat": 42.937239,
      "stop_lon": -81.191571,
      "stop_sequence": 13,
      "route_id": 30,
      "route_color": "CF2985"
    },
    {
      "stop_id": "RIDGKER2",
      "stop_name": "Ridgewood at Kernohan WB - #2272",
      "stop_lat": 42.967875,
      "stop_lon": -81.280991,
      "stop_sequence": 54,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "TRAFFAL2",
      "stop_name": "Trafalgar at Falcon  EB - #2279",
      "stop_lat": 42.990638,
      "stop_lon": -81.175968,
      "stop_sequence": 45,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "VICZONC",
      "stop_name": "Victoria Hospital & Zone A EB - #2284",
      "stop_lat": 42.959493,
      "stop_lon": -81.226954,
      "stop_sequence": 19,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "WESTPHA1",
      "stop_name": "Western South of Phillip Aziz NB - #2290",
      "stop_lat": 43.00025,
      "stop_lon": -81.276229,
      "stop_sequence": 16,
      "route_id": "09",
      "route_color": "B36666"
    },
    {
      "stop_id": "WESTPHA3",
      "stop_name": "Western North of Phillip Aziz  NB - #2291",
      "stop_lat": 43.002615,
      "stop_lon": -81.276459,
      "stop_sequence": 68,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "WESTTHO1",
      "stop_name": "Westminster at Thompson Rd NB - #2292",
      "stop_lat": 42.967501,
      "stop_lon": -81.224994,
      "stop_sequence": 45,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "WHARHORT",
      "stop_name": "Wharncliffe at Horton SB - #2293",
      "stop_lat": 42.975906,
      "stop_lon": -81.262288,
      "stop_sequence": 7,
      "route_id": 12,
      "route_color": "CA95FF"
    },
    {
      "stop_id": "WHOKMANB",
      "stop_name": "Jalna at White Oaks Mall NB - #2295",
      "stop_lat": 42.931158,
      "stop_lon": -81.227254,
      "stop_sequence": 63,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "WHOKMASB",
      "stop_name": "Jalna at White Oaks Mall SB - #2296",
      "stop_lat": 42.931102,
      "stop_lon": -81.227399,
      "stop_sequence": 31,
      "route_id": 93,
      "route_color": "FF8000"
    },
    {
      "stop_id": "ADELCEN2",
      "stop_name": "Adelaide at Central  SB - #23",
      "stop_lat": 42.99494,
      "stop_lon": -81.234663,
      "stop_sequence": 22,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "WONDVIS4",
      "stop_name": "Wonderland at Viscount Rd SB - #2305",
      "stop_lat": 42.947805,
      "stop_lon": -81.28928,
      "stop_sequence": 38,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "BLUESUN1",
      "stop_name": "Bluebell at Sunningdale NB - #2309",
      "stop_lat": 43.042783,
      "stop_lon": -81.273013,
      "stop_sequence": 55,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "DUNDVMP1",
      "stop_name": "Dundas at VMP EB - #2314",
      "stop_lat": 43.009974,
      "stop_lon": -81.156251,
      "stop_sequence": 7,
      "route_id": 37,
      "route_color": "0098E1"
    },
    {
      "stop_id": "HAMIWIL2",
      "stop_name": "Hamilton at William WB - #2318",
      "stop_lat": 42.98248,
      "stop_lon": -81.231086,
      "stop_sequence": 33,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "HAMIWIL2",
      "stop_name": "Hamilton at William WB - #2318",
      "stop_lat": 42.98248,
      "stop_lon": -81.231086,
      "stop_sequence": 34,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "WONDSAR2",
      "stop_name": "Wonderland South of Sarnia  SB - #2322",
      "stop_lat": 42.994507,
      "stop_lon": -81.298298,
      "stop_sequence": 34,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "BRADADE4",
      "stop_name": "Bradley between Adelaide & Willow WB - #2324",
      "stop_lat": 42.935836,
      "stop_lon": -81.21345,
      "stop_sequence": 23,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "BRADWEL1",
      "stop_name": "Bradley west of Wellington Rd EB - #2326",
      "stop_lat": 42.934247,
      "stop_lon": -81.224411,
      "stop_sequence": 15,
      "route_id": 28,
      "route_color": "5555FF"
    },
    {
      "stop_id": "CLARAVA2",
      "stop_name": "Clarke at Avalon SB - #2329",
      "stop_lat": 43.006869,
      "stop_lon": -81.176986,
      "stop_sequence": 68,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "FANCOLL1",
      "stop_name": "Fanshawe College Stop 1 - #2331",
      "stop_lat": 43.011,
      "stop_lon": -81.200713,
      "stop_sequence": 54,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "FANCOLL1",
      "stop_name": "Fanshawe College Stop 1 - #2331",
      "stop_lat": 43.011,
      "stop_lon": -81.200713,
      "stop_sequence": 10,
      "route_id": 91,
      "route_color": "FF8000"
    },
    {
      "stop_id": "NEWBBRA1",
      "stop_name": "Newbold at Bradley NB - #2335",
      "stop_lat": 42.936267,
      "stop_lon": -81.201488,
      "stop_sequence": 11,
      "route_id": 30,
      "route_color": "CF2985"
    },
    {
      "stop_id": "BELMHILL",
      "stop_name": "Belmont at Hillsborough EB - #234",
      "stop_lat": 42.947155,
      "stop_lon": -81.261834,
      "stop_sequence": 23,
      "route_id": 12,
      "route_color": "CA95FF"
    },
    {
      "stop_id": "FOREHIL1",
      "stop_name": "Proudfoot at Forest Hills EB - #2341",
      "stop_lat": 42.983223,
      "stop_lon": -81.284753,
      "stop_sequence": 18,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "BELMNODA",
      "stop_name": "Belmont at Notre Dame EB - #235",
      "stop_lat": 42.946298,
      "stop_lon": -81.26779,
      "stop_sequence": 21,
      "route_id": 12,
      "route_color": "CA95FF"
    },
    {
      "stop_id": "BELMSLAW",
      "stop_name": "Belmont at St Lawrence EB - #236",
      "stop_lat": 42.946828,
      "stop_lon": -81.264574,
      "stop_sequence": 22,
      "route_id": 12,
      "route_color": "CA95FF"
    },
    {
      "stop_id": "BELMWHAR",
      "stop_name": "Belmont at Wharncliffe EB - #237",
      "stop_lat": 42.947323,
      "stop_lon": -81.259069,
      "stop_sequence": 24,
      "route_id": 12,
      "route_color": "CA95FF"
    },
    {
      "stop_id": "BEAVCAP2",
      "stop_name": "Beaverbrook at Capulet EB - #2384",
      "stop_lat": 42.988147,
      "stop_lon": -81.300551,
      "stop_sequence": 11,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "BEAVOAKC",
      "stop_name": "Beaverbrook at Oakcrossing east WB - #2385",
      "stop_lat": 42.986876,
      "stop_lon": -81.3057,
      "stop_sequence": 3,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "BEAVSARN",
      "stop_name": "Sarnia at Beaverbrook EB - #2387",
      "stop_lat": 42.990416,
      "stop_lon": -81.316309,
      "stop_sequence": 6,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "BEAVWILR",
      "stop_name": "Beaverbrook at Wild Rose WB - #2388",
      "stop_lat": 42.988158,
      "stop_lon": -81.314946,
      "stop_sequence": 5,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "BEAVWON1",
      "stop_name": "Beaverbrook at Wonderland EB - #2389",
      "stop_lat": 42.989248,
      "stop_lon": -81.29701,
      "stop_sequence": 12,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "CAPUOXFO",
      "stop_name": "Capulet Lane at Oxford SB - #2390",
      "stop_lat": 42.983768,
      "stop_lon": -81.296612,
      "stop_sequence": 39,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "CAPUOXFO",
      "stop_name": "Capulet Lane at Oxford SB - #2390",
      "stop_lat": 42.983768,
      "stop_lon": -81.296612,
      "stop_sequence": 1,
      "route_id": 91,
      "route_color": "FF8000"
    },
    {
      "stop_id": "CRUMOXFO",
      "stop_name": "Crumlin at Oxford NB - #2393",
      "stop_lat": 43.023581,
      "stop_lon": -81.153353,
      "stop_sequence": 16,
      "route_id": 36,
      "route_color": "B43D61"
    },
    {
      "stop_id": "CUDDARTI",
      "stop_name": "Cuddy at Artisans SB - #2394",
      "stop_lat": 43.021531,
      "stop_lon": -81.155978,
      "stop_sequence": 12,
      "route_id": 36,
      "route_color": "B43D61"
    },
    {
      "stop_id": "CUDDPAGE",
      "stop_name": "Cuddy at Page SB - #2395",
      "stop_lat": 43.018061,
      "stop_lon": -81.154256,
      "stop_sequence": 13,
      "route_id": 36,
      "route_color": "B43D61"
    },
    {
      "stop_id": "HYDEGAI1",
      "stop_name": "Hyde Park at Gainsborough NB - #2397",
      "stop_lat": 42.999555,
      "stop_lon": -81.332379,
      "stop_sequence": 35,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "BERKGAR1",
      "stop_name": "Berkshire at Gardenwood NB - #240",
      "stop_lat": 42.962686,
      "stop_lon": -81.285332,
      "stop_sequence": 57,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "HYDEOXF3",
      "stop_name": "Hyde Park north of Oxford NB - #2400",
      "stop_lat": 42.976599,
      "stop_lon": -81.320755,
      "stop_sequence": 29,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "HYDEPRIP",
      "stop_name": "Hyde Park at Prince Phillip NB - #2401",
      "stop_lat": 42.983037,
      "stop_lon": -81.324041,
      "stop_sequence": 32,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "HYDEROY1",
      "stop_name": "Hyde Park at Royal York NB - #2402",
      "stop_lat": 42.978095,
      "stop_lon": -81.321505,
      "stop_sequence": 30,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "HYDESCA1",
      "stop_name": "Hyde Park at South Carriage NB - #2404",
      "stop_lat": 42.995536,
      "stop_lon": -81.330459,
      "stop_sequence": 34,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "OAKCMAP1",
      "stop_name": "Oakcrossing at Mapleridge north - #2407",
      "stop_lat": 42.991285,
      "stop_lon": -81.307739,
      "stop_sequence": 8,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "OAKCMAP2",
      "stop_name": "Oakcrossing at Mapleridge south - #2408",
      "stop_lat": 42.988703,
      "stop_lon": -81.305456,
      "stop_sequence": 9,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "OAKCOAKC",
      "stop_name": "Oakcrossing Gate at Oakcrossing Rd SB - #2409",
      "stop_lat": 42.990626,
      "stop_lon": -81.31165,
      "stop_sequence": 7,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "OXFOVMPW",
      "stop_name": "Oxford at Veterans EB - #2410",
      "stop_lat": 43.022426,
      "stop_lon": -81.159591,
      "stop_sequence": 11,
      "route_id": 36,
      "route_color": "B43D61"
    },
    {
      "stop_id": "PAGECUDD",
      "stop_name": "Page at Cuddy EB - #2411",
      "stop_lat": 43.017674,
      "stop_lon": -81.152605,
      "stop_sequence": 14,
      "route_id": 36,
      "route_color": "B43D61"
    },
    {
      "stop_id": "SOVEADM1",
      "stop_name": "Sovereign at Admiral NB - #2412",
      "stop_lat": 43.00452,
      "stop_lon": -81.150482,
      "stop_sequence": 8,
      "route_id": 37,
      "route_color": "0098E1"
    },
    {
      "stop_id": "SOVEADM3",
      "stop_name": "Sovereign North of Admiral SB - #2413",
      "stop_lat": 43.005617,
      "stop_lon": -81.147772,
      "stop_sequence": 10,
      "route_id": 37,
      "route_color": "0098E1"
    },
    {
      "stop_id": "SOVESOVE",
      "stop_name": "669 Sovereign NB - #2414",
      "stop_lat": 43.00778,
      "stop_lon": -81.151293,
      "stop_sequence": 9,
      "route_id": 37,
      "route_color": "0098E1"
    },
    {
      "stop_id": "BEAVCAP1",
      "stop_name": "Beaverbrook at Capulet WB - #2415",
      "stop_lat": 42.988455,
      "stop_lon": -81.299991,
      "stop_sequence": 2,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "BEAVCAP1",
      "stop_name": "Beaverbrook at Capulet WB - #2415",
      "stop_lat": 42.988455,
      "stop_lon": -81.299991,
      "stop_sequence": 36,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "BEAVHOR2",
      "stop_name": "Beaverbrook at Horizon EB - #2417",
      "stop_lat": 42.990257,
      "stop_lon": -81.293584,
      "stop_sequence": 13,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "BEAVPROU",
      "stop_name": "Beaverbrook at Proudfoot EB - #2418",
      "stop_lat": 42.990798,
      "stop_lon": -81.29173,
      "stop_sequence": 14,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "SEAGHYP1",
      "stop_name": "Seagull at Hyde Park EB - #2419",
      "stop_lat": 43.008561,
      "stop_lon": -81.335487,
      "stop_sequence": 37,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "BERKROB1",
      "stop_name": "Berkshire at Robin NB - #242",
      "stop_lat": 42.960797,
      "stop_lon": -81.282859,
      "stop_sequence": 8,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "STANFAN1",
      "stop_name": "Stanton at Fanshawe Park Rd NB - #2421",
      "stop_lat": 43.010842,
      "stop_lon": -81.333697,
      "stop_sequence": 38,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "VICTZON7",
      "stop_name": "Victoria Hospital at Zone E WB - #2423",
      "stop_lat": 42.961601,
      "stop_lon": -81.224164,
      "stop_sequence": 4,
      "route_id": "06",
      "route_color": "008080"
    },
    {
      "stop_id": "THISSWEN",
      "stop_name": "Thistlewood at South Wenige EB - #2435",
      "stop_lat": 43.046989,
      "stop_lon": -81.253405,
      "stop_sequence": 60,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "WESTMAL5",
      "stop_name": "Westmount Mall at Stop 5 - #2437",
      "stop_lat": 42.9473,
      "stop_lon": -81.292217,
      "stop_sequence": 1,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "WESTMAL6",
      "stop_name": "Westmount Mall at Stop 6 - #2438",
      "stop_lat": 42.947352,
      "stop_lon": -81.291827,
      "stop_sequence": 49,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "BERKSPR1",
      "stop_name": "Berkshire at Springbank NB - #244",
      "stop_lat": 42.964044,
      "stop_lon": -81.290657,
      "stop_sequence": 59,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "PONDSCE2",
      "stop_name": "Pond Mills north of Scenic SB - #2449",
      "stop_lat": 42.972444,
      "stop_lon": -81.209591,
      "stop_sequence": 51,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "SHELODEL",
      "stop_name": "Shelbourne between Burlington and Deveron EB - #2452",
      "stop_lat": 42.96255,
      "stop_lon": -81.19923,
      "stop_sequence": 56,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "BERKTOP1",
      "stop_name": "Berkshire at Topping Lane NB - #246",
      "stop_lat": 42.959633,
      "stop_lon": -81.283813,
      "stop_sequence": 7,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "COMMBEA1",
      "stop_name": "Commissioners at Beachwood WB - #2461",
      "stop_lat": 42.956137,
      "stop_lon": -81.276837,
      "stop_sequence": 32,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "COMMBEA3",
      "stop_name": "353 Commissioners - #2463",
      "stop_lat": 42.955854,
      "stop_lon": -81.279878,
      "stop_sequence": 33,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "COMMFOE1",
      "stop_name": "Commissioners at Forest Edge WB - #2464",
      "stop_lat": 42.954813,
      "stop_lon": -81.287851,
      "stop_sequence": 35,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "COMMFOE2",
      "stop_name": "Commissioners at Forest Edge EB - #2465",
      "stop_lat": 42.954529,
      "stop_lon": -81.288286,
      "stop_sequence": 5,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "COMMTOP1",
      "stop_name": "Commissioners at Topping Lane WB - #2466",
      "stop_lat": 42.955326,
      "stop_lon": -81.284038,
      "stop_sequence": 34,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "DARNMEAD",
      "stop_name": "Darnley at Meadowgate EB - #2468",
      "stop_lat": 42.954763,
      "stop_lon": -81.173716,
      "stop_sequence": 1,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "GLENGLE2",
      "stop_name": "Glenora at Glengarry WB - #2472",
      "stop_lat": 43.031788,
      "stop_lon": -81.243471,
      "stop_sequence": 21,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "GLENRID2",
      "stop_name": "Glenora at Rideau WB - #2475",
      "stop_lat": 43.035027,
      "stop_lon": -81.236915,
      "stop_sequence": 20,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "LIGHEMER",
      "stop_name": "Lighthouse at Emerald NB - #2476",
      "stop_lat": 42.958934,
      "stop_lon": -81.171508,
      "stop_sequence": 3,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "LIGHREAR",
      "stop_name": "Lighthouse at Reardon NB - #2477",
      "stop_lat": 42.960028,
      "stop_lon": -81.171739,
      "stop_sequence": 4,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "LIGHWHSA",
      "stop_name": "Lighthouse at White Sands NB - #2478",
      "stop_lat": 42.956574,
      "stop_lon": -81.170588,
      "stop_sequence": 2,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "REARCHE1",
      "stop_name": "Reardon at Chelton WB - #2486",
      "stop_lat": 42.96102,
      "stop_lon": -81.174192,
      "stop_sequence": 5,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "HYDESAR1",
      "stop_name": "Hyde Park at Sarnia NB - #2493",
      "stop_lat": 42.989005,
      "stop_lon": -81.327212,
      "stop_sequence": 33,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "ADELCHE2",
      "stop_name": "Adelaide at Cheapside SB - #25",
      "stop_lat": 43.005866,
      "stop_lon": -81.240088,
      "stop_sequence": 16,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "BES1EXET",
      "stop_name": "Bessemer at Exeter NB - #250",
      "stop_lat": 42.927041,
      "stop_lon": -81.212835,
      "stop_sequence": 4,
      "route_id": 30,
      "route_color": "CF2985"
    },
    {
      "stop_id": "BESSBES3",
      "stop_name": "Bessemer at Bessemer Crt 2 NB - #252",
      "stop_lat": 42.932033,
      "stop_lon": -81.211985,
      "stop_sequence": 6,
      "route_id": 30,
      "route_color": "CF2985"
    },
    {
      "stop_id": "BESSHAR1",
      "stop_name": "Bessemer at Hargrieve NB - #253",
      "stop_lat": 42.929243,
      "stop_lon": -81.212852,
      "stop_sequence": 5,
      "route_id": 30,
      "route_color": "CF2985"
    },
    {
      "stop_id": "BKWTADE1",
      "stop_name": "Blackwater east of Adelaide EB - #255",
      "stop_lat": 43.043968,
      "stop_lon": -81.258899,
      "stop_sequence": 58,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "BEAVOAK2",
      "stop_name": "Beaverbrook at Oakcrossing west WB - #2575",
      "stop_lat": 42.987393,
      "stop_lon": -81.311797,
      "stop_sequence": 4,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "BLACEDG2",
      "stop_name": "Blackacres at Edgehill Road WB - #262",
      "stop_lat": 43.012332,
      "stop_lon": -81.31207,
      "stop_sequence": 32,
      "route_id": "09",
      "route_color": "B36666"
    },
    {
      "stop_id": "BLACEDG4",
      "stop_name": "Blackacres at Edgehill Cres WB - #263",
      "stop_lat": 43.012802,
      "stop_lon": -81.315024,
      "stop_sequence": 33,
      "route_id": "09",
      "route_color": "B36666"
    },
    {
      "stop_id": "BLACHOM2",
      "stop_name": "Blackacres at Hawthorne NB - #265",
      "stop_lat": 43.009442,
      "stop_lon": -81.310468,
      "stop_sequence": 31,
      "route_id": "09",
      "route_color": "B36666"
    },
    {
      "stop_id": "BLACWOND",
      "stop_name": "Blackacres at Wonderland WB - #267",
      "stop_lat": 43.009924,
      "stop_lon": -81.306375,
      "stop_sequence": 30,
      "route_id": "09",
      "route_color": "B36666"
    },
    {
      "stop_id": "HORTSPRI",
      "stop_name": "Horton at Springbank WB - #2683",
      "stop_lat": 42.975348,
      "stop_lon": -81.269979,
      "stop_sequence": 49,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "BLACWWA2",
      "stop_name": "Blackacres at Winding Way WB - #269",
      "stop_lat": 43.012349,
      "stop_lon": -81.319429,
      "stop_sequence": 34,
      "route_id": "09",
      "route_color": "B36666"
    },
    {
      "stop_id": "WHITOMA4",
      "stop_name": "White Oaks Mall Stop 4 - #2733",
      "stop_lat": 42.932158,
      "stop_lon": -81.223251,
      "stop_sequence": 28,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "BOLECOM3",
      "stop_name": "Boler north of Commissioners  NB - #277",
      "stop_lat": 42.960072,
      "stop_lon": -81.332683,
      "stop_sequence": 8,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "ADELDUN2",
      "stop_name": "Adelaide at Dundas SB - #28",
      "stop_lat": 42.988343,
      "stop_lon": -81.231467,
      "stop_sequence": 27,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "BONANAPO",
      "stop_name": "Bonaventure at Napoleon Cr SB - #284",
      "stop_lat": 43.000429,
      "stop_lon": -81.154082,
      "stop_sequence": 12,
      "route_id": 35,
      "route_color": "DBC004"
    },
    {
      "stop_id": "BONATRA2",
      "stop_name": "Bonaventure at Trafalgar SB - #287",
      "stop_lat": 42.997744,
      "stop_lon": -81.153783,
      "stop_sequence": 13,
      "route_id": 35,
      "route_color": "DBC004"
    },
    {
      "stop_id": "ADELEDNA",
      "stop_name": "Adelaide at Edna SB - #29",
      "stop_lat": 42.971883,
      "stop_lon": -81.224342,
      "stop_sequence": 32,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "BOWBANC",
      "stop_name": "Bow at Bancroft EB - #290",
      "stop_lat": 42.991759,
      "stop_lon": -81.16023,
      "stop_sequence": 60,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "BRADADE2",
      "stop_name": "Bradley at Adelaide  WB - #292",
      "stop_lat": 42.935976,
      "stop_lon": -81.209553,
      "stop_sequence": 22,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "BRADAGN2",
      "stop_name": "Bradley at Willow 1 WB - #293",
      "stop_lat": 42.935252,
      "stop_lon": -81.216461,
      "stop_sequence": 24,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "BRADDEAR",
      "stop_name": "Bradley at Dearness WB - #294",
      "stop_lat": 42.93475,
      "stop_lon": -81.221688,
      "stop_sequence": 26,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "BRADDEAR",
      "stop_name": "Bradley at Dearness WB - #294",
      "stop_lat": 42.93475,
      "stop_lon": -81.221688,
      "stop_sequence": 66,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "BRADERNE",
      "stop_name": "Bradley at Ernest Ave EB - #295",
      "stop_lat": 42.93429,
      "stop_lon": -81.237428,
      "stop_sequence": 12,
      "route_id": 28,
      "route_color": "5555FF"
    },
    {
      "stop_id": "BRADERNE",
      "stop_name": "Bradley at Ernest Ave EB - #295",
      "stop_lat": 42.93429,
      "stop_lon": -81.237428,
      "stop_sequence": 28,
      "route_id": 93,
      "route_color": "FF8000"
    },
    {
      "stop_id": "BRADJALN",
      "stop_name": "Bradley at Jalna EB - #296",
      "stop_lat": 42.934325,
      "stop_lon": -81.240431,
      "stop_sequence": 27,
      "route_id": 93,
      "route_color": "FF8000"
    },
    {
      "stop_id": "BRIAHURO",
      "stop_name": "Briarhill at Huron SB - #300",
      "stop_lat": 43.016976,
      "stop_lon": -81.226235,
      "stop_sequence": 8,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "BRIAMEL2",
      "stop_name": "Briarhill north of Melsandra SB - #302",
      "stop_lat": 43.02038,
      "stop_lon": -81.227859,
      "stop_sequence": 6,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "BRYDHAL1",
      "stop_name": "Brydges at Hale EB - #305",
      "stop_lat": 42.990508,
      "stop_lon": -81.195478,
      "stop_sequence": 47,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "BRYDHIG3",
      "stop_name": "Brydges at Highbury  EB - #309",
      "stop_lat": 42.989035,
      "stop_lon": -81.19957,
      "stop_sequence": 46,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "BURLPOMI",
      "stop_name": "Burlington at Pond Mills EB - #313",
      "stop_lat": 42.963336,
      "stop_lon": -81.201285,
      "stop_sequence": 54,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "ADELFAN2",
      "stop_name": "Adelaide at Fanshawe Pk Rd SB - #32",
      "stop_lat": 43.034328,
      "stop_lon": -81.254625,
      "stop_sequence": 8,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "CAPUBLSM",
      "stop_name": "Capulet Lane at Blacksmith SB - #321",
      "stop_lat": 42.987537,
      "stop_lon": -81.299896,
      "stop_sequence": 37,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "CAPUCAPW",
      "stop_name": "Capulet Lane at Capulet Walk SB - #322",
      "stop_lat": 42.985177,
      "stop_lon": -81.298375,
      "stop_sequence": 38,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "CARFCAR1",
      "stop_name": "Carfrae at Carfrae NB - #323",
      "stop_lat": 42.974211,
      "stop_lon": -81.245171,
      "stop_sequence": 15,
      "route_id": "06",
      "route_color": "008080"
    },
    {
      "stop_id": "CARFGRAN",
      "stop_name": "Carfrae at Grand NB - #325",
      "stop_lat": 42.971887,
      "stop_lon": -81.244635,
      "stop_sequence": 14,
      "route_id": "06",
      "route_color": "008080"
    },
    {
      "stop_id": "CHAMSAND",
      "stop_name": "Chambers at Sandybrook NB - #341",
      "stop_lat": 43.039748,
      "stop_lon": -81.270162,
      "stop_sequence": 53,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "CHAMSKYL",
      "stop_name": "Chambers at Skyline NB - #342",
      "stop_lat": 43.041719,
      "stop_lon": -81.271282,
      "stop_sequence": 54,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "CHEAADE2",
      "stop_name": "Cheapside west of Adelaide WB - #345",
      "stop_lat": 43.006102,
      "stop_lon": -81.240697,
      "stop_sequence": 15,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "CHEAADE2",
      "stop_name": "Cheapside west of Adelaide WB - #345",
      "stop_lat": 43.006102,
      "stop_lon": -81.240697,
      "stop_sequence": 22,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "CHEAADE4",
      "stop_name": "Cheapside east of Adelaide WB - #346",
      "stop_lat": 43.006567,
      "stop_lon": -81.23826,
      "stop_sequence": 21,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "ADELGRO2",
      "stop_name": "Adelaide at Grosvenor SB - #35",
      "stop_lat": 43.004249,
      "stop_lon": -81.239265,
      "stop_sequence": 17,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "CHEABOU2",
      "stop_name": "Cheapside at Boullee WB - #350",
      "stop_lat": 43.010344,
      "stop_lon": -81.225389,
      "stop_sequence": 17,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "CHEACOL2",
      "stop_name": "Cheapside at Colborne WB - #353",
      "stop_lat": 43.003974,
      "stop_lon": -81.248369,
      "stop_sequence": 25,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "CHEAGAM2",
      "stop_name": "Cheapside at Gammage WB - #355",
      "stop_lat": 43.008478,
      "stop_lon": -81.23179,
      "stop_sequence": 19,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "CHEAMAI2",
      "stop_name": "Cheapside at Maitland WB - #358",
      "stop_lat": 43.004599,
      "stop_lon": -81.246139,
      "stop_sequence": 17,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "CHEAMAI2",
      "stop_name": "Cheapside at Maitland WB - #358",
      "stop_lat": 43.004599,
      "stop_lon": -81.246139,
      "stop_sequence": 24,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "ADELHAMI",
      "stop_name": "Adelaide at Hamilton SB - #36",
      "stop_lat": 42.982275,
      "stop_lon": -81.228829,
      "stop_sequence": 28,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "CHEARICH",
      "stop_name": "Cheapside at Richmond WB - #360",
      "stop_lat": 43.001983,
      "stop_lon": -81.255573,
      "stop_sequence": 27,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "CHEASTER",
      "stop_name": "Cheapside at Sterling WB - #361",
      "stop_lat": 43.009301,
      "stop_lon": -81.228968,
      "stop_sequence": 18,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "CHEAWAT2",
      "stop_name": "Cheapside at Waterloo WB - #365",
      "stop_lat": 43.003196,
      "stop_lon": -81.251129,
      "stop_sequence": 26,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "CHEAWIL2",
      "stop_name": "Cheapside at William WB - #369",
      "stop_lat": 43.005588,
      "stop_lon": -81.242502,
      "stop_sequence": 16,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "CHEAWIL2",
      "stop_name": "Cheapside at William WB - #369",
      "stop_lat": 43.005588,
      "stop_lon": -81.242502,
      "stop_sequence": 23,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "CHERCHC1",
      "stop_name": "Cherryhill at Cherryhill Blvd NB - #372",
      "stop_lat": 42.990935,
      "stop_lon": -81.277884,
      "stop_sequence": 23,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "CHERCHC3",
      "stop_name": "Cherryhill east of Cherryhill Cir EB - #374",
      "stop_lat": 42.99177,
      "stop_lon": -81.275942,
      "stop_sequence": 24,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "CHEROXF1",
      "stop_name": "Cherryhill north of Oxford 1 NB - #378",
      "stop_lat": 42.989354,
      "stop_lon": -81.276458,
      "stop_sequence": 22,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "ADELHIL2",
      "stop_name": "Adelaide at Hill SB - #38",
      "stop_lat": 42.980363,
      "stop_lon": -81.227992,
      "stop_sequence": 29,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "CHERPLA1",
      "stop_name": "Cherryhill at Platts Lane EB - #381",
      "stop_lat": 42.99171,
      "stop_lon": -81.273521,
      "stop_sequence": 25,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "CHIDCHID",
      "stop_name": "Chiddington Ave at Chiddington Gt SB - #384",
      "stop_lat": 42.952254,
      "stop_lon": -81.233581,
      "stop_sequence": 41,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "CHIDHUN1",
      "stop_name": "Chiddington at Huntingdon EB - #385",
      "stop_lat": 42.953491,
      "stop_lon": -81.237051,
      "stop_sequence": 40,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "CHIPAPP2",
      "stop_name": "Chippewa Elementary School - #391",
      "stop_lat": 43.028257,
      "stop_lon": -81.197729,
      "stop_sequence": 4,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "CHIPAPP4",
      "stop_name": "Chippewa at Appache WB - #392",
      "stop_lat": 43.026565,
      "stop_lon": -81.202334,
      "stop_sequence": 6,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "CHIPTREV",
      "stop_name": "Chippewa at Trevor WB - #393",
      "stop_lat": 43.02762,
      "stop_lon": -81.199787,
      "stop_sequence": 5,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "CLARCHA2",
      "stop_name": "Clarke at Charterhouse SB - #396",
      "stop_lat": 42.988142,
      "stop_lon": -81.167747,
      "stop_sequence": 8,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "CLARCHA2",
      "stop_name": "Clarke at Charterhouse SB - #396",
      "stop_lat": 42.988142,
      "stop_lon": -81.167747,
      "stop_sequence": 7,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "CLARCHU1",
      "stop_name": "Clarke at Churchill NB - #398",
      "stop_lat": 43.00102,
      "stop_lon": -81.173848,
      "stop_sequence": 51,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "CLARCHU1",
      "stop_name": "Clarke at Churchill NB - #398",
      "stop_lat": 43.00102,
      "stop_lon": -81.173848,
      "stop_sequence": 54,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "CLARCHU1",
      "stop_name": "Clarke at Churchill NB - #398",
      "stop_lat": 43.00102,
      "stop_lon": -81.173848,
      "stop_sequence": 62,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "CLARCHU2",
      "stop_name": "Clarke at Churchill  SB - #399",
      "stop_lat": 43.000697,
      "stop_lon": -81.173868,
      "stop_sequence": 53,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "CLARCHU2",
      "stop_name": "Clarke at Churchill  SB - #399",
      "stop_lat": 43.000697,
      "stop_lon": -81.173868,
      "stop_sequence": 2,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "CLARCHU2",
      "stop_name": "Clarke at Churchill  SB - #399",
      "stop_lat": 43.000697,
      "stop_lon": -81.173868,
      "stop_sequence": 2,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "CLARCHU2",
      "stop_name": "Clarke at Churchill  SB - #399",
      "stop_lat": 43.000697,
      "stop_lon": -81.173868,
      "stop_sequence": 2,
      "route_id": 35,
      "route_color": "DBC004"
    },
    {
      "stop_id": "ADELHUR2",
      "stop_name": "Adelaide at Huron SB - #40",
      "stop_lat": 43.011146,
      "stop_lon": -81.24272,
      "stop_sequence": 14,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "CLARCULV",
      "stop_name": "Clarke at Culver SB - #400",
      "stop_lat": 43.011313,
      "stop_lon": -81.179156,
      "stop_sequence": 65,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "CLARDUN2",
      "stop_name": "Clarke at Dundas SB - #403",
      "stop_lat": 43.004938,
      "stop_lon": -81.176017,
      "stop_sequence": 69,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "CLARFIS2",
      "stop_name": "Clarke at Firestone SB - #405",
      "stop_lat": 42.98371,
      "stop_lon": -81.165357,
      "stop_sequence": 9,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "CLARFIS2",
      "stop_name": "Clarke at Firestone SB - #405",
      "stop_lat": 42.98371,
      "stop_lon": -81.165357,
      "stop_sequence": 8,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "CLARHERB",
      "stop_name": "Clarke at Herbert SB - #407",
      "stop_lat": 43.009939,
      "stop_lon": -81.178489,
      "stop_sequence": 66,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "CLARPKH2",
      "stop_name": "Clarke at Parkhurst SB - #411",
      "stop_lat": 43.009135,
      "stop_lon": -81.178086,
      "stop_sequence": 67,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "CLARROY1",
      "stop_name": "Clarke at Royal  NB - #412",
      "stop_lat": 42.996122,
      "stop_lon": -81.171725,
      "stop_sequence": 48,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "CLARROY2",
      "stop_name": "Clarke at Royal SB - #413",
      "stop_lat": 42.996934,
      "stop_lon": -81.172318,
      "stop_sequence": 55,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "CLARROY2",
      "stop_name": "Clarke at Royal SB - #413",
      "stop_lat": 42.996934,
      "stop_lon": -81.172318,
      "stop_sequence": 4,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "CLARROY2",
      "stop_name": "Clarke at Royal SB - #413",
      "stop_lat": 42.996934,
      "stop_lon": -81.172318,
      "stop_sequence": 4,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "CLARROY3",
      "stop_name": "Sunrise Baptist Church - #414",
      "stop_lat": 42.997734,
      "stop_lon": -81.172518,
      "stop_sequence": 49,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "CLARSUD2",
      "stop_name": "Clarke at Sudbury SB - #416",
      "stop_lat": 42.994076,
      "stop_lon": -81.17083,
      "stop_sequence": 56,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "CLARSUD2",
      "stop_name": "Clarke at Sudbury SB - #416",
      "stop_lat": 42.994076,
      "stop_lon": -81.17083,
      "stop_sequence": 5,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "CLARTRA1",
      "stop_name": "Clarke north of Trafalgar NB - #417",
      "stop_lat": 42.993016,
      "stop_lon": -81.170087,
      "stop_sequence": 47,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "CLARTRA2",
      "stop_name": "Clarke north of Trafalgar SB - #418",
      "stop_lat": 42.993134,
      "stop_lon": -81.170342,
      "stop_sequence": 6,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "CLARTRA2",
      "stop_name": "Clarke north of Trafalgar SB - #418",
      "stop_lat": 42.993134,
      "stop_lon": -81.170342,
      "stop_sequence": 5,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "CLARTRA4",
      "stop_name": "Clarke south of Trafalgar SB - #419",
      "stop_lat": 42.990993,
      "stop_lon": -81.16926,
      "stop_sequence": 7,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "CLARTRA4",
      "stop_name": "Clarke south of Trafalgar SB - #419",
      "stop_lat": 42.990993,
      "stop_lon": -81.16926,
      "stop_sequence": 6,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "CLARWAV1",
      "stop_name": "Clarke Road Secondary School - #420",
      "stop_lat": 42.999051,
      "stop_lon": -81.172879,
      "stop_sequence": 50,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "CLARWAV1",
      "stop_name": "Clarke Road Secondary School - #420",
      "stop_lat": 42.999051,
      "stop_lon": -81.172879,
      "stop_sequence": 53,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "CLARWAV1",
      "stop_name": "Clarke Road Secondary School - #420",
      "stop_lat": 42.999051,
      "stop_lon": -81.172879,
      "stop_sequence": 61,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "CLARWAV2",
      "stop_name": "Clarke at Wavell SB - #421",
      "stop_lat": 42.998256,
      "stop_lon": -81.172885,
      "stop_sequence": 54,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "CLARWAV2",
      "stop_name": "Clarke at Wavell SB - #421",
      "stop_lat": 42.998256,
      "stop_lon": -81.172885,
      "stop_sequence": 3,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "CLARWAV2",
      "stop_name": "Clarke at Wavell SB - #421",
      "stop_lat": 42.998256,
      "stop_lon": -81.172885,
      "stop_sequence": 3,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "COLBCEN2",
      "stop_name": "Colborne at Central SB - #433",
      "stop_lat": 42.992253,
      "stop_lon": -81.242789,
      "stop_sequence": 24,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "COLBDUFF",
      "stop_name": "Colborne at Dufferin SB - #434",
      "stop_lat": 42.989251,
      "stop_lon": -81.241198,
      "stop_sequence": 26,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "COLBHOPE",
      "stop_name": "Colborne at Hope SB - #436",
      "stop_lat": 42.990934,
      "stop_lon": -81.242065,
      "stop_sequence": 25,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "COLBOXFD",
      "stop_name": "Colborne at Oxford SB - #438",
      "stop_lat": 42.997293,
      "stop_lon": -81.245316,
      "stop_sequence": 21,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "ADELKIP2",
      "stop_name": "Adelaide north of Kipps Lane SB - #44",
      "stop_lat": 43.01775,
      "stop_lon": -81.24618,
      "stop_sequence": 12,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "COLBPAM2",
      "stop_name": "Colborne at Pall Mall SB - #440",
      "stop_lat": 42.994842,
      "stop_lon": -81.244053,
      "stop_sequence": 23,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "COLBPIC2",
      "stop_name": "Colborne at Piccadilly  SB - #442",
      "stop_lat": 42.99633,
      "stop_lon": -81.244841,
      "stop_sequence": 22,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "COMMADE1",
      "stop_name": "Commissioners at Adelaide EB - #445",
      "stop_lat": 42.959153,
      "stop_lon": -81.2149,
      "stop_sequence": 38,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "COMMADE2",
      "stop_name": "Commissioners east of Adelaide WB - #446",
      "stop_lat": 42.959517,
      "stop_lon": -81.214417,
      "stop_sequence": 15,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "COMMADE4",
      "stop_name": "Commissioners west of Adelaide WB - #447",
      "stop_lat": 42.958643,
      "stop_lon": -81.220485,
      "stop_sequence": 16,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "COMMBOL2",
      "stop_name": "Commissioners at Boler WB - #448",
      "stop_lat": 42.959479,
      "stop_lon": -81.331786,
      "stop_sequence": 71,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "COMMDEV2",
      "stop_name": "Commissioners west of Deveron 1 WB - #450",
      "stop_lat": 42.962337,
      "stop_lon": -81.195987,
      "stop_sequence": 6,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "COMMDEV2",
      "stop_name": "Commissioners west of Deveron 1 WB - #450",
      "stop_lat": 42.962337,
      "stop_lon": -81.195987,
      "stop_sequence": 10,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "COMMDEV4",
      "stop_name": "Commissioners west of Deveron 2 WB - #452",
      "stop_lat": 42.962191,
      "stop_lon": -81.1969,
      "stop_sequence": 50,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "COMMDEV6",
      "stop_name": "Commissioners east of Deveron WB - #453",
      "stop_lat": 42.962645,
      "stop_lon": -81.193643,
      "stop_sequence": 5,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "COMMDEV6",
      "stop_name": "Commissioners east of Deveron WB - #453",
      "stop_lat": 42.962645,
      "stop_lon": -81.193643,
      "stop_sequence": 9,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "COMMFRO1",
      "stop_name": "Commissioners at Frontenac EB - #454",
      "stop_lat": 42.960312,
      "stop_lon": -81.20809,
      "stop_sequence": 40,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "COMMFRO2",
      "stop_name": "Commissioners at Frontenac WB - #455",
      "stop_lat": 42.960331,
      "stop_lon": -81.209188,
      "stop_sequence": 13,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "COMMGRD2",
      "stop_name": "Commissioners at Gordon WB - #457",
      "stop_lat": 42.956814,
      "stop_lon": -81.263811,
      "stop_sequence": 15,
      "route_id": 12,
      "route_color": "CA95FF"
    },
    {
      "stop_id": "COMMGRD2",
      "stop_name": "Commissioners at Gordon WB - #457",
      "stop_lat": 42.956814,
      "stop_lon": -81.263811,
      "stop_sequence": 29,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "COMMHAM2",
      "stop_name": "Commissioners east of Halls Mills WB - #458",
      "stop_lat": 42.960372,
      "stop_lon": -81.334565,
      "stop_sequence": 72,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "COMMHUXL",
      "stop_name": "Commissioners at Huxley WB - #461",
      "stop_lat": 42.95665,
      "stop_lon": -81.267432,
      "stop_sequence": 16,
      "route_id": 12,
      "route_color": "CA95FF"
    },
    {
      "stop_id": "COMMHUXL",
      "stop_name": "Commissioners at Huxley WB - #461",
      "stop_lat": 42.95665,
      "stop_lon": -81.267432,
      "stop_sequence": 30,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "COMMKIE1",
      "stop_name": "Commissioners at King Edward EB - #462",
      "stop_lat": 42.960762,
      "stop_lon": -81.205452,
      "stop_sequence": 41,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "COMMKIE2",
      "stop_name": "Commissioners at King Edward WB - #463",
      "stop_lat": 42.960842,
      "stop_lon": -81.205928,
      "stop_sequence": 12,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "COMMLEA1",
      "stop_name": "Commissioners at Leathorne EB - #464",
      "stop_lat": 42.959597,
      "stop_lon": -81.212585,
      "stop_sequence": 39,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "COMMLEA2",
      "stop_name": "Commissioners at Leathorne WB - #465",
      "stop_lat": 42.95983,
      "stop_lon": -81.212451,
      "stop_sequence": 14,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "COMMLYN4",
      "stop_name": "Opposite St George's Parish - #468",
      "stop_lat": 42.958091,
      "stop_lon": -81.326569,
      "stop_sequence": 69,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "ADELKIP6",
      "stop_name": "Adelaide south of Kipps Lane 2 SB - #47",
      "stop_lat": 43.014658,
      "stop_lon": -81.244642,
      "stop_sequence": 13,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "ADELKIP6",
      "stop_name": "Adelaide south of Kipps Lane 2 SB - #47",
      "stop_lat": 43.014658,
      "stop_lon": -81.244642,
      "stop_sequence": 17,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "COMMNOR2",
      "stop_name": "Commissioners at North WB - #472",
      "stop_lat": 42.956876,
      "stop_lon": -81.322416,
      "stop_sequence": 68,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "COMMPOM1",
      "stop_name": "Commissioners west of Pondmills EB - #475",
      "stop_lat": 42.961323,
      "stop_lon": -81.201406,
      "stop_sequence": 42,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "COMMPOM4",
      "stop_name": "Commissioners west of Pondmills WB - #478",
      "stop_lat": 42.9615,
      "stop_lon": -81.20151,
      "stop_sequence": 11,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "COMMSPR2",
      "stop_name": "Commissioners & Springbank Dr WB - #480",
      "stop_lat": 42.955838,
      "stop_lon": -81.318653,
      "stop_sequence": 67,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "COMMSPR4",
      "stop_name": "Commissioners at Springbank Park WB - #481",
      "stop_lat": 42.958611,
      "stop_lon": -81.328577,
      "stop_sequence": 70,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "ADELLEA2",
      "stop_name": "Adelaide at Leathorne SB - #49",
      "stop_lat": 42.961015,
      "stop_lon": -81.217334,
      "stop_sequence": 37,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "CRUMPAGE",
      "stop_name": "Crumlin at Page NB - #490",
      "stop_lat": 43.018673,
      "stop_lon": -81.150931,
      "stop_sequence": 15,
      "route_id": 36,
      "route_color": "B43D61"
    },
    {
      "stop_id": "CULVCLA1",
      "stop_name": "Culver at Clarke EB - #492",
      "stop_lat": 43.013964,
      "stop_lon": -81.180833,
      "stop_sequence": 64,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "CULVCUL1",
      "stop_name": "Culver at Culver Cres EB - #495",
      "stop_lat": 43.00989,
      "stop_lon": -81.184268,
      "stop_sequence": 61,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "CULVCUL3",
      "stop_name": "Culver east of Culver Place EB - #496",
      "stop_lat": 43.010716,
      "stop_lon": -81.182482,
      "stop_sequence": 62,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "CULVCUL5",
      "stop_name": "Culver north of Culver Place EB - #498",
      "stop_lat": 43.013036,
      "stop_lon": -81.183242,
      "stop_sequence": 63,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "CULVTHR1",
      "stop_name": "Culver at Third EB - #499",
      "stop_lat": 43.008725,
      "stop_lon": -81.187154,
      "stop_sequence": 60,
      "route_id": 17,
      "route_color": "FF2828"
    },
    {
      "stop_id": "DEARDUL2",
      "stop_name": "Dearness at Dunelm Lane SB - #507",
      "stop_lat": 42.936711,
      "stop_lon": -81.221339,
      "stop_sequence": 65,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "DEARWILL",
      "stop_name": "Dearness at Willow Lane SB - #508",
      "stop_lat": 42.938281,
      "stop_lon": -81.22172,
      "stop_sequence": 64,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "DEVECOM1",
      "stop_name": "Deveron at Commissioners NB - #513",
      "stop_lat": 42.961243,
      "stop_lon": -81.194917,
      "stop_sequence": 49,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "DOONMUS1",
      "stop_name": "Doon at Muskoka Cres NB - #521",
      "stop_lat": 43.022039,
      "stop_lon": -81.259615,
      "stop_sequence": 28,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "DOONRAV2",
      "stop_name": "Doon at Ravine Ridge Way WB - #523",
      "stop_lat": 43.020554,
      "stop_lon": -81.267587,
      "stop_sequence": 32,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "DOONRAV4",
      "stop_name": "Doon at Ravine Ridge Cres WB - #524",
      "stop_lat": 43.021353,
      "stop_lon": -81.266953,
      "stop_sequence": 31,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "DOONSUNY",
      "stop_name": "Doon at Sunnyside WB - #525",
      "stop_lat": 43.022169,
      "stop_lon": -81.264278,
      "stop_sequence": 30,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "DOONWIN2",
      "stop_name": "Doon at Windemere SB - #527",
      "stop_lat": 43.018348,
      "stop_lon": -81.266341,
      "stop_sequence": 33,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "DOWASH2",
      "stop_name": "Dow at Ashbury WB - #529",
      "stop_lat": 42.93947,
      "stop_lon": -81.205079,
      "stop_sequence": 56,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "DUFFWEL2",
      "stop_name": "Dufferin east of Wellington WB - #535",
      "stop_lat": 42.987807,
      "stop_lon": -81.245999,
      "stop_sequence": 28,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "DUNDADE1",
      "stop_name": "Dundas at Adelaide EB - #537",
      "stop_lat": 42.988586,
      "stop_lon": -81.232139,
      "stop_sequence": 24,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "DUNDADE1",
      "stop_name": "Dundas at Adelaide EB - #537",
      "stop_lat": 42.988586,
      "stop_lon": -81.232139,
      "stop_sequence": 42,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "DUNDADE1",
      "stop_name": "Dundas at Adelaide EB - #537",
      "stop_lat": 42.988586,
      "stop_lon": -81.232139,
      "stop_sequence": 9,
      "route_id": 94,
      "route_color": "FF8000"
    },
    {
      "stop_id": "DUNDASH1",
      "stop_name": "Dundas at Ashland EB - #540",
      "stop_lat": 42.995436,
      "stop_lon": -81.208452,
      "stop_sequence": 33,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "DUNDCARL",
      "stop_name": "Dundas at Carlyle EB - #547",
      "stop_lat": 43.008743,
      "stop_lon": -81.161078,
      "stop_sequence": 6,
      "route_id": 37,
      "route_color": "0098E1"
    },
    {
      "stop_id": "ADELMAPL",
      "stop_name": "Adelaide at Mapledale SB - #55",
      "stop_lat": 43.031429,
      "stop_lon": -81.253063,
      "stop_sequence": 9,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "DUNDCOL1",
      "stop_name": "Dundas at Colborne EB - #552",
      "stop_lat": 42.986356,
      "stop_lon": -81.239964,
      "stop_sequence": 21,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "DUNDCOL1",
      "stop_name": "Dundas at Colborne EB - #552",
      "stop_lat": 42.986356,
      "stop_lon": -81.239964,
      "stop_sequence": 39,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "DUNDEAS3",
      "stop_name": "Dundas east of Eastwood EB - #557",
      "stop_lat": 43.005338,
      "stop_lon": -81.173386,
      "stop_sequence": 56,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "DUNDEAS3",
      "stop_name": "Dundas east of Eastwood EB - #557",
      "stop_lat": 43.005338,
      "stop_lon": -81.173386,
      "stop_sequence": 2,
      "route_id": 37,
      "route_color": "0098E1"
    },
    {
      "stop_id": "DUNDEGE1",
      "stop_name": "Dundas at Egerton EB - #560",
      "stop_lat": 42.992935,
      "stop_lon": -81.217246,
      "stop_sequence": 30,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "DUNDEGE1",
      "stop_name": "Dundas at Egerton EB - #560",
      "stop_lat": 42.992935,
      "stop_lon": -81.217246,
      "stop_sequence": 10,
      "route_id": 94,
      "route_color": "FF8000"
    },
    {
      "stop_id": "DUNDELE1",
      "stop_name": "Dundas at Eleanor EB - #562",
      "stop_lat": 42.994507,
      "stop_lon": -81.211776,
      "stop_sequence": 32,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "DUNDFOR1",
      "stop_name": "Dundas at Forest Lawn EB - #569",
      "stop_lat": 43.007235,
      "stop_lon": -81.166554,
      "stop_sequence": 4,
      "route_id": 37,
      "route_color": "0098E1"
    },
    {
      "stop_id": "DUNDHAL3",
      "stop_name": "Dundas west of Hale EB - #573",
      "stop_lat": 42.998058,
      "stop_lon": -81.199337,
      "stop_sequence": 35,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "DUNDHARC",
      "stop_name": "Dundalk at Harcroft Cres SB - #575",
      "stop_lat": 42.946155,
      "stop_lon": -81.243894,
      "stop_sequence": 20,
      "route_id": 93,
      "route_color": "FF8000"
    },
    {
      "stop_id": "DUNDHEWI",
      "stop_name": "Dundas at Hewitt EB - #576",
      "stop_lat": 42.990129,
      "stop_lon": -81.226942,
      "stop_sequence": 26,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "DUNDHEWI",
      "stop_name": "Dundas at Hewitt EB - #576",
      "stop_lat": 42.990129,
      "stop_lon": -81.226942,
      "stop_sequence": 44,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "DUNDHIG1",
      "stop_name": "Dundas at Highbury  EB - #577",
      "stop_lat": 42.996596,
      "stop_lon": -81.204339,
      "stop_sequence": 34,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "DUNDHIG1",
      "stop_name": "Dundas at Highbury  EB - #577",
      "stop_lat": 42.996596,
      "stop_lon": -81.204339,
      "stop_sequence": 11,
      "route_id": 94,
      "route_color": "FF8000"
    },
    {
      "stop_id": "DUNDHIN2",
      "stop_name": "Dundalk at Hines SB - #580",
      "stop_lat": 42.944798,
      "stop_lon": -81.244219,
      "stop_sequence": 21,
      "route_id": 93,
      "route_color": "FF8000"
    },
    {
      "stop_id": "DUNDKELL",
      "stop_name": "Dundas at Kellogg Lane EB - #583",
      "stop_lat": 42.993594,
      "stop_lon": -81.214891,
      "stop_sequence": 31,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "DUNDLYLE",
      "stop_name": "Dundas at Lyle EB - #584",
      "stop_lat": 42.989387,
      "stop_lon": -81.229835,
      "stop_sequence": 25,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "DUNDLYLE",
      "stop_name": "Dundas at Lyle EB - #584",
      "stop_lat": 42.989387,
      "stop_lon": -81.229835,
      "stop_sequence": 43,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "DUNDMAI1",
      "stop_name": "Dundas at Maitland EB - #585",
      "stop_lat": 42.987275,
      "stop_lon": -81.237054,
      "stop_sequence": 22,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "DUNDMAI1",
      "stop_name": "Dundas at Maitland EB - #585",
      "stop_lat": 42.987275,
      "stop_lon": -81.237054,
      "stop_sequence": 40,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "ADELNEL2",
      "stop_name": "Adelaide at Nelson SB - #59",
      "stop_lat": 42.977503,
      "stop_lon": -81.226792,
      "stop_sequence": 30,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "DUNDONT1",
      "stop_name": "Dundas at Ontario EB - #592",
      "stop_lat": 42.991523,
      "stop_lon": -81.222292,
      "stop_sequence": 28,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "DUNDONT1",
      "stop_name": "Dundas at Ontario EB - #592",
      "stop_lat": 42.991523,
      "stop_lon": -81.222292,
      "stop_sequence": 46,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "DUNDQUE1",
      "stop_name": "Dundas at Quebec EB - #594",
      "stop_lat": 42.992387,
      "stop_lon": -81.219149,
      "stop_sequence": 29,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "DUNDREC1",
      "stop_name": "Dundas at Rectory EB - #596",
      "stop_lat": 42.990839,
      "stop_lon": -81.224434,
      "stop_sequence": 27,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "DUNDREC1",
      "stop_name": "Dundas at Rectory EB - #596",
      "stop_lat": 42.990839,
      "stop_lon": -81.224434,
      "stop_sequence": 45,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "ADELOSG1",
      "stop_name": "Adelaide at SE Osgoode NB - #60",
      "stop_lat": 42.93825,
      "stop_lon": -81.209242,
      "stop_sequence": 58,
      "route_id": 13,
      "route_color": "927EC2"
    },
    {
      "stop_id": "DUNDRIDO",
      "stop_name": "Dundas at Ridout EB - #600",
      "stop_lat": 42.982377,
      "stop_lon": -81.254162,
      "stop_sequence": 15,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "DUNDSASK",
      "stop_name": "Dundas at Saskatoon EB - #602",
      "stop_lat": 43.000664,
      "stop_lon": -81.190041,
      "stop_sequence": 12,
      "route_id": 94,
      "route_color": "FF8000"
    },
    {
      "stop_id": "DUNDSDAL",
      "stop_name": "Dundalk at Southdale SB - #604",
      "stop_lat": 42.942477,
      "stop_lon": -81.243882,
      "stop_sequence": 22,
      "route_id": 93,
      "route_color": "FF8000"
    },
    {
      "stop_id": "DUNDSPE1",
      "stop_name": "Dundas at Speight EB - #605",
      "stop_lat": 43.007731,
      "stop_lon": -81.164719,
      "stop_sequence": 5,
      "route_id": 37,
      "route_color": "0098E1"
    },
    {
      "stop_id": "ADELOSG2",
      "stop_name": "Adelaide at NW Osgoode SB - #61",
      "stop_lat": 42.941834,
      "stop_lon": -81.213008,
      "stop_sequence": 19,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "DUNDWAT1",
      "stop_name": "Dundas east of Waterloo EB - #614",
      "stop_lat": 42.985819,
      "stop_lon": -81.241849,
      "stop_sequence": 20,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "DUNDWAT1",
      "stop_name": "Dundas east of Waterloo EB - #614",
      "stop_lat": 42.985819,
      "stop_lon": -81.241849,
      "stop_sequence": 38,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "DUNDWAV1",
      "stop_name": "Dundas east of Wavell EB - #617",
      "stop_lat": 43.006422,
      "stop_lon": -81.169406,
      "stop_sequence": 3,
      "route_id": 37,
      "route_color": "0098E1"
    },
    {
      "stop_id": "DUNDWIL1",
      "stop_name": "Dundas at William EB - #623",
      "stop_lat": 42.988001,
      "stop_lon": -81.234357,
      "stop_sequence": 23,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "DUNDWIL1",
      "stop_name": "Dundas at William EB - #623",
      "stop_lat": 42.988001,
      "stop_lon": -81.234357,
      "stop_sequence": 41,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "EDENEAS2",
      "stop_name": "Eden at Easy WB - #627",
      "stop_lat": 42.946758,
      "stop_lon": -81.234301,
      "stop_sequence": 46,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "EDENNIX",
      "stop_name": "Eden at Nixon WB - #628",
      "stop_lat": 42.946509,
      "stop_lon": -81.23719,
      "stop_sequence": 47,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "ADELOSG4",
      "stop_name": "Adelaide at SE Osgoode SB - #63",
      "stop_lat": 42.937296,
      "stop_lon": -81.20903,
      "stop_sequence": 21,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "EDWABASE",
      "stop_name": "Edward at Baseline SB - #630",
      "stop_lat": 42.959872,
      "stop_lon": -81.256607,
      "stop_sequence": 48,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "EDWAELMW",
      "stop_name": "Edward at Elmwood SB - #634",
      "stop_lat": 42.970163,
      "stop_lon": -81.257901,
      "stop_sequence": 44,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "EDWAHIWY",
      "stop_name": "Edward at Highway SB - #637",
      "stop_lat": 42.962174,
      "stop_lon": -81.256749,
      "stop_sequence": 47,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "EDWALANG",
      "stop_name": "Edward at Langarth SB - #639",
      "stop_lat": 42.965432,
      "stop_lon": -81.257158,
      "stop_sequence": 46,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "EDWATECU",
      "stop_name": "Edward at Tecumseh SB - #640",
      "stop_lat": 42.96804,
      "stop_lon": -81.257575,
      "stop_sequence": 45,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "ELMWCATH",
      "stop_name": "Elmwood at Cathcart WB - #641",
      "stop_lat": 42.970779,
      "stop_lon": -81.254355,
      "stop_sequence": 43,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "ELMWMARL",
      "stop_name": "Elmwood at Marley Place WB - #642",
      "stop_lat": 42.971201,
      "stop_lon": -81.250563,
      "stop_sequence": 41,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "ELMWWORT",
      "stop_name": "Elmwood at Wortley WB - #643",
      "stop_lat": 42.970934,
      "stop_lon": -81.252723,
      "stop_sequence": 42,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "EMERHIW1",
      "stop_name": "Emery at Highwood EB - #644",
      "stop_lat": 42.963584,
      "stop_lon": -81.270317,
      "stop_sequence": 14,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "EMERPADD",
      "stop_name": "Emery at Paddington EB - #646",
      "stop_lat": 42.963561,
      "stop_lon": -81.263574,
      "stop_sequence": 16,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "EMERPHY1",
      "stop_name": "Emery at Phyllis EB - #647",
      "stop_lat": 42.963473,
      "stop_lon": -81.273514,
      "stop_sequence": 13,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "EMERWIN1",
      "stop_name": "Emery west of Winston EB - #649",
      "stop_lat": 42.963719,
      "stop_lon": -81.266921,
      "stop_sequence": 15,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "ADELOSG6",
      "stop_name": "Adelaide at SW Osgoode SB - #65",
      "stop_lat": 42.939001,
      "stop_lon": -81.2102,
      "stop_sequence": 20,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "ENTEHUBR",
      "stop_name": "Enterprise at Hubrey EB - #651",
      "stop_lat": 42.933034,
      "stop_lon": -81.184689,
      "stop_sequence": 18,
      "route_id": 30,
      "route_color": "CF2985"
    },
    {
      "stop_id": "ENTEMID1",
      "stop_name": "Enterprise at Midpark EB - #652",
      "stop_lat": 42.932497,
      "stop_lon": -81.186907,
      "stop_sequence": 17,
      "route_id": 30,
      "route_color": "CF2985"
    },
    {
      "stop_id": "ENTEPOM1",
      "stop_name": "Enterprise at Pond Mills EB - #653",
      "stop_lat": 42.931561,
      "stop_lon": -81.189731,
      "stop_sequence": 16,
      "route_id": 30,
      "route_color": "CF2985"
    },
    {
      "stop_id": "ERNEBRA2",
      "stop_name": "Ernest at Bradley SB - #655",
      "stop_lat": 42.934612,
      "stop_lon": -81.236504,
      "stop_sequence": 53,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "ERNECON2",
      "stop_name": "Ernest at Conway SB - #657",
      "stop_lat": 42.933053,
      "stop_lon": -81.236551,
      "stop_sequence": 54,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "ERNEELVI",
      "stop_name": "Ernest at Elvira SB - #658",
      "stop_lat": 42.939341,
      "stop_lon": -81.238539,
      "stop_sequence": 51,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "ERNEFEN2",
      "stop_name": "Ernest at Fennel SB - #660",
      "stop_lat": 42.930285,
      "stop_lon": -81.235775,
      "stop_sequence": 55,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "ERNEJAL2",
      "stop_name": "Ernest at Jalna SB - #663",
      "stop_lat": 42.9407,
      "stop_lon": -81.237401,
      "stop_sequence": 50,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "ERNEPAUL",
      "stop_name": "Ernest at Pauline SB - #667",
      "stop_lat": 42.937018,
      "stop_lon": -81.238241,
      "stop_sequence": 52,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "ERNESCO1",
      "stop_name": "Ernest at Scotchmere SB - #668",
      "stop_lat": 42.926915,
      "stop_lon": -81.235957,
      "stop_sequence": 56,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "EXETMEG",
      "stop_name": "Exeter at Meg EB - #670",
      "stop_lat": 42.92479,
      "stop_lon": -81.228489,
      "stop_sequence": 59,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "EXETWEL1",
      "stop_name": "Exeter at Wellington EB - #672",
      "stop_lat": 42.926036,
      "stop_lon": -81.215134,
      "stop_sequence": 3,
      "route_id": 30,
      "route_color": "CF2985"
    },
    {
      "stop_id": "ADELOXF2",
      "stop_name": "Adelaide at Oxford SB - #68",
      "stop_lat": 43.000449,
      "stop_lon": -81.237393,
      "stop_sequence": 19,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "FANSADE4",
      "stop_name": "Fanshawe west of Adelaide WB - #684",
      "stop_lat": 43.034771,
      "stop_lon": -81.255542,
      "stop_sequence": 21,
      "route_id": 25,
      "route_color": "DFDF00"
    },
    {
      "stop_id": "ADELPAMA",
      "stop_name": "Adelaide at Pall Mall SB - #69",
      "stop_lat": 42.996487,
      "stop_lon": -81.235428,
      "stop_sequence": 21,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "FANSHAS1",
      "stop_name": "Fanshawe at Hastings East EB - #695",
      "stop_lat": 43.031099,
      "stop_lon": -81.267184,
      "stop_sequence": 5,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "FANSHAS1",
      "stop_name": "Fanshawe at Hastings East EB - #695",
      "stop_lat": 43.031099,
      "stop_lon": -81.267184,
      "stop_sequence": 5,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "FANSHAS2",
      "stop_name": "Fanshawe at Hastings WB - #696",
      "stop_lat": 43.030992,
      "stop_lon": -81.268125,
      "stop_sequence": 24,
      "route_id": 25,
      "route_color": "DFDF00"
    },
    {
      "stop_id": "FANSHAS3",
      "stop_name": "Fanshawe at Hastings West EB - #697",
      "stop_lat": 43.030109,
      "stop_lon": -81.2705,
      "stop_sequence": 4,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "FANSHAS3",
      "stop_name": "Fanshawe at Hastings West EB - #697",
      "stop_lat": 43.030109,
      "stop_lon": -81.2705,
      "stop_sequence": 49,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "FANSHAS3",
      "stop_name": "Fanshawe at Hastings West EB - #697",
      "stop_lat": 43.030109,
      "stop_lon": -81.2705,
      "stop_sequence": 4,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "FANSJEN2",
      "stop_name": "Fanshawe at Jennifer 1 WB - #699",
      "stop_lat": 43.030043,
      "stop_lon": -81.271423,
      "stop_sequence": 25,
      "route_id": 25,
      "route_color": "DFDF00"
    },
    {
      "stop_id": "FANSJEN4",
      "stop_name": "Fanshawe at Jennifer 2 WB - #700",
      "stop_lat": 43.029285,
      "stop_lon": -81.273907,
      "stop_sequence": 26,
      "route_id": 25,
      "route_color": "DFDF00"
    },
    {
      "stop_id": "FANSLOU1",
      "stop_name": "Fanshawe at Louise EB - #701",
      "stop_lat": 43.024436,
      "stop_lon": -81.289879,
      "stop_sequence": 45,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "FANSNCR1",
      "stop_name": "Fanshawe west of North Centre EB - #704",
      "stop_lat": 43.028057,
      "stop_lon": -81.277532,
      "stop_sequence": 2,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "FANSNCR1",
      "stop_name": "Fanshawe west of North Centre EB - #704",
      "stop_lat": 43.028057,
      "stop_lon": -81.277532,
      "stop_sequence": 47,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "FANSNCR1",
      "stop_name": "Fanshawe west of North Centre EB - #704",
      "stop_lat": 43.028057,
      "stop_lon": -81.277532,
      "stop_sequence": 2,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "FANSNCR2",
      "stop_name": "Fanshawe west of North Centre WB - #705",
      "stop_lat": 43.028239,
      "stop_lon": -81.277573,
      "stop_sequence": 27,
      "route_id": 25,
      "route_color": "DFDF00"
    },
    {
      "stop_id": "FANSNCR3",
      "stop_name": "Fanshawe east of North Centre EB - #706",
      "stop_lat": 43.028932,
      "stop_lon": -81.274472,
      "stop_sequence": 3,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "FANSNCR3",
      "stop_name": "Fanshawe east of North Centre EB - #706",
      "stop_lat": 43.028932,
      "stop_lon": -81.274472,
      "stop_sequence": 48,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "FANSNCR3",
      "stop_name": "Fanshawe east of North Centre EB - #706",
      "stop_lat": 43.028932,
      "stop_lon": -81.274472,
      "stop_sequence": 3,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "FANSPHIL",
      "stop_name": "Fanshawe at Phillbrook WB - #708",
      "stop_lat": 43.032115,
      "stop_lon": -81.264402,
      "stop_sequence": 23,
      "route_id": 25,
      "route_color": "DFDF00"
    },
    {
      "stop_id": "ADELPIC2",
      "stop_name": "Adelaide at Piccadilly SB - #71",
      "stop_lat": 42.999014,
      "stop_lon": -81.236686,
      "stop_sequence": 20,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "FANSSTO1",
      "stop_name": "Fanshawe at Stoneybrook East EB - #711",
      "stop_lat": 43.033409,
      "stop_lon": -81.25933,
      "stop_sequence": 7,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "FANSSTO2",
      "stop_name": "Fanshawe at Stoneybrook East WB - #712",
      "stop_lat": 43.033749,
      "stop_lon": -81.258955,
      "stop_sequence": 22,
      "route_id": 25,
      "route_color": "DFDF00"
    },
    {
      "stop_id": "FANSSTO3",
      "stop_name": "Fanshawe at Stoneybrook West EB - #713",
      "stop_lat": 43.032203,
      "stop_lon": -81.263454,
      "stop_sequence": 6,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "FARRPROU",
      "stop_name": "Farrah at Proudfoot EB - #717",
      "stop_lat": 42.986899,
      "stop_lon": -81.289859,
      "stop_sequence": 4,
      "route_id": 33,
      "route_color": "BB77FF"
    },
    {
      "stop_id": "ADELPRIN",
      "stop_name": "Adelaide at Princess SB - #72",
      "stop_lat": 42.992506,
      "stop_lon": -81.233465,
      "stop_sequence": 24,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "ADELQUEE",
      "stop_name": "Adelaide at Queens SB - #73",
      "stop_lat": 42.990215,
      "stop_lon": -81.232309,
      "stop_sequence": 26,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "FLORASH1",
      "stop_name": "Florence at Ashland EB - #733",
      "stop_lat": 42.992132,
      "stop_lon": -81.20756,
      "stop_sequence": 43,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "FLOREGE1",
      "stop_name": "Florence at Egerton EB - #736",
      "stop_lat": 42.989745,
      "stop_lon": -81.21583,
      "stop_sequence": 40,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "FLORELE1",
      "stop_name": "Florence at Eleanor EB - #738",
      "stop_lat": 42.991399,
      "stop_lon": -81.210202,
      "stop_sequence": 42,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "FLORFAI1",
      "stop_name": "Florence at Fairgrounds south Gate EB - #740",
      "stop_lat": 42.988583,
      "stop_lon": -81.218615,
      "stop_sequence": 39,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "FLORKEL1",
      "stop_name": "Florence at Kellogg Lane EB - #744",
      "stop_lat": 42.990512,
      "stop_lon": -81.213309,
      "stop_sequence": 41,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "GAINWON1",
      "stop_name": "Sherwood Forest Mall EB - #756",
      "stop_lat": 43.006225,
      "stop_lon": -81.306097,
      "stop_sequence": 28,
      "route_id": "09",
      "route_color": "B36666"
    },
    {
      "stop_id": "GARDBER1",
      "stop_name": "Gardenwood at Berkshire NB - #759",
      "stop_lat": 42.962908,
      "stop_lon": -81.284862,
      "stop_sequence": 9,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "ADELROSE",
      "stop_name": "Adelaide at Rosedale SB - #76",
      "stop_lat": 42.993791,
      "stop_lon": -81.234088,
      "stop_sequence": 23,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "GARDRID2",
      "stop_name": "Gardenwood east of Ridgewood WB - #763",
      "stop_lat": 42.967144,
      "stop_lon": -81.282587,
      "stop_sequence": 55,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "GARDSOU2",
      "stop_name": "Gardenwood at Southcrest SB - #766",
      "stop_lat": 42.964872,
      "stop_lon": -81.285158,
      "stop_sequence": 56,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "GLASMORN",
      "stop_name": "Glasgow at Mornington NB - #768",
      "stop_lat": 43.001114,
      "stop_lon": -81.221698,
      "stop_sequence": 52,
      "route_id": 20,
      "route_color": "58ABAB"
    },
    {
      "stop_id": "ADELSDAL",
      "stop_name": "Adelaide at Southdale SB - #77",
      "stop_lat": 42.943708,
      "stop_lon": -81.214531,
      "stop_sequence": 18,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "GOREFIRE",
      "stop_name": "Gore at Firestone WB - #785",
      "stop_lat": 42.979208,
      "stop_lon": -81.169434,
      "stop_sequence": 10,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "ADELSJA2",
      "stop_name": "Adelaide at St. James SB - #79",
      "stop_lat": 43.002171,
      "stop_lon": -81.238249,
      "stop_sequence": 18,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "GRANHIG2",
      "stop_name": "Grand at High WB - #791",
      "stop_lat": 42.972112,
      "stop_lon": -81.24004,
      "stop_sequence": 12,
      "route_id": "06",
      "route_color": "008080"
    },
    {
      "stop_id": "GRANHIG4",
      "stop_name": "84 Grand WB - #792",
      "stop_lat": 42.971894,
      "stop_lon": -81.241983,
      "stop_sequence": 13,
      "route_id": "06",
      "route_color": "008080"
    },
    {
      "stop_id": "GREYWATE",
      "stop_name": "Grey at Waterloo WB - #805",
      "stop_lat": 42.978687,
      "stop_lon": -81.238647,
      "stop_sequence": 34,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "HALEBEAT",
      "stop_name": "Hale at Beattie SB - #828",
      "stop_lat": 42.994478,
      "stop_lon": -81.197049,
      "stop_sequence": 37,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "ADELTHO2",
      "stop_name": "207 Adelaide - #83",
      "stop_lat": 42.964134,
      "stop_lon": -81.220869,
      "stop_sequence": 35,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "HALEBRY2",
      "stop_name": "Hale at Brydges SB - #830",
      "stop_lat": 42.990805,
      "stop_lon": -81.195321,
      "stop_sequence": 39,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "HALEDOU2",
      "stop_name": "Hale at Doulton SB - #832",
      "stop_lat": 42.995742,
      "stop_lon": -81.197646,
      "stop_sequence": 36,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "HALEELLS",
      "stop_name": "Hale at Ellsworth SB - #835",
      "stop_lat": 42.979462,
      "stop_lon": -81.19096,
      "stop_sequence": 22,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "HALEMAGE",
      "stop_name": "Hale at Magee SB - #837",
      "stop_lat": 42.981498,
      "stop_lon": -81.191082,
      "stop_sequence": 21,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "HALEMONT",
      "stop_name": "Hale at Montague Place SB - #838",
      "stop_lat": 42.992916,
      "stop_lon": -81.196312,
      "stop_sequence": 38,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "ADELTHO4",
      "stop_name": "Adelaide at Thompson SB - #84",
      "stop_lat": 42.967775,
      "stop_lon": -81.222568,
      "stop_sequence": 33,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "HALETRA2",
      "stop_name": "Hale at Trafalgar SB - #842",
      "stop_lat": 42.986756,
      "stop_lon": -81.193479,
      "stop_sequence": 40,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "HAMIADE2",
      "stop_name": "Hamilton at Adelaide WB - #846",
      "stop_lat": 42.982041,
      "stop_lon": -81.228328,
      "stop_sequence": 32,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "HAMIADE2",
      "stop_name": "Hamilton at Adelaide WB - #846",
      "stop_lat": 42.982041,
      "stop_lon": -81.228328,
      "stop_sequence": 33,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "ADELTHO6",
      "stop_name": "155 Adelaide SB - #85",
      "stop_lat": 42.965996,
      "stop_lon": -81.221812,
      "stop_sequence": 34,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "HAMIEAST",
      "stop_name": "Hamilton at East WB - #850",
      "stop_lat": 42.97858,
      "stop_lon": -81.200065,
      "stop_sequence": 25,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "HAMIEAST",
      "stop_name": "Hamilton at East WB - #850",
      "stop_lat": 42.97858,
      "stop_lon": -81.200065,
      "stop_sequence": 26,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "HAMIEGE2",
      "stop_name": "Hamilton at Egerton WB - #852",
      "stop_lat": 42.980285,
      "stop_lon": -81.211777,
      "stop_sequence": 28,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "HAMIEGE2",
      "stop_name": "Hamilton at Egerton WB - #852",
      "stop_lat": 42.980285,
      "stop_lon": -81.211777,
      "stop_sequence": 29,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "HAMIELM",
      "stop_name": "Hamilton at Elm WB - #854",
      "stop_lat": 42.979565,
      "stop_lon": -81.207202,
      "stop_sequence": 27,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "HAMIELM",
      "stop_name": "Hamilton at Elm WB - #854",
      "stop_lat": 42.979565,
      "stop_lon": -81.207202,
      "stop_sequence": 28,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "HAMIGIL2",
      "stop_name": "Hamilton at Giles WB - #856",
      "stop_lat": 42.977934,
      "stop_lon": -81.195434,
      "stop_sequence": 24,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "HAMIGIL2",
      "stop_name": "Hamilton at Giles WB - #856",
      "stop_lat": 42.977934,
      "stop_lon": -81.195434,
      "stop_sequence": 25,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "HAMIHALE",
      "stop_name": "Hamilton at Hale WB - #859",
      "stop_lat": 42.977431,
      "stop_lon": -81.191874,
      "stop_sequence": 22,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "HAMIHALE",
      "stop_name": "Hamilton at Hale WB - #859",
      "stop_lat": 42.977431,
      "stop_lon": -81.191874,
      "stop_sequence": 23,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "ADELTHO8",
      "stop_name": "247 Adelaide SB - #86",
      "stop_lat": 42.962455,
      "stop_lon": -81.219962,
      "stop_sequence": 36,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "HAMIHIG2",
      "stop_name": "Hamilton at Highbury WB - #861",
      "stop_lat": 42.977777,
      "stop_lon": -81.194291,
      "stop_sequence": 23,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "HAMIHIG2",
      "stop_name": "Hamilton at Highbury WB - #861",
      "stop_lat": 42.977777,
      "stop_lon": -81.194291,
      "stop_sequence": 24,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "HAMILTGR",
      "stop_name": "Hamilton at Little Grey WB - #863",
      "stop_lat": 42.981338,
      "stop_lon": -81.224253,
      "stop_sequence": 31,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "HAMILTGR",
      "stop_name": "Hamilton at Little Grey WB - #863",
      "stop_lat": 42.981338,
      "stop_lon": -81.224253,
      "stop_sequence": 32,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "HAMIREC2",
      "stop_name": "Hamilton at Rectory WB - #875",
      "stop_lat": 42.980659,
      "stop_lon": -81.220012,
      "stop_sequence": 30,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "HAMIREC2",
      "stop_name": "Hamilton at Rectory WB - #875",
      "stop_lat": 42.980659,
      "stop_lon": -81.220012,
      "stop_sequence": 31,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "ADELVIC2",
      "stop_name": "Adelaide at Victoria SB - #88",
      "stop_lat": 43.008394,
      "stop_lon": -81.241297,
      "stop_sequence": 14,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "ADELVIC2",
      "stop_name": "Adelaide at Victoria SB - #88",
      "stop_lat": 43.008394,
      "stop_lon": -81.241297,
      "stop_sequence": 15,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "HAMISAC2",
      "stop_name": "Hamilton at Sackville WB - #880",
      "stop_lat": 42.980438,
      "stop_lon": -81.215361,
      "stop_sequence": 29,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "HAMISAC2",
      "stop_name": "Hamilton at Sackville WB - #880",
      "stop_lat": 42.980438,
      "stop_lon": -81.215361,
      "stop_sequence": 30,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "HAMISJU2",
      "stop_name": "Hamilton at St. Julien WB - #884",
      "stop_lat": 42.979134,
      "stop_lon": -81.204082,
      "stop_sequence": 26,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "HAMISJU2",
      "stop_name": "Hamilton at St. Julien WB - #884",
      "stop_lat": 42.979134,
      "stop_lon": -81.204082,
      "stop_sequence": 27,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "HASTCHA1",
      "stop_name": "Hastings at Chambers NB - #889",
      "stop_lat": 43.037134,
      "stop_lon": -81.270738,
      "stop_sequence": 52,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "HASTDONY",
      "stop_name": "Hastings at Donnybrook NB - #891",
      "stop_lat": 43.032086,
      "stop_lon": -81.268232,
      "stop_sequence": 50,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "HASTVIR1",
      "stop_name": "Hastings at Virginia NB - #892",
      "stop_lat": 43.034071,
      "stop_lon": -81.269268,
      "stop_sequence": 51,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "HIGBBEA2",
      "stop_name": "Highbury at Beattie SB - #894",
      "stop_lat": 42.993444,
      "stop_lon": -81.202342,
      "stop_sequence": 44,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "HIGBBRY2",
      "stop_name": "Highbury at Brydges SB - #896",
      "stop_lat": 42.987717,
      "stop_lon": -81.199767,
      "stop_sequence": 1,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "HIGBCALV",
      "stop_name": "Highbury at Calvin SB - #897",
      "stop_lat": 42.979733,
      "stop_lon": -81.195733,
      "stop_sequence": 3,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "ADELWIN2",
      "stop_name": "Adelaide at Winderemere SB - #90",
      "stop_lat": 43.023444,
      "stop_lon": -81.249048,
      "stop_sequence": 11,
      "route_id": 16,
      "route_color": "00AA55"
    },
    {
      "stop_id": "ADELWIN2",
      "stop_name": "Adelaide at Winderemere SB - #90",
      "stop_lat": 43.023444,
      "stop_lon": -81.249048,
      "stop_sequence": 23,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "HIGBFUL1",
      "stop_name": "Montcalm Seconday School - #905",
      "stop_lat": 43.023826,
      "stop_lon": -81.217326,
      "stop_sequence": 10,
      "route_id": 25,
      "route_color": "DFDF00"
    },
    {
      "stop_id": "HIGBHAM2",
      "stop_name": "Highbury at Hamilton SB - #910",
      "stop_lat": 42.978272,
      "stop_lon": -81.195015,
      "stop_sequence": 4,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "HIGBHIC1",
      "stop_name": "Highbury at Hillcrest NB - #911",
      "stop_lat": 43.02208,
      "stop_lon": -81.216527,
      "stop_sequence": 9,
      "route_id": 25,
      "route_color": "DFDF00"
    },
    {
      "stop_id": "HIGBTRA2",
      "stop_name": "Highbury at Trafalgar SB - #927",
      "stop_lat": 42.983478,
      "stop_lon": -81.197678,
      "stop_sequence": 2,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "HIGBWIL2",
      "stop_name": "Highbury at Wilton SB - #929",
      "stop_lat": 42.990734,
      "stop_lon": -81.200996,
      "stop_sequence": 45,
      "route_id": "07",
      "route_color": "9D3CFF"
    },
    {
      "stop_id": "ADMIBON1",
      "stop_name": "Admiral at Bonaventure EB - #93",
      "stop_lat": 43.003065,
      "stop_lon": -81.154082,
      "stop_sequence": 11,
      "route_id": 35,
      "route_color": "DBC004"
    },
    {
      "stop_id": "HIGHBASE",
      "stop_name": "High at Baseline NB - #930",
      "stop_lat": 42.961578,
      "stop_lon": -81.236142,
      "stop_sequence": 7,
      "route_id": "06",
      "route_color": "008080"
    },
    {
      "stop_id": "HIGHCHE1",
      "stop_name": "High at Chester NB - #931",
      "stop_lat": 42.963971,
      "stop_lon": -81.236823,
      "stop_sequence": 8,
      "route_id": "06",
      "route_color": "008080"
    },
    {
      "stop_id": "HIGHEME1",
      "stop_name": "High at Emery NB - #933",
      "stop_lat": 42.965409,
      "stop_lon": -81.237156,
      "stop_sequence": 9,
      "route_id": "06",
      "route_color": "008080"
    },
    {
      "stop_id": "HIGHMCL1",
      "stop_name": "High at McClary NB - #937",
      "stop_lat": 42.971092,
      "stop_lon": -81.238544,
      "stop_sequence": 11,
      "route_id": "06",
      "route_color": "008080"
    },
    {
      "stop_id": "HIGHWIN3",
      "stop_name": "High at Windsor Cres NB - #941",
      "stop_lat": 42.968628,
      "stop_lon": -81.237928,
      "stop_sequence": 10,
      "route_id": "06",
      "route_color": "008080"
    },
    {
      "stop_id": "HIGVFER2",
      "stop_name": "Highview at Ferndale SB - #944",
      "stop_lat": 42.94795,
      "stop_lon": -81.255727,
      "stop_sequence": 17,
      "route_id": 93,
      "route_color": "FF8000"
    },
    {
      "stop_id": "HIGVROS2",
      "stop_name": "Highview at Rossmore Crt SB - #946",
      "stop_lat": 42.952859,
      "stop_lon": -81.255598,
      "stop_sequence": 15,
      "route_id": 93,
      "route_color": "FF8000"
    },
    {
      "stop_id": "HIGVROS4",
      "stop_name": "Highview at Rossmore Place SB - #948",
      "stop_lat": 42.950352,
      "stop_lon": -81.255194,
      "stop_sequence": 16,
      "route_id": 93,
      "route_color": "FF8000"
    },
    {
      "stop_id": "HIGVWHA1",
      "stop_name": "Highview at Wharncliffe EB - #949",
      "stop_lat": 42.953793,
      "stop_lon": -81.259268,
      "stop_sequence": 13,
      "route_id": 93,
      "route_color": "FF8000"
    },
    {
      "stop_id": "ADMICAR1",
      "stop_name": "Admiral at Carlyle EB - #95",
      "stop_lat": 43.001932,
      "stop_lon": -81.158102,
      "stop_sequence": 9,
      "route_id": 35,
      "route_color": "DBC004"
    },
    {
      "stop_id": "HORTHAMI",
      "stop_name": "Horton at Hamilton WB - #966",
      "stop_lat": 42.982727,
      "stop_lon": -81.233841,
      "stop_sequence": 34,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "HORTHAMI",
      "stop_name": "Horton at Hamilton WB - #966",
      "stop_lat": 42.982727,
      "stop_lon": -81.233841,
      "stop_sequence": 35,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "HORTRIC2",
      "stop_name": "Horton at Richmond WB - #969",
      "stop_lat": 42.97894,
      "stop_lon": -81.247975,
      "stop_sequence": 28,
      "route_id": "04",
      "route_color": "7373B9"
    },
    {
      "stop_id": "HORTRIC2",
      "stop_name": "Horton at Richmond WB - #969",
      "stop_lat": 42.97894,
      "stop_lon": -81.247975,
      "stop_sequence": 37,
      "route_id": 15,
      "route_color": "00D5D5"
    },
    {
      "stop_id": "ADMIKIP1",
      "stop_name": "319 Admiral - #97",
      "stop_lat": 42.999776,
      "stop_lon": -81.161407,
      "stop_sequence": 8,
      "route_id": 35,
      "route_color": "DBC004"
    },
    {
      "stop_id": "HORTWAT2",
      "stop_name": "Horton at Waterloo WB - #977",
      "stop_lat": 42.981101,
      "stop_lon": -81.239838,
      "stop_sequence": 36,
      "route_id": "03",
      "route_color": "C28585"
    },
    {
      "stop_id": "HORTWAT2",
      "stop_name": "Horton at Waterloo WB - #977",
      "stop_lat": 42.981101,
      "stop_lon": -81.239838,
      "stop_sequence": 37,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "HORTWELL",
      "stop_name": "Horton at Wellington EB - #978",
      "stop_lat": 42.980351,
      "stop_lon": -81.242012,
      "stop_sequence": 32,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "HORTWHA2",
      "stop_name": "Horton west of Wharncliffe WB - #980",
      "stop_lat": 42.976819,
      "stop_lon": -81.263014,
      "stop_sequence": 47,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "HORTWHA4",
      "stop_name": "Horton west of Wharncliffe 2 WB - #982",
      "stop_lat": 42.97667,
      "stop_lon": -81.265273,
      "stop_sequence": 48,
      "route_id": "05",
      "route_color": "00FF00"
    },
    {
      "stop_id": "HUBRENT4",
      "stop_name": "Hubrey at Enterprise south SB - #988",
      "stop_lat": 42.930474,
      "stop_lon": -81.183804,
      "stop_sequence": 19,
      "route_id": 30,
      "route_color": "CF2985"
    },
    {
      "stop_id": "HUBRWIL2",
      "stop_name": "Hubrey at Wilton Grove SB - #989",
      "stop_lat": 42.929375,
      "stop_lon": -81.183108,
      "stop_sequence": 20,
      "route_id": 30,
      "route_color": "CF2985"
    },
    {
      "stop_id": "HUDSBAFF",
      "stop_name": "Hudson at Baffin Place EB - #990",
      "stop_lat": 42.991818,
      "stop_lon": -81.15844,
      "stop_sequence": 61,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "HUDSFROB",
      "stop_name": "Hudson at Frobisher EB - #991",
      "stop_lat": 42.991822,
      "stop_lon": -81.156712,
      "stop_sequence": 62,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "HUDSJOLI",
      "stop_name": "Hudson at Joliet NB - #992",
      "stop_lat": 42.994047,
      "stop_lon": -81.155125,
      "stop_sequence": 63,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "HUDSTRAF",
      "stop_name": "Hudson at Trafalgar NB - #993",
      "stop_lat": 42.995616,
      "stop_lon": -81.15591,
      "stop_sequence": 64,
      "route_id": "02",
      "route_color": "0080C0"
    },
    {
      "stop_id": "HUROADE4",
      "stop_name": "Huron west of Adelaide WB - #997",
      "stop_lat": 43.011737,
      "stop_lon": -81.243615,
      "stop_sequence": 18,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "HUROADE6",
      "stop_name": "648 Huron - #998",
      "stop_lat": 43.012632,
      "stop_lon": -81.240522,
      "stop_sequence": 12,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "HUROBARK",
      "stop_name": "Huron at Barker WB - #999",
      "stop_lat": 43.01518,
      "stop_lon": -81.232182,
      "stop_sequence": 10,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "QUARPLNE",
      "stop_name": "Quarrier at Plane Tree NB - #2867",
      "stop_lat": 43.028742,
      "stop_lon": -81.295371,
      "stop_sequence": 50,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "RALECOLT",
      "stop_name": "Raleigh at Colonel Talbot WB - #2868",
      "stop_lat": 42.932945,
      "stop_lon": -81.316234,
      "stop_sequence": 50,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "RALERALE",
      "stop_name": "Raleigh at Raleigh Cres E Leg WB - #2869",
      "stop_lat": 42.933356,
      "stop_lon": -81.314034,
      "stop_sequence": 49,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "RICHBERN",
      "stop_name": "Richmond at Bernard NB - #2870",
      "stop_lat": 43.011232,
      "stop_lon": -81.263469,
      "stop_sequence": 31,
      "route_id": "06",
      "route_color": "008080"
    },
    {
      "stop_id": "RICHNCRE",
      "stop_name": "Richmond at North Centre FS SB - #2872",
      "stop_lat": 43.028753,
      "stop_lon": -81.28395,
      "stop_sequence": 57,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "RICHPLNE",
      "stop_name": "Richmond at Plane Tree FS SB - #2874",
      "stop_lat": 43.032019,
      "stop_lon": -81.285629,
      "stop_sequence": 56,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "RICHWES3",
      "stop_name": "Richmond at Western 2 SB - #2876",
      "stop_lat": 43.020209,
      "stop_lon": -81.279239,
      "stop_sequence": 2,
      "route_id": 93,
      "route_color": "FF8000"
    },
    {
      "stop_id": "STACFAN1",
      "stop_name": "Stackhouse at Fanshawe SB - #2879",
      "stop_lat": 43.041031,
      "stop_lon": -81.23494,
      "stop_sequence": 17,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "SUNNRICH",
      "stop_name": "Sunningdale at Richmond NS EB - #2881",
      "stop_lat": 43.038217,
      "stop_lon": -81.28903,
      "stop_sequence": 54,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "SUNNVILW",
      "stop_name": "Sunningdale at Village Walk NS EB - #2883",
      "stop_lat": 43.037003,
      "stop_lon": -81.292949,
      "stop_sequence": 53,
      "route_id": 34,
      "route_color": "5959FF"
    },
    {
      "stop_id": "TILBPOME",
      "stop_name": "Tilbury at Pomeroy WB - #2884",
      "stop_lat": 42.934464,
      "stop_lon": -81.310761,
      "stop_sequence": 48,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "TILLRALE",
      "stop_name": "Tillman at Raleigh SB - #2885",
      "stop_lat": 42.934839,
      "stop_lon": -81.308467,
      "stop_sequence": 47,
      "route_id": 24,
      "route_color": "FF9BCD"
    },
    {
      "stop_id": "WESTELG3",
      "stop_name": "Western at Elgin SB - #2889",
      "stop_lat": 43.010028,
      "stop_lon": -81.277456,
      "stop_sequence": 28,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "WESTELG3",
      "stop_name": "Western at Elgin SB - #2889",
      "stop_lat": 43.010028,
      "stop_lon": -81.277456,
      "stop_sequence": 3,
      "route_id": 93,
      "route_color": "FF8000"
    },
    {
      "stop_id": "WHARBAS4",
      "stop_name": "Wharncliffe at Base Line FS SB - #2893",
      "stop_lat": 42.95866,
      "stop_lon": -81.261057,
      "stop_sequence": 12,
      "route_id": 93,
      "route_color": "FF8000"
    },
    {
      "stop_id": "WHITBRAD",
      "stop_name": "White Oak Road at Bradley NS NB - #2899",
      "stop_lat": 42.931339,
      "stop_lon": -81.249597,
      "stop_sequence": 10,
      "route_id": 28,
      "route_color": "5555FF"
    },
    {
      "stop_id": "WHITDOW1",
      "stop_name": "White Oak Road at Dowell FS NB - #2900",
      "stop_lat": 42.929483,
      "stop_lon": -81.24918,
      "stop_sequence": 9,
      "route_id": 28,
      "route_color": "5555FF"
    },
    {
      "stop_id": "WHITDOWE",
      "stop_name": "White Oak Road at Dowell NS NB - #2902",
      "stop_lat": 42.92739,
      "stop_lon": -81.248689,
      "stop_sequence": 8,
      "route_id": 28,
      "route_color": "5555FF"
    },
    {
      "stop_id": "WHITEXE1",
      "stop_name": "White Oak Road at Exeter 2 NB - #2903",
      "stop_lat": 42.925736,
      "stop_lon": -81.248319,
      "stop_sequence": 7,
      "route_id": 28,
      "route_color": "5555FF"
    },
    {
      "stop_id": "WHITEXET",
      "stop_name": "White Oak Road at Exeter NB - #2906",
      "stop_lat": 42.923652,
      "stop_lon": -81.247821,
      "stop_sequence": 6,
      "route_id": 28,
      "route_color": "5555FF"
    },
    {
      "stop_id": "FANSRIC4",
      "stop_name": "Fanshawe at Richmond EB - #2831",
      "stop_lat": 43.026756,
      "stop_lon": -81.282094,
      "stop_sequence": 46,
      "route_id": 19,
      "route_color": "71D0FF"
    },
    {
      "stop_id": "WELLSDA5",
      "stop_name": "Wellington at Southdale NS 3 NB - #2887",
      "stop_lat": 42.942176,
      "stop_lon": -81.225262,
      "stop_sequence": 31,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "WELLSDA6",
      "stop_name": "Wellington at Southdale FS SB - #2888",
      "stop_lat": 42.94299,
      "stop_lon": -81.225878,
      "stop_sequence": 11,
      "route_id": 90,
      "route_color": "FF8A15"
    },
    {
      "stop_id": "SOUTMONT",
      "stop_name": "Southdale at Montgomery WB - #2878",
      "stop_lat": 42.943475,
      "stop_lon": -81.227054,
      "stop_sequence": 32,
      "route_id": 10,
      "route_color": "96BEFA"
    },
    {
      "stop_id": "FANSWOND",
      "stop_name": "Fanshawe at Wonderland NS EB - #2835",
      "stop_lat": 43.018259,
      "stop_lon": -81.310615,
      "stop_sequence": 38,
      "route_id": "09",
      "route_color": "B36666"
    },
    {
      "stop_id": "BARKHUR1",
      "stop_name": "Barker at Huron NB - #2786",
      "stop_lat": 43.015762,
      "stop_lon": -81.231649,
      "stop_sequence": 12,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "BARKKIPP",
      "stop_name": "Barker at Kipps NS NB - #2787",
      "stop_lat": 43.020269,
      "stop_lon": -81.236254,
      "stop_sequence": 14,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "BARKMEL1",
      "stop_name": "Barker at Melsandra FS NB - #2788",
      "stop_lat": 43.018783,
      "stop_lon": -81.232522,
      "stop_sequence": 13,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "KIPPADE1",
      "stop_name": "Kipps at Adelaide WB - #2850",
      "stop_lat": 43.018164,
      "stop_lon": -81.24418,
      "stop_sequence": 16,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "KIPPBEL1",
      "stop_name": "Kipps at Belfield NS WB - #2852",
      "stop_lat": 43.019159,
      "stop_lon": -81.240758,
      "stop_sequence": 15,
      "route_id": 27,
      "route_color": "FE9CA4"
    },
    {
      "stop_id": "COLBSJM2",
      "stop_name": "Colborne at St. James SB - #2801",
      "stop_lat": 42.999882,
      "stop_lon": -81.246661,
      "stop_sequence": 20,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "COLBGRO1",
      "stop_name": "Colborne at Grosvenor SB - #2797",
      "stop_lat": 43.001941,
      "stop_lon": -81.247725,
      "stop_sequence": 19,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "COLBCHEA",
      "stop_name": "Colborne at Cheapside SB - #2796",
      "stop_lat": 43.003593,
      "stop_lon": -81.248574,
      "stop_sequence": 18,
      "route_id": "01",
      "route_color": "70C2DA"
    },
    {
      "stop_id": "EXEWONDE",
      "stop_name": "Exeter & Wonderland - #",
      "stop_lat": 42.920807,
      "stop_lon": -81.277187,
      "stop_sequence": 1,
      "route_id": 28,
      "route_color": "5555FF"
    }
  ]`)
  export { stopsJson };