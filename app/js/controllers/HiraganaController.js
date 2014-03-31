'use strict';

hiraganaApp.controller('HiraganaController',
    function EventController($scope) {

        $scope.hiraganas = [
           {
               group: "a",
               data: [{
                   english: "a",
                   kana: "あ"
               },
                      {
                          english: "i",
                          kana: "い"
                      },
                      {
                          english: "u",
                          kana: "う"
                      },
                      {
                          english: "e",
                          kana: "え"
                      },
                      {
                          english: "o",
                          kana: "お"
                      }]
           },
            {
                group: "ka",
                data: [{
                    english: "ka",
                    kana: "か"
                },
                      {
                          english: "ki",
                          kana: "き"
                      },
                      {
                          english: "ku",
                          kana: "く"
                      },
                      {
                          english: "ke",
                          kana: "け"
                      },
                      {
                          english: "ko",
                          kana: "こ"
                      }]
            },
            {
                group: "sa",
                data: [{
                          english: "sa",
                          kana: "さ"
                     },
                      {
                          english: "shi",
                          kana: "し"
                      },
                      {
                          english: "su",
                          kana: "す"
                      },
                      {
                          english: "se",
                          kana: "せ"
                      },
                      {
                          english: "so",
                          kana: "そ"
                      }]
            },
            {
                group: "ta",
                data: [{
                         english: "ta",
                         kana: "た"
                         },
                      {
                          english: "chi",
                          kana: "ち"
                      },
                      {
                          english: "tsu",
                          kana: "つ"
                      },
                      {
                          english: "te",
                          kana: "て"
                      },
                      {
                          english: "to",
                          kana: "と"
                      }]
            },
            {
                group: "na",
                data: [{
                            english: "na",
                            kana: "な"
                        },
                      {
                          english: "ni",
                          kana: "に"
                      },
                      {
                          english: "nu",
                          kana: "ぬ"
                      },
                      {
                          english: "ne",
                          kana: "ね"
                      },
                      {
                          english: "no",
                          kana: "の"
                      }]
            },
            {
                group: "ha",
                data: [{
                    english: "ha",
                    kana: "は"
                },
                      {
                          english: "hi",
                          kana: "ひ"
                      },
                      {
                          english: "fu",
                          kana: "ふ"
                      },
                      {
                          english: "he",
                          kana: "へ"
                      },
                      {
                          english: "ho",
                          kana: "ほ"
                      }]
            },
            {
                group: "ma",
                data: [{
                    english: "ma",
                    kana: "ま"
                },
                      {
                          english: "mi",
                          kana: "み"
                      },
                      {
                          english: "mu",
                          kana: "む"
                      },
                      {
                          english: "me",
                          kana: "め"
                      },
                      {
                          english: "mo",
                          kana: "も"
                      }]
            },
            {
                group: "ya",
                data: [{
                    english: "ya",
                    kana: "や"
                },
                      {
                          english: "yu",
                          kana: "ゆ"
                      },                      
                      {
                          english: "yo",
                          kana: "よ"
                      }]
            },
            {
                group: "ra",
                data: [{
                    english: "ra",
                    kana: "ら"
                },
                      {
                          english: "ri",
                          kana: "り"
                      },
                      {
                          english: "ru",
                          kana: "る"
                      },
                      {
                          english: "re",
                          kana: "れ"
                      },
                      {
                          english: "ro",
                          kana: "ろ"
                      }]
            },
            {
                group: "wa/n",
                data: [{
                    english: "n",
                    kana: "ん"
                },
                      {
                          english: "wa",
                          kana: "わ"
                      },
                {
                    english: "wo",
                    kana: "を"
                }]
            }];

        $scope.kana = [
           {
               english: "a",
               kana: "あ"
           },
           {
               english: "i",
               kana: "い"
           },
           {
               english: "u",
               kana: "う"
           },
           {
               english: "e",
               kana: "え"
           },
           {
               english: "o",
               kana: "お"
           }
        ];
    }
);