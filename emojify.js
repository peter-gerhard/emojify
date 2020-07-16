(function (root, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.emojify = factory();
    }
}(this, function () {
        'use strict';

        var emojify = (function () {
            // Get DOM as local variable for simplicity's sake
            var document = typeof window !== 'undefined' && window.document;

            /**
             * NB!
             * The namedEmojiString variable is updated automatically by the
             * `update.sh` script. Do not remove the markers as this will
             * cause `update.sh` to stop working.
             */
            var namedEmojiString =
            /*##EMOJILIST*/"+1,-1,100,1234,1st_place_medal,2nd_place_medal,3rd_place_medal,8ball,a,ab,abacus,abc,abcd,accept,adhesive_bandage,adult,aerial_tramway,afghanistan,airplane,aland_islands,alarm_clock,albania,alembic,algeria,alien,ambulance,american_samoa,amphora,anchor,andorra,angel,anger,angola,angry,anguilla,anguished,ant,antarctica,antigua_barbuda,apple,aquarius,argentina,aries,armenia,arrow_backward,arrow_double_down,arrow_double_up,arrow_down,arrow_down_small,arrow_forward,arrow_heading_down,arrow_heading_up,arrow_left,arrow_lower_left,arrow_lower_right,arrow_right,arrow_right_hook,arrow_up,arrow_up_down,arrow_up_small,arrow_upper_left,arrow_upper_right,arrows_clockwise,arrows_counterclockwise,art,articulated_lorry,artificial_satellite,artist,aruba,ascension_island,asterisk,astonished,astronaut,athletic_shoe,atm,atom,atom_symbol,australia,austria,auto_rickshaw,avocado,axe,azerbaijan,b,baby,baby_bottle,baby_chick,baby_symbol,back,bacon,badger,badminton,bagel,baggage_claim,baguette_bread,bahamas,bahrain,balance_scale,bald_man,bald_woman,ballet_shoes,balloon,ballot_box,ballot_box_with_check,bamboo,banana,bangbang,bangladesh,banjo,bank,bar_chart,barbados,barber,baseball,basecamp,basecampy,basket,basketball,basketball_man,basketball_woman,bat,bath,bathtub,battery,beach_umbrella,bear,bearded_person,bed,bee,beer,beers,beetle,beginner,belarus,belgium,belize,bell,bellhop_bell,benin,bento,bermuda,beverage_box,bhutan,bicyclist,bike,biking_man,biking_woman,bikini,billed_cap,biohazard,bird,birthday,black_circle,black_flag,black_heart,black_joker,black_large_square,black_medium_small_square,black_medium_square,black_nib,black_small_square,black_square_button,blond_haired_man,blond_haired_person,blond_haired_woman,blonde_woman,blossom,blowfish,blue_book,blue_car,blue_heart,blue_square,blush,boar,boat,bolivia,bomb,bone,book,bookmark,bookmark_tabs,books,boom,boot,bosnia_herzegovina,botswana,bouncing_ball_man,bouncing_ball_person,bouncing_ball_woman,bouquet,bouvet_island,bow,bow_and_arrow,bowing_man,bowing_woman,bowl_with_spoon,bowling,bowtie,boxing_glove,boy,brain,brazil,bread,breast_feeding,bricks,bride_with_veil,bridge_at_night,briefcase,british_indian_ocean_territory,british_virgin_islands,broccoli,broken_heart,broom,brown_circle,brown_heart,brown_square,brunei,bug,building_construction,bulb,bulgaria,bullettrain_front,bullettrain_side,burkina_faso,burrito,burundi,bus,business_suit_levitating,busstop,bust_in_silhouette,busts_in_silhouette,butter,butterfly,cactus,cake,calendar,call_me_hand,calling,cambodia,camel,camera,camera_flash,cameroon,camping,canada,canary_islands,cancer,candle,candy,canned_food,canoe,cape_verde,capital_abcd,capricorn,car,card_file_box,card_index,card_index_dividers,caribbean_netherlands,carousel_horse,carrot,cartwheeling,cat,cat2,cayman_islands,cd,central_african_republic,ceuta_melilla,chad,chains,chair,champagne,chart,chart_with_downwards_trend,chart_with_upwards_trend,checkered_flag,cheese,cherries,cherry_blossom,chess_pawn,chestnut,chicken,child,children_crossing,chile,chipmunk,chocolate_bar,chopsticks,christmas_island,christmas_tree,church,cinema,circus_tent,city_sunrise,city_sunset,cityscape,cl,clamp,clap,clapper,classical_building,climbing,climbing_man,climbing_woman,clinking_glasses,clipboard,clipperton_island,clock1,clock10,clock1030,clock11,clock1130,clock12,clock1230,clock130,clock2,clock230,clock3,clock330,clock4,clock430,clock5,clock530,clock6,clock630,clock7,clock730,clock8,clock830,clock9,clock930,closed_book,closed_lock_with_key,closed_umbrella,cloud,cloud_with_lightning,cloud_with_lightning_and_rain,cloud_with_rain,cloud_with_snow,clown_face,clubs,cn,coat,cocktail,coconut,cocos_islands,coffee,coffin,cold_face,cold_sweat,collision,colombia,comet,comoros,compass,computer,computer_mouse,confetti_ball,confounded,confused,congo_brazzaville,congo_kinshasa,congratulations,construction,construction_worker,construction_worker_man,construction_worker_woman,control_knobs,convenience_store,cook,cook_islands,cookie,cool,cop,copyright,corn,costa_rica,cote_divoire,couch_and_lamp,couple,couple_with_heart,couple_with_heart_man_man,couple_with_heart_woman_man,couple_with_heart_woman_woman,couplekiss,couplekiss_man_man,couplekiss_man_woman,couplekiss_woman_woman,cow,cow2,cowboy_hat_face,crab,crayon,credit_card,crescent_moon,cricket,cricket_game,croatia,crocodile,croissant,crossed_fingers,crossed_flags,crossed_swords,crown,cry,crying_cat_face,crystal_ball,cuba,cucumber,cup_with_straw,cupcake,cupid,curacao,curling_stone,curly_haired_man,curly_haired_woman,curly_loop,currency_exchange,curry,cursing_face,custard,customs,cut_of_meat,cyclone,cyprus,czech_republic,dagger,dancer,dancers,dancing_men,dancing_women,dango,dark_sunglasses,dart,dash,date,de,deaf_man,deaf_person,deaf_woman,deciduous_tree,deer,denmark,department_store,derelict_house,desert,desert_island,desktop_computer,detective,diamond_shape_with_a_dot_inside,diamonds,diego_garcia,disappointed,disappointed_relieved,diving_mask,diya_lamp,dizzy,dizzy_face,djibouti,dna,do_not_litter,dog,dog2,dollar,dolls,dolphin,dominica,dominican_republic,door,doughnut,dove,dragon,dragon_face,dress,dromedary_camel,drooling_face,drop_of_blood,droplet,drum,duck,dumpling,dvd,e-mail,eagle,ear,ear_of_rice,ear_with_hearing_aid,earth_africa,earth_americas,earth_asia,ecuador,egg,eggplant,egypt,eight,eight_pointed_black_star,eight_spoked_asterisk,eject_button,el_salvador,electric_plug,electron,elephant,elf,elf_man,elf_woman,email,end,england,envelope,envelope_with_arrow,equatorial_guinea,eritrea,es,estonia,ethiopia,eu,euro,european_castle,european_post_office,european_union,evergreen_tree,exclamation,exploding_head,expressionless,eye,eye_speech_bubble,eyeglasses,eyes,face_with_head_bandage,face_with_thermometer,facepalm,facepunch,factory,factory_worker,fairy,fairy_man,fairy_woman,falafel,falkland_islands,fallen_leaf,family,family_man_boy,family_man_boy_boy,family_man_girl,family_man_girl_boy,family_man_girl_girl,family_man_man_boy,family_man_man_boy_boy,family_man_man_girl,family_man_man_girl_boy,family_man_man_girl_girl,family_man_woman_boy,family_man_woman_boy_boy,family_man_woman_girl,family_man_woman_girl_boy,family_man_woman_girl_girl,family_woman_boy,family_woman_boy_boy,family_woman_girl,family_woman_girl_boy,family_woman_girl_girl,family_woman_woman_boy,family_woman_woman_boy_boy,family_woman_woman_girl,family_woman_woman_girl_boy,family_woman_woman_girl_girl,farmer,faroe_islands,fast_forward,fax,fearful,feelsgood,feet,female_detective,female_sign,ferris_wheel,ferry,field_hockey,fiji,file_cabinet,file_folder,film_projector,film_strip,finland,finnadie,fire,fire_engine,fire_extinguisher,firecracker,firefighter,fireworks,first_quarter_moon,first_quarter_moon_with_face,fish,fish_cake,fishing_pole_and_fish,fist,fist_left,fist_oncoming,fist_raised,fist_right,five,flags,flamingo,flashlight,flat_shoe,fleur_de_lis,flight_arrival,flight_departure,flipper,floppy_disk,flower_playing_cards,flushed,flying_disc,flying_saucer,fog,foggy,foot,football,footprints,fork_and_knife,fortune_cookie,fountain,fountain_pen,four,four_leaf_clover,fox_face,fr,framed_picture,free,french_guiana,french_polynesia,french_southern_territories,fried_egg,fried_shrimp,fries,frog,frowning,frowning_face,frowning_man,frowning_person,frowning_woman,fu,fuelpump,full_moon,full_moon_with_face,funeral_urn,gabon,gambia,game_die,garlic,gb,gear,gem,gemini,genie,genie_man,genie_woman,georgia,ghana,ghost,gibraltar,gift,gift_heart,giraffe,girl,globe_with_meridians,gloves,goal_net,goat,goberserk,godmode,goggles,golf,golfing,golfing_man,golfing_woman,gorilla,grapes,greece,green_apple,green_book,green_circle,green_heart,green_salad,green_square,greenland,grenada,grey_exclamation,grey_question,grimacing,grin,grinning,guadeloupe,guam,guard,guardsman,guardswoman,guatemala,guernsey,guide_dog,guinea,guinea_bissau,guitar,gun,guyana,haircut,haircut_man,haircut_woman,haiti,hamburger,hammer,hammer_and_pick,hammer_and_wrench,hamster,hand,hand_over_mouth,handbag,handball_person,handshake,hankey,hash,hatched_chick,hatching_chick,headphones,health_worker,hear_no_evil,heard_mcdonald_islands,heart,heart_decoration,heart_eyes,heart_eyes_cat,heartbeat,heartpulse,hearts,heavy_check_mark,heavy_division_sign,heavy_dollar_sign,heavy_exclamation_mark,heavy_heart_exclamation,heavy_minus_sign,heavy_multiplication_x,heavy_plus_sign,hedgehog,helicopter,herb,hibiscus,high_brightness,high_heel,hiking_boot,hindu_temple,hippopotamus,hocho,hole,honduras,honey_pot,honeybee,hong_kong,horse,horse_racing,hospital,hot_face,hot_pepper,hotdog,hotel,hotsprings,hourglass,hourglass_flowing_sand,house,house_with_garden,houses,hugs,hungary,hurtrealbad,hushed,ice_cream,ice_cube,ice_hockey,ice_skate,icecream,iceland,id,ideograph_advantage,imp,inbox_tray,incoming_envelope,india,indonesia,infinity,information_desk_person,information_source,innocent,interrobang,iphone,iran,iraq,ireland,isle_of_man,israel,it,izakaya_lantern,jack_o_lantern,jamaica,japan,japanese_castle,japanese_goblin,japanese_ogre,jeans,jersey,jigsaw,jordan,joy,joy_cat,joystick,jp,judge,juggling_person,kaaba,kangaroo,kazakhstan,kenya,key,keyboard,keycap_ten,kick_scooter,kimono,kiribati,kiss,kissing,kissing_cat,kissing_closed_eyes,kissing_heart,kissing_smiling_eyes,kite,kiwi_fruit,kneeling_man,kneeling_person,kneeling_woman,knife,koala,koko,kosovo,kr,kuwait,kyrgyzstan,lab_coat,label,lacrosse,lantern,laos,large_blue_circle,large_blue_diamond,large_orange_diamond,last_quarter_moon,last_quarter_moon_with_face,latin_cross,latvia,laughing,leafy_green,leaves,lebanon,ledger,left_luggage,left_right_arrow,left_speech_bubble,leftwards_arrow_with_hook,leg,lemon,leo,leopard,lesotho,level_slider,liberia,libra,libya,liechtenstein,light_rail,link,lion,lips,lipstick,lithuania,lizard,llama,lobster,lock,lock_with_ink_pen,lollipop,loop,lotion_bottle,lotus_position,lotus_position_man,lotus_position_woman,loud_sound,loudspeaker,love_hotel,love_letter,love_you_gesture,low_brightness,luggage,luxembourg,lying_face,m,macau,macedonia,madagascar,mag,mag_right,mage,mage_man,mage_woman,magnet,mahjong,mailbox,mailbox_closed,mailbox_with_mail,mailbox_with_no_mail,malawi,malaysia,maldives,male_detective,male_sign,mali,malta,man,man_artist,man_astronaut,man_cartwheeling,man_cook,man_dancing,man_facepalming,man_factory_worker,man_farmer,man_firefighter,man_health_worker,man_in_manual_wheelchair,man_in_motorized_wheelchair,man_in_tuxedo,man_judge,man_juggling,man_mechanic,man_office_worker,man_pilot,man_playing_handball,man_playing_water_polo,man_scientist,man_shrugging,man_singer,man_student,man_teacher,man_technologist,man_with_gua_pi_mao,man_with_probing_cane,man_with_turban,mandarin,mango,mans_shoe,mantelpiece_clock,manual_wheelchair,maple_leaf,marshall_islands,martial_arts_uniform,martinique,mask,massage,massage_man,massage_woman,mate,mauritania,mauritius,mayotte,meat_on_bone,mechanic,mechanical_arm,mechanical_leg,medal_military,medal_sports,medical_symbol,mega,melon,memo,men_wrestling,menorah,mens,mermaid,merman,merperson,metal,metro,mexico,microbe,micronesia,microphone,microscope,middle_finger,milk_glass,milky_way,minibus,minidisc,mobile_phone_off,moldova,monaco,money_mouth_face,money_with_wings,moneybag,mongolia,monkey,monkey_face,monocle_face,monorail,montenegro,montserrat,moon,moon_cake,morocco,mortar_board,mosque,mosquito,motor_boat,motor_scooter,motorcycle,motorized_wheelchair,motorway,mount_fuji,mountain,mountain_bicyclist,mountain_biking_man,mountain_biking_woman,mountain_cableway,mountain_railway,mountain_snow,mouse,mouse2,movie_camera,moyai,mozambique,mrs_claus,muscle,mushroom,musical_keyboard,musical_note,musical_score,mute,myanmar,nail_care,name_badge,namibia,national_park,nauru,nauseated_face,nazar_amulet,neckbeard,necktie,negative_squared_cross_mark,nepal,nerd_face,netherlands,neutral_face,new,new_caledonia,new_moon,new_moon_with_face,new_zealand,newspaper,newspaper_roll,next_track_button,ng,ng_man,ng_woman,nicaragua,niger,nigeria,night_with_stars,nine,niue,no_bell,no_bicycles,no_entry,no_entry_sign,no_good,no_good_man,no_good_woman,no_mobile_phones,no_mouth,no_pedestrians,no_smoking,non-potable_water,norfolk_island,north_korea,northern_mariana_islands,norway,nose,notebook,notebook_with_decorative_cover,notes,nut_and_bolt,o,o2,ocean,octocat,octopus,oden,office,office_worker,oil_drum,ok,ok_hand,ok_man,ok_person,ok_woman,old_key,older_adult,older_man,older_woman,om,oman,on,oncoming_automobile,oncoming_bus,oncoming_police_car,oncoming_taxi,one,one_piece_swimsuit,onion,open_book,open_file_folder,open_hands,open_mouth,open_umbrella,ophiuchus,orange,orange_book,orange_circle,orange_heart,orange_square,orangutan,orthodox_cross,otter,outbox_tray,owl,ox,oyster,package,page_facing_up,page_with_curl,pager,paintbrush,pakistan,palau,palestinian_territories,palm_tree,palms_up_together,panama,pancakes,panda_face,paperclip,paperclips,papua_new_guinea,parachute,paraguay,parasol_on_ground,parking,parrot,part_alternation_mark,partly_sunny,partying_face,passenger_ship,passport_control,pause_button,paw_prints,peace_symbol,peach,peacock,peanuts,pear,pen,pencil,pencil2,penguin,pensive,people_holding_hands,performing_arts,persevere,person_bald,person_curly_hair,person_fencing,person_in_manual_wheelchair,person_in_motorized_wheelchair,person_red_hair,person_white_hair,person_with_probing_cane,person_with_turban,peru,petri_dish,philippines,phone,pick,pie,pig,pig2,pig_nose,pill,pilot,pinching_hand,pineapple,ping_pong,pirate_flag,pisces,pitcairn_islands,pizza,place_of_worship,plate_with_cutlery,play_or_pause_button,pleading_face,point_down,point_left,point_right,point_up,point_up_2,poland,police_car,police_officer,policeman,policewoman,poodle,poop,popcorn,portugal,post_office,postal_horn,postbox,potable_water,potato,pouch,poultry_leg,pound,pout,pouting_cat,pouting_face,pouting_man,pouting_woman,pray,prayer_beads,pregnant_woman,pretzel,previous_track_button,prince,princess,printer,probing_cane,puerto_rico,punch,purple_circle,purple_heart,purple_square,purse,pushpin,put_litter_in_its_place,qatar,question,rabbit,rabbit2,raccoon,racehorse,racing_car,radio,radio_button,radioactive,rage,rage1,rage2,rage3,rage4,railway_car,railway_track,rainbow,rainbow_flag,raised_back_of_hand,raised_eyebrow,raised_hand,raised_hand_with_fingers_splayed,raised_hands,raising_hand,raising_hand_man,raising_hand_woman,ram,ramen,rat,razor,receipt,record_button,recycle,red_car,red_circle,red_envelope,red_haired_man,red_haired_woman,red_square,registered,relaxed,relieved,reminder_ribbon,repeat,repeat_one,rescue_worker_helmet,restroom,reunion,revolving_hearts,rewind,rhinoceros,ribbon,rice,rice_ball,rice_cracker,rice_scene,right_anger_bubble,ring,ringed_planet,robot,rocket,rofl,roll_eyes,roll_of_paper,roller_coaster,romania,rooster,rose,rosette,rotating_light,round_pushpin,rowboat,rowing_man,rowing_woman,ru,rugby_football,runner,running,running_man,running_shirt_with_sash,running_woman,rwanda,sa,safety_pin,safety_vest,sagittarius,sailboat,sake,salt,samoa,san_marino,sandal,sandwich,santa,sao_tome_principe,sari,sassy_man,sassy_woman,satellite,satisfied,saudi_arabia,sauna_man,sauna_person,sauna_woman,sauropod,saxophone,scarf,school,school_satchel,scientist,scissors,scorpion,scorpius,scotland,scream,scream_cat,scroll,seat,secret,see_no_evil,seedling,selfie,senegal,serbia,service_dog,seven,seychelles,shallow_pan_of_food,shamrock,shark,shaved_ice,sheep,shell,shield,shinto_shrine,ship,shipit,shirt,shit,shoe,shopping,shopping_cart,shorts,shower,shrimp,shrug,shushing_face,sierra_leone,signal_strength,singapore,singer,sint_maarten,six,six_pointed_star,skateboard,ski,skier,skull,skull_and_crossbones,skunk,sled,sleeping,sleeping_bed,sleepy,slightly_frowning_face,slightly_smiling_face,slot_machine,sloth,slovakia,slovenia,small_airplane,small_blue_diamond,small_orange_diamond,small_red_triangle,small_red_triangle_down,smile,smile_cat,smiley,smiley_cat,smiling_face_with_three_hearts,smiling_imp,smirk,smirk_cat,smoking,snail,snake,sneezing_face,snowboarder,snowflake,snowman,snowman_with_snow,soap,sob,soccer,socks,softball,solomon_islands,somalia,soon,sos,sound,south_africa,south_georgia_south_sandwich_islands,south_sudan,space_invader,spades,spaghetti,sparkle,sparkler,sparkles,sparkling_heart,speak_no_evil,speaker,speaking_head,speech_balloon,speedboat,spider,spider_web,spiral_calendar,spiral_notepad,sponge,spoon,squid,sri_lanka,st_barthelemy,st_helena,st_kitts_nevis,st_lucia,st_martin,st_pierre_miquelon,st_vincent_grenadines,stadium,standing_man,standing_person,standing_woman,star,star2,star_and_crescent,star_of_david,star_struck,stars,station,statue_of_liberty,steam_locomotive,stethoscope,stew,stop_button,stop_sign,stopwatch,straight_ruler,strawberry,stuck_out_tongue,stuck_out_tongue_closed_eyes,stuck_out_tongue_winking_eye,student,studio_microphone,stuffed_flatbread,sudan,sun_behind_large_cloud,sun_behind_rain_cloud,sun_behind_small_cloud,sun_with_face,sunflower,sunglasses,sunny,sunrise,sunrise_over_mountains,superhero,superhero_man,superhero_woman,supervillain,supervillain_man,supervillain_woman,surfer,surfing_man,surfing_woman,suriname,sushi,suspect,suspension_railway,svalbard_jan_mayen,swan,swaziland,sweat,sweat_drops,sweat_smile,sweden,sweet_potato,swim_brief,swimmer,swimming_man,swimming_woman,switzerland,symbols,synagogue,syria,syringe,t-rex,taco,tada,taiwan,tajikistan,takeout_box,tanabata_tree,tangerine,tanzania,taurus,taxi,tea,teacher,technologist,teddy_bear,telephone,telephone_receiver,telescope,tennis,tent,test_tube,thailand,thermometer,thinking,thought_balloon,thread,three,thumbsdown,thumbsup,ticket,tickets,tiger,tiger2,timer_clock,timor_leste,tipping_hand_man,tipping_hand_person,tipping_hand_woman,tired_face,tm,togo,toilet,tokelau,tokyo_tower,tomato,tonga,tongue,toolbox,tooth,top,tophat,tornado,tr,trackball,tractor,traffic_light,train,train2,tram,triangular_flag_on_post,triangular_ruler,trident,trinidad_tobago,tristan_da_cunha,triumph,trolleybus,trollface,trophy,tropical_drink,tropical_fish,truck,trumpet,tshirt,tulip,tumbler_glass,tunisia,turkey,turkmenistan,turks_caicos_islands,turtle,tuvalu,tv,twisted_rightwards_arrows,two,two_hearts,two_men_holding_hands,two_women_holding_hands,u5272,u5408,u55b6,u6307,u6708,u6709,u6e80,u7121,u7533,u7981,u7a7a,uganda,uk,ukraine,umbrella,unamused,underage,unicorn,united_arab_emirates,united_nations,unlock,up,upside_down_face,uruguay,us,us_outlying_islands,us_virgin_islands,uzbekistan,v,vampire,vampire_man,vampire_woman,vanuatu,vatican_city,venezuela,vertical_traffic_light,vhs,vibration_mode,video_camera,video_game,vietnam,violin,virgo,volcano,volleyball,vomiting_face,vs,vulcan_salute,waffle,wales,walking,walking_man,walking_woman,wallis_futuna,waning_crescent_moon,waning_gibbous_moon,warning,wastebasket,watch,water_buffalo,water_polo,watermelon,wave,wavy_dash,waxing_crescent_moon,waxing_gibbous_moon,wc,weary,wedding,weight_lifting,weight_lifting_man,weight_lifting_woman,western_sahara,whale,whale2,wheel_of_dharma,wheelchair,white_check_mark,white_circle,white_flag,white_flower,white_haired_man,white_haired_woman,white_heart,white_large_square,white_medium_small_square,white_medium_square,white_small_square,white_square_button,wilted_flower,wind_chime,wind_face,wine_glass,wink,wolf,woman,woman_artist,woman_astronaut,woman_cartwheeling,woman_cook,woman_dancing,woman_facepalming,woman_factory_worker,woman_farmer,woman_firefighter,woman_health_worker,woman_in_manual_wheelchair,woman_in_motorized_wheelchair,woman_judge,woman_juggling,woman_mechanic,woman_office_worker,woman_pilot,woman_playing_handball,woman_playing_water_polo,woman_scientist,woman_shrugging,woman_singer,woman_student,woman_teacher,woman_technologist,woman_with_headscarf,woman_with_probing_cane,woman_with_turban,womans_clothes,womans_hat,women_wrestling,womens,woozy_face,world_map,worried,wrench,wrestling,writing_hand,x,yarn,yawning_face,yellow_circle,yellow_heart,yellow_square,yemen,yen,yin_yang,yo_yo,yum,zambia,zany_face,zap,zebra,zero,zimbabwe,zipper_mouth_face,zombie,zombie_man,zombie_woman,zzz";


            var namedEmoji = namedEmojiString.split(/,/);

            /* A hash with the named emoji as keys */
            var namedMatchHash = namedEmoji.reduce(function(memo, v) {
                memo[v] = true;
                return memo;
            }, {});

            var emoticonsProcessed;
            var emojiMegaRe;

            function initEmoticonsProcessed() {
                /* List of emoticons used in the regular expression */
                var emoticons = {
        /* :..: */ named: /:([a-z0-9A-Z_-]+):/,
        /* :-)  */ slight_smile: /:-?\)/g,
        /* :-D  */ smiley: /[:;]-?d/gi,
        /* ;-)  */ wink: /;-?\)/g,
        /* :-(  */ worried: /:-?\(/g,
        /* :'-( */ sob: /:['’]-?\(|:&#x27;\(/g,
        /* :-/  */ confused: /:-?\//g,
        /* :-s  */ confounded: /:-?s/gi,
        /* :-p  */ stuck_out_tongue: /:-?p/gi,
        /* ;-p  */ stuck_out_tongue_winking_eye: /;-?p/gi,
        /* :-o  */ open_mouth: /:-?o/gi,
        /* >:-( */ angry: />:-?\(/gi,
        /* :-*  */ kissing: /:-?\*/g,
        /* :-|  */ expressionless: /:-?\|/g,
        /* :-x  */ mask: /:-x/gi,
        /* <3   */ heart: /<3|&lt;3/g,
        /* </3  */ broken_heart: /<\/3|&lt;&#x2F;3/g,
        /* :+1: */ thumbsup: /:\+1:/g,
        /* :-1: */ thumbsdown: /:\-1:/g
                };

                if (defaultConfig.ignore_emoticons) {
                    emoticons = {
             /* :..: */ named: /:([a-z0-9A-Z_-]+):/,
             /* :+1: */ thumbsup: /:\+1:/g,
             /* :-1: */ thumbsdown: /:\-1:/g
                    };
                }

                return Object.keys(emoticons).map(function(key) {
                    return [emoticons[key], key];
                });
            }

            function initMegaRe() {
                /* The source for our mega-regex */
                var mega = emoticonsProcessed
                        .map(function(v) {
                            var re = v[0];
                            var val = re.source || re;
                            val = val.replace(/(^|[^\[])\^/g, '$1');
                            return "(" + val + ")";
                        })
                        .join('|');

                /* The regex used to find emoji */
                return new RegExp(mega, "gi");
            }

            var defaultConfig = {
                emojify_tag_type: null,
                only_crawl_id: null,
                img_dir: 'images/emoji',
                ignore_emoticons: false,
                ignored_tags: {
                    'SCRIPT': 1,
                    'TEXTAREA': 1,
                    'A': 1,
                    'PRE': 1,
                    'CODE': 1,
                    'MATH': 1
                }
            };

            /* Returns true if the given char is whitespace */
            function isWhitespace(s) {
                return s === ' ' || s === '\t' || s === '\r' || s === '\n' || s === '';
            }

            /* Given a match in a node, replace the text with an image */
            function insertEmojicon(node, match, emojiName) {
                var emojiElement = document.createElement(defaultConfig.emojify_tag_type || 'img');

                if (defaultConfig.emojify_tag_type && defaultConfig.emojify_tag_type !== 'img') {
                    emojiElement.setAttribute('class', 'emoji emoji-' + emojiName);
                } else {
                    emojiElement.setAttribute('class', 'emoji');
                    emojiElement.setAttribute('src', defaultConfig.img_dir + '/' + emojiName + '.png');
                }

                /**
                 * mutantjs doesn't have the ability to resolve CSS properties (we could add it in, but it would slow it down a lot)
                 * so it detects that an image will cause a reflow when:
                 * - The image is in a loading state
                 * - The image does not have height and width attributes
                 * Then, when the image state changes to loaded, it emits a reflow notification.
                 *
                 * For this reason, make sure we set the height and width on the emoji image.
                 */
                emojiElement.setAttribute('height', '20');
                emojiElement.setAttribute('width', '20');

                emojiElement.setAttribute('title', ':' + emojiName + ':');
                emojiElement.setAttribute('alt', ':' + emojiName + ':');
                emojiElement.setAttribute('align', 'absmiddle');
                node.splitText(match.index);
                node.nextSibling.nodeValue = node.nextSibling.nodeValue.substr(match[0].length, node.nextSibling.nodeValue.length);
                emojiElement.appendChild(node.splitText(match.index));
                node.parentNode.insertBefore(emojiElement, node.nextSibling);
            }

            /* Given an regex match, return the name of the matching emoji */
            function getEmojiNameForMatch(match) {
                /* Special case for named emoji */
                if(match[1] && match[2]) {
                    var named = match[2];
                    if(namedMatchHash[named]) { return named; }
                    return;
                }
                for(var i = 3; i < match.length - 1; i++) {
                    if(match[i]) {
                        return emoticonsProcessed[i - 2][1];
                    }
                }
            }

            function defaultReplacer(emoji, name) {
                /*jshint validthis: true */
                if (this.config.emojify_tag_type && this.config.emojify_tag_type !== 'img') {
                    return "<" +  this.config.emojify_tag_type +" title=':" + name + ":' alt=':" + name + ":' class='emoji emoji-" + name + "'> </" + this.config.emojify_tag_type+ ">";
                } else {
                    return "<img title=':" + name + ":' alt=':" + name + ":' class='emoji' src='" + this.config.img_dir + '/' + name + ".png' align='absmiddle' />";
                }
            }

            function Validator() {
                this.lastEmojiTerminatedAt = -1;
            }

            Validator.prototype = {
                validate: function(match, index, input) {
                    var self = this;

                    /* Validator */
                    var emojiName = getEmojiNameForMatch(match);
                    if(!emojiName) { return; }

                    var m = match[0];
                    var length = m.length;
                    // var index = match.index;
                    // var input = match.input;

                    function success() {
                        self.lastEmojiTerminatedAt = length + index;
                        return emojiName;
                    }

                    /* At the beginning? */
                    if(index === 0) { return success(); }

                    /* At the end? */
                    if(input.length === m.length + index) { return success(); }

                    var hasEmojiBefore = this.lastEmojiTerminatedAt === index;
                    if (hasEmojiBefore) { return success();}

                    /* Has a whitespace before? */
                    if(isWhitespace(input.charAt(index - 1))) { return success(); }

                    var hasWhitespaceAfter = isWhitespace(input.charAt(m.length + index));
                    /* Has a whitespace after? */
                    if(hasWhitespaceAfter && hasEmojiBefore) { return success(); }

                    return;
                }
            };

            function emojifyString (htmlString, replacer) {
                if(!htmlString) { return htmlString; }
                if(!replacer) { replacer = defaultReplacer; }

                emoticonsProcessed = initEmoticonsProcessed();
                emojiMegaRe = initMegaRe();

                var validator = new Validator();

                return htmlString.replace(emojiMegaRe, function() {
                    var matches = Array.prototype.slice.call(arguments, 0, -2);
                    var index = arguments[arguments.length - 2];
                    var input = arguments[arguments.length - 1];
                    var emojiName = validator.validate(matches, index, input);
                    if(emojiName) {
                        return replacer.apply({
                                config: defaultConfig
                            },
                            [arguments[0], emojiName]
                        );
                    }
                    /* Did not validate, return the original value */
                    return arguments[0];
                });

            }

            function run(el) {
                emoticonsProcessed = initEmoticonsProcessed();
                emojiMegaRe = initMegaRe();

                // Check if an element was not passed.
                if(typeof el === 'undefined'){
                    // Check if an element was configured. If not, default to the body.
                    if (defaultConfig.only_crawl_id) {
                        el = document.getElementById(defaultConfig.only_crawl_id);
                    } else {
                        el = document.body;
                    }
                }

                var ignoredTags = defaultConfig.ignored_tags;

                var nodeIterator = document.createTreeWalker(
                    el,
                    NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
                    function(node) {
                        if(node.nodeType !== 1) {
                            /* Text Node? Good! */
                            return NodeFilter.FILTER_ACCEPT;
                        }

                        if(ignoredTags[node.tagName]) {
                            return NodeFilter.FILTER_REJECT;
                        }

                        if(node.classList && node.classList.contains('no-emojify')) {
                            return NodeFilter.FILTER_REJECT;
                        }

                        return NodeFilter.FILTER_SKIP;
                    },
                    false);

                var nodeList = [];
                var node;
                while((node = nodeIterator.nextNode()) !== null) {
                    nodeList.push(node);
                }

                nodeList.forEach(function(node) {
                    var match;
                    var matches = [];
                    var validator = new Validator();

                    while ((match = emojiMegaRe.exec(node.data)) !== null) {
                        if(validator.validate(match, match.index, match.input)) {
                            matches.push(match);
                        }
                    }

                    for (var i = matches.length; i-- > 0;) {
                        /* Replace the text with the emoji */
                        var emojiName = getEmojiNameForMatch(matches[i]);
                        insertEmojicon(node, matches[i], emojiName);
                    }
                });
            }

            return {
                // Sane defaults
                defaultConfig: defaultConfig,
                emojiNames: namedEmoji,
                setConfig: function (newConfig) {
                    Object.keys(defaultConfig).forEach(function(f) {
                        if(f in newConfig) {
                            defaultConfig[f] = newConfig[f];
                        }
                    });
                },

                replace: emojifyString,

                // Main method
                run: run
            };
        })();

        return emojify;
    }
));
