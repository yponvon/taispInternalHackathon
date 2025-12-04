GS.dataCache['5D067EB0313253444A597AD384C660D9BE4E'] = {
    "uid": "5D067EB0313253444A597AD384C660D9BE4E",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Asking for help",
        "type": "vn.scene",
        "parentId": "CB9E7A7D8116934DF908F9E4C73503B31FBC",
        "chapterUid": "D7AFFF0E1D9891413F89A5629AF9ADA05A54",
        "order": 0,
        "localizableStrings": {
            "86639D574EE45947BF8A6A77AECEF1740C79": {
                "t": "*Get his attention. Consider deaf etiquettes.*",
                "d": {
                    "cid": "BA77A09EK7F14A4C2BSA11BE8CC099F00810",
                    "eid": "2388A69C69FA4549544BEE48D239E53CE261"
                }
            },
            "B05A65484D86824F121AA163843AF1A5471F": {
                "t": "-sign language-\n(Yes?)",
                "d": {
                    "cid": "F9B41CA75FE9924FB219CCC1043C2E81FE03",
                    "eid": "EEFF38EF1E74C3413D6A66515D1DA7DC834A"
                }
            },
            "50B648594E535447735B4AE90B9FA3ADC35A": {
                "t": "*He is not happy with how you approached him.*",
                "d": {
                    "cid": 0,
                    "eid": "58F4FECE58CB984B4C889BD3C1DF775E8857"
                }
            },
            "815A9D21956F4048E5888EB4599D5C8E7DCB": {
                "t": "*Explains situation*",
                "d": {
                    "cid": 0,
                    "eid": "F9FE0FA90EA17743D128D368447D29352016"
                }
            },
            "AFD65E4D70FF1447695B024466765876FB3E": {
                "t": "*He chooses to ignore you.*",
                "d": {
                    "cid": 0,
                    "eid": "622D369900DDB04CDA6913735105BFFC328E"
                }
            },
            "8E391CC6606B24444B5BCDC63B0869070514": {
                "t": "-sign language-\n(Oh that means car crash.)",
                "d": {
                    "cid": "F9B41CA75FE9924FB219CCC1043C2E81FE03",
                    "eid": "ABA71D0851C054422C5A3F22907C130C06E3"
                }
            },
            "0F6BDE2A67844246571837B54B48FF88C56C": {
                "t": "Why did she mention car crash to you...?",
                "d": {
                    "eid": "395C4D0423B9724F388B6D57C5F3588C63E5"
                }
            }
        },
        "commands": [
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "cafe_counter_day",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    },
                    "layer": 0,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "blendMode": 0,
                    "origin": 0,
                    "zOrder": 0,
                    "loopVertical": 0,
                    "loopHorizontal": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 1,
                        "easing.type": 1,
                        "animation.type": 1,
                        "origin": 1,
                        "zOrder": 1,
                        "blendMode": 1,
                        "viewport.type": 1,
                        "loopVertical": 1,
                        "loopHorizontal": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "expanded": false
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 0,
                    "expressionId": "7826657B2EBA584E8E1A8567038427A0F6E2",
                    "characterId": "F9B41CA75FE9924FB219CCC1043C2E81FE03",
                    "zOrder": 0,
                    "origin": 0,
                    "blendMode": 0,
                    "positionType": 1,
                    "motionBlur": {
                        "enabled": 0,
                        "delay": 2,
                        "opacity": 100,
                        "dissolveSpeed": 3
                    },
                    "position": {
                        "x": 370,
                        "y": 30,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {
                            "x": 406,
                            "y": 86,
                            "zoom": 1.2,
                            "angle": 0,
                            "horizontalFlip": false,
                            "width": 433,
                            "height": 577
                        },
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 0
                        }
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 0
                    },
                    "duration": 0,
                    "waitForCompletion": 1,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": ""
                    }
                },
                "indent": 0
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "GetAttention"
                },
                "indent": 0,
                "uid": "6CA5E8934DA005468988E593904F6760C8AE"
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "hotspot",
                        "index": 0,
                        "scope": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetScope": 0,
                    "targetRange": {
                        "start": 0,
                        "end": 0
                    },
                    "targetReferenceDomain": "com.degica.vnm.default",
                    "targetReference": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "operation": 0,
                    "source": 0,
                    "sourceValue": 0,
                    "sourceRandom": {
                        "start": 0,
                        "end": 0
                    },
                    "sourceScope": 0,
                    "sourceVariable": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "sourceReferenceDomain": "com.degica.vnm.default",
                    "sourceReference": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "75C446A334F3664F2B2A55963FD89824B7F3"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "86639D574EE45947BF8A6A77AECEF1740C79",
                        "defaultText": "*Get his attention. Consider deaf etiquettes.*"
                    },
                    "position": 0,
                    "characterId": "BA77A09EK7F14A4C2BSA11BE8CC099F00810",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "2388A69C69FA4549544BEE48D239E53CE261",
                "expanded": true
            },
            {
                "id": "gs.AddHotspot",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0,
                    "shape": "rect",
                    "positionType": 0,
                    "actions": {
                        "onClick": {
                            "type": 4,
                            "bindValue": 1,
                            "bindValueVariable": {
                                "scope": 0,
                                "index": 0
                            },
                            "commonEventId": 0,
                            "label": "Happy",
                            "switch": {
                                "name": "hotspot",
                                "index": 0,
                                "scope": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            "scene": null
                        },
                        "onEnter": {
                            "type": 0,
                            "bindValue": 0,
                            "bindValueVariable": {
                                "scope": 0,
                                "index": 0
                            },
                            "commonEventId": 0,
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0
                            },
                            "scene": null
                        },
                        "onSelect": {
                            "type": 0,
                            "bindValue": 0,
                            "bindValueVariable": {
                                "scope": 0,
                                "index": 0
                            },
                            "commonEventId": 0,
                            "label": "None",
                            "switch": {
                                "scope": 1,
                                "index": 0
                            },
                            "scene": null
                        },
                        "onDeselect": {
                            "type": 0,
                            "bindValue": 0,
                            "bindValueVariable": {
                                "scope": 0,
                                "index": 0
                            },
                            "commonEventId": 0,
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0
                            },
                            "scene": null
                        },
                        "onLeave": {
                            "type": 0,
                            "bindValue": 0,
                            "bindValueVariable": {
                                "scope": 0,
                                "index": 0
                            },
                            "commonEventId": 0,
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0
                            },
                            "scene": null
                        },
                        "onDrag": {
                            "type": 0,
                            "bindValue": 0,
                            "bindValueVariable": {
                                "scope": 0,
                                "index": 0
                            },
                            "commonEventId": 0,
                            "label": "",
                            "switch": {
                                "scope": 1,
                                "index": 0
                            },
                            "scene": null
                        }
                    },
                    "dragging": {
                        "enabled": 0,
                        "variable": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "horizontal": 1,
                        "vertical": 0,
                        "rect": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 200,
                                "height": 50
                            }
                        }
                    },
                    "position": 1,
                    "box": {
                        "x": 421,
                        "y": 344,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {
                            "x": 468,
                            "y": 344,
                            "width": 300,
                            "height": 100,
                            "horizontalFlip": false,
                            "zoom": 1,
                            "angle": 0
                        },
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 160
                        },
                        "size": {
                            "width": 386,
                            "height": 100
                        }
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "hoverGraphic": null
                },
                "indent": 0,
                "uid": "D4E271481C8A9845296B18854A354F8E8FF6",
                "expanded": false
            },
            {
                "id": "gs.WaitForInput",
                "params": {
                    "key": 1,
                    "state": 1,
                    "action": {
                        "type": 0,
                        "data": {
                            "label": "$$C50EA7EF0592134BEF59E098BD7961D34EB4",
                            "commonEventId": 0
                        }
                    }
                },
                "indent": 0,
                "uid": "576910524841D1410F8A571570AC74A406CE"
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 6
                },
                "indent": 0,
                "uid": "57080FE7392647476C4BC077ECE691E88C3D"
            },
            {
                "id": "gs.Condition",
                "params": {
                    "variable": {
                        "name": "hotspot",
                        "index": 0,
                        "scope": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "numberValue": 0,
                    "textValue": "1",
                    "switchValue": 0,
                    "valueType": 0,
                    "operation": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "4C14B70C6DDAC141B63AE843BD7E104438BE"
            },
            {
                "id": "vn.CharacterChangeExpression",
                "params": {
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "fading": 0,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "duration": 15,
                    "waitForCompletion": 1,
                    "characterId": "F9B41CA75FE9924FB219CCC1043C2E81FE03",
                    "expressionId": "475E0FB54DF023494E1A0B16A0EA815CF458",
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 0,
                        "animation.type": 1
                    }
                },
                "indent": 0,
                "uid": "3EAFDA972147704AA77A7E55088371E0A4A1",
                "expanded": false
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "50B648594E535447735B4AE90B9FA3ADC35A",
                        "defaultText": "*He is not happy with how you approached him.*"
                    },
                    "position": 0,
                    "characterId": 0,
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "58F4FECE58CB984B4C889BD3C1DF775E8857",
                "expanded": true
            },
            {
                "id": "vn.CharacterChangeExpression",
                "params": {
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "fading": 0,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "duration": 10,
                    "waitForCompletion": 1,
                    "characterId": "F9B41CA75FE9924FB219CCC1043C2E81FE03",
                    "expressionId": "7826657B2EBA584E8E1A8567038427A0F6E2",
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "FC7859F51FCB2942CF4BE3D3D7DC264AD92B"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "AFD65E4D70FF1447695B024466765876FB3E",
                        "defaultText": "*He chooses to ignore you.*"
                    },
                    "position": 0,
                    "characterId": 0,
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "622D369900DDB04CDA6913735105BFFC328E",
                "expanded": true
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "GetAttention",
                    "target": "activeContext"
                },
                "indent": 0,
                "uid": "BBFBB7A608B2624739785072F016C60B43C7"
            },
            {
                "id": "gs.ConditionElse",
                "params": {},
                "indent": 0,
                "uid": "6369BE7B21986949646B5DC02A5CDEEFB1C3"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "Happy"
                },
                "indent": 1,
                "uid": "36D011695E36004A3A592A237ADAA54CEC6E"
            },
            {
                "id": "vn.CharacterChangeExpression",
                "params": {
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "fading": 0,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "duration": 18,
                    "waitForCompletion": 1,
                    "characterId": "F9B41CA75FE9924FB219CCC1043C2E81FE03",
                    "expressionId": "A54724225F8EB44711987689F9ED2A987EAE",
                    "fieldFlags": {
                        "duration": 0
                    }
                },
                "indent": 0,
                "uid": "F0F6E4989F8E254C792B19578DD720696BEF"
            },
            {
                "id": "vn.CharacterChangeExpression",
                "params": {
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "fading": 0,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "duration": 18,
                    "waitForCompletion": 1,
                    "characterId": "F9B41CA75FE9924FB219CCC1043C2E81FE03",
                    "expressionId": "EE82E1AF0213E2476E3823B2D23DF2D754D7",
                    "fieldFlags": {
                        "duration": 0
                    }
                },
                "indent": 0,
                "uid": "2169C0138E6531431A48D017C9461CD786B7"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "3FC2C70568A4984D389A6A69669295952B9D",
                    "parameters": {
                        "values": []
                    }
                },
                "indent": 0,
                "uid": "3A7AFA06310AB440458AC8410C7A4AA37897"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "B05A65484D86824F121AA163843AF1A5471F",
                        "defaultText": "-sign language-\n(Yes?)"
                    },
                    "position": 0,
                    "characterId": "F9B41CA75FE9924FB219CCC1043C2E81FE03",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "EEFF38EF1E74C3413D6A66515D1DA7DC834A",
                "expanded": true
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "EA06470D8140964F0749A8D76577A39B05E1",
                    "parameters": {
                        "values": []
                    }
                },
                "indent": 0,
                "uid": "3E9C875F76CCC7443429E7D2FD0794BF76D8"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "815A9D21956F4048E5888EB4599D5C8E7DCB",
                        "defaultText": "*Explains situation*"
                    },
                    "position": 0,
                    "characterId": 0,
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "F9FE0FA90EA17743D128D368447D29352016",
                "expanded": true
            },
            {
                "id": "vn.CharacterChangeExpression",
                "params": {
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "fading": 0,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "duration": 10,
                    "waitForCompletion": 1,
                    "characterId": "F9B41CA75FE9924FB219CCC1043C2E81FE03",
                    "expressionId": "D337B8D93C23C4412068C9B8E52AF9DCDA44",
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "23BA80131917D147085AB968678A55CFC9ED"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "3FC2C70568A4984D389A6A69669295952B9D",
                    "parameters": {
                        "values": []
                    }
                },
                "indent": 0,
                "uid": "93978E1D5320B8482B6949F693DE42450C53"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "8E391CC6606B24444B5BCDC63B0869070514",
                        "defaultText": "-sign language-\n(Oh that means car crash.)"
                    },
                    "position": 0,
                    "characterId": "F9B41CA75FE9924FB219CCC1043C2E81FE03",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "ABA71D0851C054422C5A3F22907C130C06E3",
                "expanded": true
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "EA06470D8140964F0749A8D76577A39B05E1",
                    "parameters": {
                        "values": []
                    }
                },
                "indent": 0,
                "uid": "279EF91C643771497B9A1E264B020B6C1170"
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "F9B41CA75FE9924FB219CCC1043C2E81FE03",
                    "duration": 0,
                    "waitForCompletion": 0,
                    "easing": {
                        "type": 1,
                        "inOut": 0
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "EE66434B8EAAC24FBE48485307F26E91B378"
            },
            {
                "id": "gs.StopMusic",
                "params": {
                    "layer": 0,
                    "fadeOutDuration": 0.6,
                    "fieldFlags": {
                        "fadeOutDuration": 0
                    }
                },
                "indent": 0,
                "uid": "FDC43C94792BC746DF7AD6127258898B6E3E"
            },
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": null,
                    "layer": 0,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "blendMode": 0,
                    "origin": 0,
                    "zOrder": 0,
                    "loopVertical": 0,
                    "loopHorizontal": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "B555ABCC60C82645EB28A199545EF463796F"
            },
            {
                "id": "gs.ChangeTextSettings",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 1,
                    "bold": 1,
                    "italic": 0,
                    "underline": 0,
                    "smallCaps": 0,
                    "strikeThrough": 0,
                    "lineSpacing": 0,
                    "padding": [
                        6,
                        0,
                        6,
                        0
                    ],
                    "font": "Verdana",
                    "size": 40,
                    "outline": 0,
                    "shadow": 0,
                    "outlineColor": {
                        "red": 0,
                        "green": 0,
                        "blue": 0,
                        "alpha": 255
                    },
                    "shadowColor": {
                        "red": 0,
                        "green": 0,
                        "blue": 0,
                        "alpha": 255
                    },
                    "fieldFlags": {
                        "font": 1,
                        "size": 1,
                        "color": 0,
                        "bold": 0,
                        "italic": 1,
                        "smallCaps": 1,
                        "underline": 1,
                        "strikeThrough": 1,
                        "lineSpacing": 1,
                        "outline": 1,
                        "outlineColor": 1,
                        "outlineSize": 1,
                        "shadow": 1,
                        "shadowColor": 1,
                        "shadowOffsetX": 1,
                        "shadowOffsetY": 1,
                        "padding.0": 1,
                        "padding.1": 1,
                        "padding.2": 1,
                        "padding.3": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "color": {
                        "red": 255,
                        "green": 255,
                        "blue": 255,
                        "alpha": 255
                    }
                },
                "indent": 0,
                "uid": "BBD9BB701164704B224B41C68857E517EC05",
                "expanded": true
            },
            {
                "id": "gs.ShowText",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "viewport": {
                        "type": "ui"
                    },
                    "predefinedPositionId": 8,
                    "positionType": 0,
                    "number": 1,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "blendMode": 0,
                    "positionOrigin": 0,
                    "origin": 0,
                    "zOrder": 0,
                    "text": {
                        "lcId": "0F6BDE2A67844246571837B54B48FF88C56C",
                        "defaultText": "Why did she mention car crash to you...?"
                    },
                    "position": {
                        "x": 0,
                        "y": 0
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 1,
                        "easing.type": 0,
                        "animation.type": 1,
                        "origin": 1,
                        "positionOrigin": 1,
                        "zOrder": 1,
                        "blendMode": 1,
                        "viewport.type": 0
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "395C4D0423B9724F388B6D57C5F3588C63E5",
                "expanded": true
            }
        ],
        "livePreviewDisabled": false,
        "booleanVariables": [
            {
                "name": "hotspot",
                "index": 0,
                "scope": 0,
                "domain": "com.degica.vnm.default"
            }
        ],
        "numberVariables": [
            {
                "name": "hotspot",
                "index": 0,
                "scope": 0,
                "domain": "com.degica.vnm.default"
            }
        ],
        "listVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "stringVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ]
    },
    "summary": [
        "name",
        "type",
        "parentId",
        "chapterUid",
        "order"
    ]
}