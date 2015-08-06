			var tableList = ['BasesAndSurface','CauAndSubMerBridges','CCPAVEMENT','EECD','Foundation','GEOSYNTHETICS','GranSubBases','HillRoads','Horticulture','LUCANDC','MaintOfRoads','PipeCulverts','ProtectionWorks','Repair','SiteClearence','SubStructure','SuperStructure','TrafficSigns'];
			
			var	labourMapArray = {
					"Mazdoor skilled" :"Man mazdoor",
					"Mazdoor (Unskilled)":"Man mazdoor",
					"Mazdoor for filling sand bags, stitching and placing":"Man mazdoor",
					//"Mazdoor for piling 8\" dia ballies for piling 8\" dia ballies":"Man mazdoor",
					//"Mazdoor for bracing with 2\" dia ballies":"Man mazdoor",
					"Mazdoor (Unskilled) for filling sand bags, stitching and placing":"Man mazdoor",
					"Mazdoor (Skilled)":"Man mazdoor",
					"Mazdoor ":"Man mazdoor",
					" Mazdoor (Unskilled) ":"Man mazdoor",
					"Mazdoor for dressing sides, bottom and back filling (Unskilled)":"Man mazdoor",
					"Mazdoor (Unskilled) for dressing sides, bottom and backfilling":"Man mazdoor",
					"Mazdoor  for excavation and back filling ":"Man mazdoor",
					"Mazdoor for excavation and back filling with aggregates":"Man mazdoor",
					"Mazdoor (Semi-Skilled)":"Man mazdoor",
					"Mazdoor (Unskilled) for concreting":"Man mazdoor",
					"Mazdoor (Unskilled) for breaking pile head, bending bars, cleaning etc.":"Man mazdoor",
					" Mazdoor (Unskilled)":"Man mazdoor",
					"Mazdoor unskilled (for cutting, blasting, cleaning, removal of Material etc.)":"Man mazdoor",
					"Mazdoor (Unskilled) ":"Man mazdoor",
					"Mazdoor  (Skilled)":"Man mazdoor",
					"Meson":"Mason Cl- I / Brick layer Cl- I",
					"Mason (1st class)":"Mason Cl- I / Brick layer Cl- I",
					"Mason (2nd class)":"Mason Cl- ll / Brick layer Cl-II",
					"Mason ":"Mason Cl- I / Brick layer Cl- I",
					"Mason":"Mason Cl- I / Brick layer Cl- I",
					"Mason 1st Class":"Mason Cl- I / Brick layer Cl- I",
					"Mason 2nd Class":"Mason Cl- ll / Brick layer Cl-II",
					"Mason (1st Class)":"Mason Cl- I / Brick layer Cl- I",
					"Blacksmith for cutting of dowel bars including removal of burrs, fabrications & fixing of dowel bars.":"Black smith / Tin smith / Rivetor",
					"Surveyor ":"Diploma Engineer / Surveyor",
					//"Driller"
					"Blaster":"Blaster",
					"Chiseller (Hammer Man)":"Stone Chiseller Cl- II",
					"Blacksmith":"Black smith / Tin smith / Rivetor",
					"Welder":"Welder / Gas Cutter",
					//"Sinker ( skilled )"
					//"Sinking helper ( semi-skilled )"
					//"Sinker"
					"Diver":"Jeep Driver",
					//"Sinking helper (semi-skilled)"
					//"Driller "
					//"Medical Officer"
					//"Para medical personnel"
					"Fitter":"Fitter Cl- I",
					//"Mate/Supervisor"
					"Blacksmith/Bar Bender":"Black smith / Tin smith / Rivetor"
					/*"Mazdoor (Skilled)":"Man mazdoor",
					"Mazdoor (Semi-Skilled)":"Man mazdoor",
					"Mazdoor (Unskilled)":"Man mazdoor",
					"Mason (1st class)":"Mason Cl- I / Brick layer Cl- I",
					"Mason (2nd class)":"Mason Cl- ll / Brick layer Cl-II",
					"Surveyor":"Diploma Engineer / Surveyor",
					"Blacksmith for cutting of dowel bars including removal of burrs, fabrications & fixing of dowel bars.":"Black smith / Tin smith / Rivetor"*/
				};
				
			var	machineryMapArray  = {
					
					"Air Compressor (1 hour initial + 1 hour final)":"Air compressor 5 cmm ( electric )",
					"Air Compressor 250 cfm with pneumatic breaker.":"Air compressor 5 cmm ( electric )",
					"Air Compressor 250 cfm with pneumatic breaker/jack hammer along with accessories.":"Air compressor 5 cmm ( electric )",
					"Air compressor 170-210 / 250 cfm working with 2 Jack Hammers simultaneously @1.00 cum per hour":"Air compressor 5 cmm ( electric )",
					"Air compressor 210 / 250 cfm with 2 leads of pneumatic breaker @1.5 cum per hour":"Air compressor 5 cmm ( electric )",
					"Air compressor 210 / 250 cfm with two leads for pneumatic cutters / hammers @ 1 cum per hour":"Air compressor 5 cmm ( electric )",
					"Air compressor 210 CFM with tractor":"Air compressor 5 cmm ( electric )",
					"Air compressor 210 cfm":"Air compressor 5 cmm ( electric )",
					"Air compressor 210 cfm / 250 cfm with 2 jack hammers for drilling at 15 cum per hour":"Air compressor 5 cmm ( electric )",
					"Air compressor 210 cfm / 250 cfm with 2 jack hammers of pneumatic breaker at 1 cum per hour":"Air compressor 5 cmm ( electric )",
					"Air compressor 210 cfm with tractor":"Air compressor 5 cmm ( electric )",
					"Air compressor 210 cfm with two jack hammer @ 6 cum/ hour":"Air compressor 5 cmm ( electric )",
					"Air compressor 250 cfm":"Air compressor 5 cmm ( electric )",
					"Air compressor 250 cfm ":"Air compressor 5 cmm ( electric )",
					"Air compressor 250 cfm capacity":"Air compressor 5 cmm ( electric )",
					"Air compressor 250 cfm for cleaning":"Air compressor 5 cmm ( electric )",
					"Air compressor 250 cfm with two jack hammer":"Air compressor 5 cmm ( electric )",
					"Air compressor 250 cfm with two jack hammer @ 20 cum per hour":"Air compressor 5 cmm ( electric )",
					"Air compressor 250/210 cfm with 2 leads @ 20 cum per hour":"Air compressor 5 cmm ( electric )",
					"Air compressor with pneumatic breakers":"Air compressor 5 cmm ( electric )",
					"Air compressor with pneumatic chisel attachment for cutting hard clay":"Air compressor 5 cmm ( electric )",
					"Air compressor with pneumatic chisel attachment for cutting hard clay.":"Air compressor 5 cmm ( electric )",
					"Air compressor, 210 cfm with 2 jack hammers":"Air compressor 5 cmm ( electric )",
					
					/*"Barbed wire 335 m length @ 9.38 kg per 100 m",
					"Barbed wire 428 m length @ 9.38 kg per 100 m",
					"Batch mix HMP 100-120 TPH @ 75  tonne per hour actual output ",
					"Batch mix HMP 40-60 THP @ 40 t per hour actual output",
					"Batch mix HMP @ 75 tonne per hour ",*/
					"Batching Plant":"Batching plant 2 x 1.00 cum(15 Cum/hr)",
					"Batching Plant @ 20 cum/ hour":"Batching plant 2 x 1.00 cum(15 Cum/hr)",
					"Batching Plant @ 20 cum/hour":"Batching plant 2 x 1.00 cum(15 Cum/hr)",
					//"Bentonite ",
					
					"Concrete mixer (cap. 0.40/0.28 cum)":"Concrete mixer 600 / 400 ( diesel)",
					"Concrete mixer 0.28 / 0.4 cum ":"Concrete mixer 600 / 400 ( diesel)",
					"Concrete mixer 0.28 / 0.4 cum capacity (6 mixers) with weigh batcher and suitable capacity calibrated water tank":"Concrete mixer 600 / 400 ( diesel)",
					"Concrete mixer 0.4 / 0.28 cum capacity":"Concrete mixer 600 / 400 ( diesel)",
					"Concrete mixer 0.4/0.28 cum capacity":"Concrete mixer 600 / 400 ( diesel)",
					"Concrete mixer 0.4/0.28 cum capacity ":"Concrete mixer 600 / 400 ( diesel)",
					"Concrete mixer 0.4/0.28 cum per hour":"Concrete mixer 600 / 400 ( diesel)",
					"Concrete mixer 0.48/0.28":"Concrete mixer 600 / 400 ( diesel)",
					"Concrete mixer 0.48/0.28 cum capacity":"Concrete mixer 600 / 400 ( diesel)",
									
					"Electric Generator Set 250 KVA ":"Diesel generating set 50 KVA",
					"Electric generator 100 KVA":"Diesel generating set 50 KVA",
					"Electric generator 125 KVA":"Diesel generating set 50 KVA",
					"Electric generator set 125 KVA":"Diesel generating set 50 KVA",
					"Electric generator set 250 KVA":"Diesel generating set 50 KVA",
					"Electric generator set, 125 KVA":"Diesel generating set 50 KVA",
					
					"Generator (capacity 33 KVA)":"Diesel generating set 50 KVA",
					"Generator 100 KVA":"Diesel generating set 50 KVA",
					"Generator 125 KVA":"Diesel generating set 50 KVA",
					"Generator 250 KVA":"Diesel generating set 50 KVA",
					"Generator 33 KVA":"Diesel generating set 50 KVA",
					"Generator 33 KVA.":"Diesel generating set 50 KVA",
					"Generator 63 KVA":"Diesel generating set 50 KVA",
					
					"Needle vibrator ":"Needle vibrator 40 mm ( petrol )",
					
					"Paver finisher":"Concrete paver 100 sqm / hr",
					"Paver finisher ":"Concrete paver 100 sqm / hr",
					"Paver finisher hydrostatic with sensor control @ 75 cum per hour":"Concrete paver 100 sqm / hr",
					"Paver finisher hydrostatic with sensor control @ 75 cum/ hour":"Concrete paver 100 sqm / hr",
					"Paver finisher with electronic sensor":"Concrete paver 100 sqm / hr",
					"Paver with electronic sensor":"Concrete paver 100 sqm / hr",
					
					"Three  wheel 80-100 kN @ Static roller ":"Road roller diesel 10 t",
					"Three  wheel 80-100 kN @ static roller 8 cum per hour":"Road roller diesel 10 t",
					"Three  wheel 80-100 kN Static roller @ 70 cum /hour":"Road roller diesel 10 t",
					"Three  wheel 80-100 kN Static roller @ 70 cum/hour":"Road roller diesel 10 t",
					"Three  wheel 80-100 kN static roller":"Road roller diesel 10 t",
					"Three  wheel 80-100 kN static roller ":"Road roller diesel 10 t",
					"Three  wheel 80-100 kN static roller (or)":"Road roller diesel 10 t",
					"Three  wheel 80-100 kN static roller 10 cum output":"Road roller diesel 10 t",
					"Three  wheel 80-100 kN static roller 10 cum per hour":"Road roller diesel 10 t",
					"Three  wheel 80-100 kN static roller @ 10 cum /hour":"Road roller diesel 10 t",
					"Three  wheel 80-100 kN static roller @ 10 cum per hour":"Road roller diesel 10 t",
					"Three  wheel 80-100 kN static roller @ 10 cum per hour (or)":"Road roller diesel 10 t",
					"Three  wheel 80-100 kN static roller @ 10 cum per hour for Rural Area works":"Road roller diesel 10 t",
					"Three  wheel 80-100 kN static roller @ 10 cum/ hour":"Road roller diesel 10 t",
					"Three  wheel 80-100 kN static roller @ 16cum per hour (or)":"Road roller diesel 10 t",
					"Three  wheel 80-100 kN static roller @ 70 cum per hour":"Road roller diesel 10 t",
					"Three  wheel 80-100 kN static roller @ 8 cum per hour":"Road roller diesel 10 t",
					"Three  wheel 80-100 kN static roller @10 cum per hour":"Road roller diesel 10 t",
					"Three  wheel 80-100 kN static roller @70 cum /hour":"Road roller diesel 10 t",
					"Three  wheel roller 80-100 kN @ 10 cum/ hour":"Road roller diesel 10 t",
					"Three  wheel roller 80-100 kN @ 8 cum / 10 cum/ hour":"Road roller diesel 10 t",
					"Three  wheel roller 80-100 kN @ 8 cum /10 cum /hour":"Road roller diesel 10 t",
					"Three wheel 80-100 kN Static Roller":"Road roller diesel 10 t",
					"Three wheel 80-100 kN Static Roller     (or)":"Road roller diesel 10 t",
					"Three wheel 80-100 kN Static Roller @ 10 cum per hour":"Road roller diesel 10 t",
					"Three wheel 80-100 kN Static Roller @ 70 cum per hour":"Road roller diesel 10 t",
					"Three wheel 80-100 kN Static Roller @ 80 cum per hour ":"Road roller diesel 10 t",
					"Three wheel 80-100 kN Static Roller @70 cum per hour":"Road roller diesel 10 t",
					"Three wheel 80-100 kN static Roller":"Road roller diesel 10 t",
					"Three wheel 80-100 kN static roller":"Road roller diesel 10 t",
					"Three wheel 80-100 kN static roller ":"Road roller diesel 10 t",
					"Three wheel 80-100 kN static roller @ 10 cum / hour":"Road roller diesel 10 t",
					"Three wheel 80-100 kN static roller for initial break down rolling, final and finishing rolling":"Road roller diesel 10 t",
					"Three wheel 80-100 kN static roller weight":"Road roller diesel 10 t",
					"Three wheel static roller 80-100 kN":"Road roller diesel 10 t",
					"Three wheeled 80-100 kN Static Roller":"Road roller diesel 10 t",
					
					"Tipper":"Tipper 5 cum",
					"Tipper 10 T Capacity":"Truck 10 t",
					"Tipper 10 t capacity":"Truck 10 t",
					"Tipper 10 t capacity for carriage of 115 t flyash                                                      ":"Truck 10 t",
					"Tipper 10 t capacity for carriage of 29 t of  lime  from store to work site                                               ":"Truck 10 t",
					"Tipper 10 t capacity for carriage of soil 578 t":"Truck 10 t",
					"Tipper 10 tonne capacity":"Truck 10 t",
					"Tipper 10 tonne capacity for carriage of stone chips from stockpile on road side to chip spreader ":"Truck 10 t",
					"Tipper 10 tonnes capacity":"Truck 10 t",
					"Tipper 10Tonne capacity for carriage of stone chips from stock pile on road side to chip spreader":"Truck 10 t",
					"Tipper 5.5 cum":"Tipper 5 cum",
					"Tipper 5.5 cum ":"Tipper 5 cum",
					"Tipper 5.5 cum  capacity, flyash 360 x 1.2 = 432 t":"Tipper 5 cum",
					"Tipper 5.5 cum -  10 t / 5-6 t  capacity":"Tipper 5 cum",
					"Tipper 5.5 cum -  10 t capacity":"Tipper 5 cum",
					"Tipper 5.5 cum -  10 t capacity for carriage of stone chips from stockpile on road side to chip spreader":"Tipper 5 cum",
					"Tipper 5.5 cum -  10 t capacity for carriage of stone chips from stockpile on road side to chips spreader":"Tipper 5 cum",
					"Tipper 5.5 cum -  10 t/ 5-6t capacity":"Tipper 5 cum",
					"Tipper 5.5 cum - 10 t / 5-6 t  capacity":"Tipper 5 cum",
					"Tipper 5.5 cum 4 trips per hour":"Tipper 5 cum",
					"Tipper 5.5 cum @ 3 trips per hour":"Tipper 5 cum",
					"Tipper 5.5 cum capacity":"Tipper 5 cum",
					"Tipper 5.5 cum capacity ":"Tipper 5 cum",
					"Tipper 5.5 cum capacity 2 trip per hour":"Tipper 5 cum",
					"Tipper 5.5 cum capacity for carriage of aggregate from stockpile on road side to slurry equipment, bitumen emulsion and filler":"Tipper 5 cum",
					"Tipper 5.5 cum capacity for carriage of aggregate from stockpile on road side to slurry equipment, bitumen emulsion and filler.":"Tipper 5 cum",
					"Tipper 5.5 cum capacity for carriage of aggregates from stockpile to chip spreader":"Tipper 5 cum",
					"Tipper 5.5 cum capacity for carriage of aggregates from stockpile to chip spreader ":"Tipper 5 cum",
					"Tipper 5.5 cum capacity for disposal of muck from pile bore hole":"Tipper 5 cum",
					"Tipper 5.5 cum capacity tipper, 1 trip per hour":"Tipper 5 cum",
					"Tipper 5.5 cum capacity, 1 trip per hour":"Tipper 5 cum",
					"Tipper 5.5 cum capacity, 2 trips per hour":"Tipper 5 cum",
					"Tipper 5.5 cum capacity, 4 trips per hour":"Tipper 5 cum",
					"Tipper 5.5 cum capacity, 4 trips per hour.":"Tipper 5 cum",
					"Tipper 5.5 cum with 10 t capacity":"Tipper 5 cum",
					"Tipper 5.5 cum with 10 t capacity (L = Actual Lead)":"Tipper 5 cum",
					"Tipper 5.5 cum, 10 t / 5-6 t capacity":"Tipper 5 cum",
					"Tipper 5.5 cum, 3 trips per hour":"Tipper 5 cum",
					"Tipper 5.5 tonne capacity":"Tipper 5 cum",
					"Tipper 5.5 tonnes capacity":"Tipper 5 cum",
					"Tipper 5.5cum capacity, 4 trips per hour.":"Tipper 5 cum",
					"Tipper of 5.5 cum capacity":"Tipper 5 cum",
					"Tipper/Dumper (10-t) capacity / 5-6 t capacity":"Truck 10 t",
					
					"Tractor - Trally":"Tractor with 2 T roller",
					"Tractor attached with rotavator @ 25 cum / 30 cum per hour":"Tractor with 2 T roller",
					"Tractor attached with rotavator @ 30 cum per hour":"Tractor with 2 T roller",
					"Tractor for towing and positioning of mastic cooker and bitumen boiler":"Tractor with 2 T roller",
					"Tractor with Rotavator 25 cum per hour":"Tractor with 2 T roller",
					"Tractor with Rotavator and blade @ 25 cum per hour":"Tractor with 2 T roller",
					"Tractor with Trolley":"Tractor with 2 T roller",
					"Tractor with disc harrows for pulverisation":"Tractor with 2 T roller",
					"Tractor with ripper @ 60 cum per hour":"Tractor with 2 T roller",
					"Tractor with ripper and rotavator attachments @ 60 cum per hour for ripping and 25 cum per hour for mixing":"Tractor with 2 T roller",
					"Tractor with ripper attachment":"Tractor with 2 T roller",
					"Tractor with ripper attachment @ 60 cum per hour":"Tractor with 2 T roller",
					"Tractor with rotavator 25 cum per hour":"Tractor with 2 T roller",
					"Tractor with rotavator and blade @ 25 cum per hour":"Tractor with 2 T roller",
					"Tractor with tiller":"Tractor with 2 T roller",
					"Tractor with tiller ":"Tractor with 2 T roller",
					"Tractor with trolley":"Tractor with 2 T roller",
					"Tractor with trolley 3t":"Tractor with 2 T roller",
					"Tractor-trolley":"Tractor with 2 T roller",
					"Tractor-trolley for disposal of dismantled material ":"Tractor with 2 T roller",
					"Tractor-trolley for transportation":"Tractor with 2 T roller",
					"Tractor-trolley.":"Tractor with 2 T roller",
					
					"Water Tanker":"Water tanker 6 kl capacity",
					"Water Tanker 6Kl capacity":"Water tanker 6 kl capacity",
					"Water Tanker of 6 KL capacity":"Water tanker 6 kl capacity",
					"Water tanker":"Water tanker 6 kl capacity",
					"Water tanker  6 kl capacity":"Water tanker 6 kl capacity",
					"Water tanker 6 KL capacity":"Water tanker 6 kl capacity",
					"Water tanker 6 KL capacity @ 1 trip per hour":"Water tanker 6 kl capacity",
					"Water tanker 6 KL with 5 km lead and 1 trip per hour":"Water tanker 6 kl capacity",
					"Water tanker 6 KL, one trip per hour":"Water tanker 6 kl capacity",
					"Water tanker 6 kl capacity":"Water tanker 6 kl capacity",
					"Water tanker 6 kl capacity 1 trip per hour":"Water tanker 6 kl capacity",
					"Water tanker 6 kl capacity 5 km lead with one trip per hour":"Water tanker 6 kl capacity",
					"Water tanker 6 kl capacity including watering for 3 months":"Water tanker 6 kl capacity",
					"Water tanker 6 kl capacity including watering for 3 months (for one hour per week)":"Water tanker 6 kl capacity",
					"Water tanker 6 kl, one trip per hour":"Water tanker 6 kl capacity",
					"Water tanker including watering for 3 months":"Water tanker 6 kl capacity",
					"Water tanker with 5 km lead ":"Water tanker 6 kl capacity",
					"Water tanker with 6 kl capacity":"Water tanker 6 kl capacity",
					"Water tanker6 KL capacity":"Water tanker 6 kl capacity",
					"Water tanker6 KL capacity (for maintenance)":"Water tanker 6 kl capacity",
					"Water tanker6 KL capacity (for planting)":"Water tanker 6 kl capacity",
					"water tanker 6 KL capacity":"Water tanker 6 kl capacity",
					
					/*" Crane 40 T capacity",
					" Crane 50 t capacity.",
					" Crane20 t capacity ",
					" HMP of 75 tonnes/hour.",
					"5.50 cum Tipper for carriage of GBFS add 10 per cent of cost of carriage of cover cost of loading and unloading ",
					"50 HP Tractor with trolley",
					"Add rate for loading as per item 1.1 (ii)",
					"Add rate for unloading as per item 1.1 (iv)",
					
					
	
					

					
					"Bitumen Emulsion pressure distributor",
					"Bitumen boiler 1500 litres capacity",
					"Bitumen boiler oil fired 1000 litre capacity fitted with spray set",
					"Bitumen boiler oil fired, capacity 1000 litre / 245 kg fitted with spray set",
					"Bitumen boiler oil fired, capacity 1000 litre fitted with spray set",
					"Bitumen boiler oil fired, capacity 1000 litre tire",
					"Bitumen boiler oil fired, capacity 1000 lt fitted with spray set",
					"Bitumen emulsion pressure distributor @ 1750 sqm per hour",
					"Bitumen emulsion pressure distributor @ 1750 sqm/hour",
					
					"Bitumen pressure distributor",
					"Bitumen pressure distributor ",
					"Bitumen pressure distributor 1750 sqm per hour",
					"Bitumen pressure distributor @ 1750 sqm per hour",
					"Bitumen pressure distributor @1750 sqm/hr",
					"Bitumen pressure distributor for 3000x 2 sqm @ 1750 sqm/hour",
					"Bitumen pressure distributor for @ 1750 sqm per hour",
					"Bitumen pressure distributor for@ 1750 sqm per hour",
					
					"Cement concrete batch mix plant @ 75 cum per hour",
					"Cold milling machine @ 20 cum per hour",
					"Compressor 210 cfm with tractor",
					"Compressor with guniting equipment along with accessories",
					"Concrete Pump",
					"Concrete batching and mixing plant @ 15 cum/hr.",
					"Concrete joint cutting machine for initial & final cuts",
					
					"Consolidating soling with static Power Roller80-100kN",
					"Consumables in sinking @ 10 per cent  of (b)     ",
					"Consumables in sinking @ 10 per cent of (b)     ",
					"Consumables in sinking @10 per cent  of (b)     ",
					"Consumables in sinking @10 per cent of (b)     ",
					
					"Crane",
					"Crane (3 T)",
					"Crane 10 T capacity",
					"Crane 10 tonne capacity ",
					"Crane 20 tonne capacity ",
					"Crane 3 tonne capacity",
					"Crane upto 8 t capacity",
					"Crane with grab 1 cum capacity ",
					"Credit for excavated rock found suitable for use @ 50 per cent of  excavated quantity",
					"Credit for excavated rock found suitable for use @ 50 per cent of excavated quantity",
					
					"Dozer 180 HP @ 60 cum per hour",
					"Dozer 80 HP (D-80 A 12)@ 28.32 cum per hour",
					"Dozer 80 HP (D-80 A 12)@ 43.28 cum per hour",
					"Dozer 80 HP @ 1000 sqm/hour",
					"Dozer 80 HP for spreading @ 200 cum per hour",
					"Dozer D 50 with attachment for removal of trees & stumps",
					"Dozer D 50 with attachment or suitable machinery for removal of trees & stumps",
					"Dozer D 80 A-12,180 HP @ 60 cum per hour",
					"Dozer D-50 ",
					"Dozer D-50  @ 100 cum per hour",
					"Dozer D-50  @ 28.32 cum per hour",
					"Dozer D-50  @ 30 cum per hour",
					"Dozer D-50  @ 43.28 cum per hour",
					"Dozer D-50  @ 50 cum per hour (cutting with pushing)",
					"Dozer D-50  @ 50% of 100 cum per hour",
					"Dozer D-50  for spreading @ 200 cum per hour",
					"Dozer D-50  with 100 cum per hour output (Initially stacking and relaying)",
					"Dozer D-50 @ 56.67 cum per hour (blasted rock)",
					
					"Drum mix plant for cold mixes 40 / 60 tonne per hour producing output of 50 tonnes per hour",
					"Drum mix plant for cold mixes 60-90 tonne per hour producing average output of 75 tonnes per hour",
					"Drum mix plant for cold mixes 60-90 tonne per hour producing output of 75 tonnes per hour",
					"Drum mix plant for cold mixes of appropriate capacity but not less than 75 tonnes/hour.",
					

					
					"Emulsion pressure distributor",
					"Emulsion pressure distributor ",
					"Emulsion pressure distributor @ 1750 sqm per hour",
					"Emulsion pressure distributor @1750 sqm per hour",
					"Emulsion sprayer, capacity 1000 litre fitted with spray set",
					
					"Epoxy Injection gun",
					"Excavator 0.90 cum bucket capacity ",
					"Excavator 0.90 cum bucket capacity @ 100 cum per hour",
					"Finish rolling with 6-8 tonnes smooth wheeled tandem roller",
					//"Formwork @ 12%",
					//"Formwork on cost of concrete i.e. cost of material, labour and machinery",
					
					"Front end Loader 1 cum capacity ",
					"Front end loader",
					"Front end loader 0.9 cum / 1 cum bucket capacity 37.5 cum per hour",
					"Front end loader 0.9 cum bucket capacity 37.5 cum per hour",
					"Front end loader 1 cum bucked capacity",
					"Front end loader 1 cum bucket capacity",
					"Front end loader 1 cum bucket capacity ",
					"Front end loader 1 cum bucket capacity @ 30 cum / hour",
					"Front end loader 1 cum bucket capacity @ 50 cum per hour",
					"Front end loader 1 cum capacity",
					"Front end loader 1.00 cum bucket capacity",
					"Front end-loader 1 cum bucket capacity @ 100 cum per hour",
					"Front end-loader 1 cum bucket capacity @ 25 cum/hour",
					"Front end-loader 1 cum bucket capacity @ 45 cum per hour",
					

					
					"Grout pump with agitator and accessories",
					"Grouting pump with agitator",
					"Grouting pump with agitator ",
					
					"HMP 100-110 TPH Capacity ",
					"HMP 30/40 t per hour",
					"HMP 40-60 TPH",
					"HMP of 30/40 t per hour",
					"HMP of appropriate capacity",
					
					"Hire & running charges of compressor with pneumatic breaker / Jack hammer or drill",
					"Hire & running charges of compressor with pneumatic breaker/Jack hammer for drilling.",
					"Hire & running charges of compressor with pneumatic breaker/Jack hammer or drill",
					"Hire & running charges of crane with grab bucket of 0.75 cum capacity and accessories ",
					"Hire & running charges of crane with grab bucket of 0.75 cum capacity and accessories.",
					"Hire and running charges for light crane for lowering reinforcement cage.",
					"Hire and running charges of Bentonite pump",
					"Hire and running charges of hydraulic piling rig with power unit and complete accessories including shifting from one bore location to another.",
					"Hire and running charges of light crane for lowering reinforcement cage",
					"Hire and running charges of piling rig Including double acting pile driving hammer complete with power unit and accessories.",
					"Hiring and running charges for light crane 5 tonnes lifting capacity for lowering reinforcement and handling steel casing. ",
					
					"Hot Mix Plant of appropriate capacity but not less than 75 tonnes/hour",
					"Hot mix plant 100-120 TPH producing an average of 75 tonnes per hour",
					
					"Hydraulic Chip spreader",
					
					"Hydraulic Excavator 0.9 cum / 1.00 cum bucket capacity  @ 60 cum/h ",
					"Hydraulic Excavator 0.9 cum bucket capacity  @ 60 cum/h ",
					"Hydraulic Excavator 0.9 cum bucket capacity @ 34 cum/hour",
					"Hydraulic Excavator 0.9 cum bucket capacity @ 40 cum per hour",
					"Hydraulic Excavator 0.9 cum bucket capacity @ 60 cum per hour",
					"Hydraulic Excavator 0.9 cum bucket capacity @ 60 cum/ hour",
					"Hydraulic Excavator 0.90 cum bucket capacity",
					"Hydraulic Excavator 0.90 cum bucket capacity @ 40 cum / hour",
					"Hydraulic Excavator 0.90 cum bucket capacity @ 60 cum per hour for 360 cum soil ",
					"Hydraulic Excavator 1 cum bucket capacity",
					"Hydraulic Excavator 1 cum bucket capacity @ 60 cum / hour",
					"Hydraulic Excavator1.0 cum bucket capacity @60 cum per hour",
					
					"Hydraulic broom  @ 1250 sqm per hour",
					"Hydraulic broom @ 1250 sqm per hour",
					
					"Hydraulic excavator 0.9 cum bucket capacity @ 100 cum/ hour",
					"Hydraulic excavator 0.9 cum bucket capacity @ 100 cum/hour",
					"Hydraulic excavator 0.9 cum bucket capacity @ 40 cum /hour",
					"Hydraulic excavator 0.9 cum bucket capacity @ 60 cum/ hour",
					"Hydraulic excavator 0.9 cum with rock breaker attachment @ 6 cum per hour",
					"Hydraulic excavator 0.90 cum bucket capacity @ 50 cum per hour",
					"Hydraulic excavator 1.0 cum bucket capacity ",
					
					"Hydraulic self propelled chip spreader ",
					"Hydraulic self propelled chip spreader @ 1500 sqm / hour",
					"Hydraulic self propelled chip spreader @ 1500 sqm /hour",
					"Hydraulic self propelled chip spreader @ 1500 sqm per hour",
					"Hydraulic self propelled chip spreader @ 1500 sqm per hour ",
					"Hydraulic self propelled chip spreader @ 1500 sqm/hour ",
					"Hydraulic self propelled chip spreader @ 1500 sqm/hr.",
					"Hydraulic self propelled chip spreader @1500 sqm per hour",
					"Hydraulic self propelled chip spreader both for aggregates and key aggregates @ 1500 sqm per hour for 3000 x 3 sqm",
					"Hydraulic self propelled chip spreader both for aggregates and key aggregates @ 1500 sqm per hour for 4500 x 2 sqm = 9000 sqm",
					"Hydraulic self propelled chip spreader both for aggregates and key aggregates@ 1500 sqm per hour for 4500 x 2 sqm",
					"Hydraulic self propelled chip spreader both for aggregates and key aggregates@ 1500 sqm per hour for 4500 x 2 sqm = 9000 sqm",
					"Hydraulic self propelled chips spreader",
					"Hydraulic self propelled chips spreader @ 1500 sqm / hour",
					"Hydraulic self propelled chips spreader @ 1500 sqm per hour",
					"Hydraulic self propelled chips spreader @1500 sqm per hour",
					
					"Integrated stone crusher of 200 t/h including belt conveyor and vibrating screens",
					"Jack hammer 25 kg with tractor",
					"Joint Cutting Machine with 2-3 blades",
					"Kerb casting machine @ 50 metres/hour for laying kerb and channel",
					"Kerb casting machine @ 60 metres/hour","Lead beyond 1 km, L-lead in km",
					"Light Crane 3 tonnes capacity for handling tremie pipe",
					"Light Crane of 3 tonnes capacity for handling tremie pipe",
					"Light crane with lifting capacity upto 3 tonne",
					
					"Loader",
					"Loader (capacity 1 cum)",
					"Loader 1 cum capacity",
					"Loader 1 cum capacity ",
					"Loader 1 cum capacity 1 cum",
					"Loader I cum bucket capacity.",
					"Loading as per item 1.1 (ii)",
					
					"Mastic cooker 1 tonne capacity",
					
					"Mechanical broom",
					"Mechanical broom ",
					"Mechanical broom @ 1250 sqm per hour",
					"Mechanical broom @ 1250 sqm per hour ",
					"Mechanical broom @ 1250 sqm/hr.",
					"Mechanical broom hydraulic @ 1250 sqm per hour",
					
					"Mechanical concrete mixer 0.4/0.28 cum capacity fitted with water measuring device and preferably also with load cell.",
					"Mixall 6-10 t capacity",
					"Mixall 6/10 t capacity",
					"Mixall 6/10 tonne ",
					"Mixall 6/10t capacity",
					"Mobile slurry seal equipment",
					
					"Mortar Grader 110 HP @ 50 cum per hour",
					"Mortar grader 110 HP",
					"Motor Grader 110 HP @ 50 cum per hour",
					"Motor Grader 110 HP @ 75 per cent 200 cum per hour for mixing in-place and grading",
					"Motor Grader @ 50 cum per hour",
					"Motor Grader,110 HP @ 50 cum/hr.",
					"Motor grader 110 H.P @ 50 cum/hr for spreading",
					"Motor grader 110 HP",
					"Motor grader 110 HP 50 cum per hour",
					"Motor grader 110 HP @ 50 cum per hour",
					"Motor grader 110 HP @ 50 cum per hour for spreading",
					"Motor grader for grading",
					"Motor grader for grading @ 100 cum per hour",
					"Motor grader for grading @ 100/200 cum per hour",
					"Motor grader for grading @ 200 cum per hour",
					"Motor-Grader 110 H.P",
					
					
					"Oil fired bitumen boiler 1000 litre capacity fitted with spray set",
					"Oil fired bitumen boiler 1000 lt capacity fitted with spray set",
					

					
					"Plate Compactor @ 3.5 cum per hour",
					"Plate compactor",
					"Plate compactor / power rammer",
					"Plate compactor @ 25 sqm per hour","Plate compactor @ 3.5 cum per hour",
					"Plate compactor/power rammer",
					"Plate vibrator",
					
					"Pneumatic roller",
					"Pneumatic roller 14 tonnes 2000 sqm per hour",
					"Pneumatic tyred roller 12-15 tonnes.",
					"Pneumatic tyred roller with individual wheel load not exceeding 1.5 tonnes",
					
					"Road marking machine @ 60 sqm per hour",
					"Road sweeper 1250 sqm per hour",
					"Screed vibrator",
					"Shotcreteing equipment",
					
					"Smooth 3 wheeled steel roller 8-10 tonnes",
					"Smooth 3-wheeled steel roller 8-10 capacity ",
					"Smooth wheeled road roller 8-10 tonne",
					"Smooth wheeled road roller 8-10 tonne ",
					"Smooth wheeled roller 8 -10 tonne weight",
					"Smooth wheeled roller 8 Ton",
					"Smooth wheeled roller 8-10 tonne weight",
					"Smooth wheeled roller 8-10 tonnes",
					"Smooth wheeled roller 8-10 tonnes for initial break rolling. (6 x 0.65)",
					"Smooth wheeled steel roller 8-10 tonne",
					"Smooth wheeled steel tandem roller 6-8 tonnes",
					"Smooth wheeled tandem roller 6-8 tonnes",
					
					"Stressing jack with pump",

					
					"Transit Mixer 4 cum capacity for lead beyond 1 km.",
					"Transit Mixer 4 cum capacity for lead upto 1 km.",
					"Transit Mixer 4 cum capacity lead beyond 1 Km, L - lead in Kilometer",
					"Transit Mixer 4 cum capacity, lead beyond 1 Km, L - lead in Kilometer",
					
					"Truck ",
					"Truck 10 tonne",
					"Truck 10t",
					"Truck 10t ",
					"Truck 5.5 cum capacity",
					"Truck flat body 10 t",
					
					"Unloading as per item 1.1 (iv)",
					"Vibrating Pile driving hammer complete with power unit and accessories.",
					"Vibrating Pile driving hammer complete with power unit and other accessories.",
					
					"Vibratory Roller 80 - 100 kN",
					"Vibratory Roller 80 - 100 kN @ 100 cum per hour",
					"Vibratory road roller 8 -10 tonnes @60 cum per hour",
					"Vibratory road roller 8-10 tonnes @ 100 cum per hour",
					"Vibratory roller 8 - 10 tonne ",
					"Vibratory roller 8 - 10 tonne@ 60 cum per hour",
					"Vibratory roller 8 -10 tonne ",
					"Vibratory roller 8 -10 tonnes @ 30 cum per hour",
					"Vibratory roller 8 tonnes",
					"Vibratory roller 8 tonnes ",
					"Vibratory roller 8 tonnes for intermediate rolling.",
					"Vibratory roller 8-10 t capacity ",
					"Vibratory roller 8-10 tonne weight",
					"Vibratory roller 80-100 kN for intermediate rolling",
					

					
					"Welding set (LS Rs.100.00)",
					"Wet mix plant (Pug Mill)",
					"Wet mix plant @ 60 /75 t capacity per hour",
					"Wet mix plant @ 60 t capacity per hour",
					"Wet mix plant @ 75 t capacity per hour",
					"Wet mix plant @ 75 t per hour",
					"a. Hire & running charges of crane with grab bucket of 0.75 cum capacity and accessories.",
					"b. Air compressor with pneumatic chisel attachment for cutting hard clay",
					"c) Seigniorage Charges ",
					"c. Consumables in sinking @ 10 per cent  of (b)     ",
					"d)      Formwork @ 10 per cent  on cost of concrete i.e. cost of material, labour and machinery",
					"d)      Formwork @ 3.5 per cent  of cost of concrete i.e. cost of material, labour and machinery",
					"d)      Formwork @ 3.5 per cent  on cost of concrete i.e. cost of material, labour and machinery",
					"d)      Formwork @ 3.75 per cent  of cost of concrete i.e. cost of material, labour and machinery",
					"d)      Formwork @ 3.75 per cent  on cost of concrete i.e. cost of material, labour and machinery",
					"d)      Formwork @ 4 per cent  on cost of concrete i.e. cost of material, labour and machinery",
					"d) Seigniorage Charge",
					"i) Batch type HMP 75 tonne per hour ",
					"i) HMP of appropriate capacity.",
					"i) HMP of appropriate capacity. Not less than 75 t / hour",
					"ii) Electric Generator Set 250 KVA ",
					"iii) Front end loader 1 cum bucket capacity ",
					"iv) Tipper 10 tonne capacity",
					"vibratory roller 80-100 kN @ 60 cum per hour",*/
					
				}
			
			
			var metalItemsArray  = ["Crushed stone aggregate 11.2 mm size","Crushed stone aggregate 12.5 mm nominal size",
							  "Crushed stone aggregate 13.2 mm to 5.6 mm @ 0.27 cum per 10 sqm= 200x0.27/10=5.4cum ",
							  "Crushed stone aggregate 20 mm nominal size 59 %","Crushed stone aggregate 20 mm nominal size 60 %",
							  "Crushed stone aggregate 20 mm nominal size 60%","Crushed stone aggregates 11.2 mm size",
							  "Crushed stone aggregates 14 mm nominal size ","Crushed stone aggregates 40 mm nominal size ",
							  "Crushed stone aggregates 5.6 mm size","Crushed stone aggregates 6 mm nominal size ",
							  "Crushed stone aggregates nominal size 11.2mm","Crushed stone aggregates nominal size 13.2mm",
							  "Crushed stone as per table 300-3","Crushed stone as per table 300-3 MORTH","Crushed stone chipping 11.2 mm size",
							  "Crushed stone chipping of 6.7 mm size 100 per cent passing 11.2 mm sieve and retained on 2.36 mm sieve applied @ 0.09 cum per 10 sqm",
							  "Crushed stone chipping of 6.7 mm size 100 per cent passing 11.2 mm sieve and retained on 2.36 mm sieve applied @ 0.09 cum/10 sqm",
							  "Crushed stone chipping of 6.7 mm size 100 per cent passing 9.5 mm sieve and retained on 2.36 mm sieve applied @ 0.09 cum per 10 sqm",
							  "Crushed stone chipping of 6.7 mm size defined as 100  per cent  passing 11.2 mm sieve and retained on 2.36 mm sieve applied @ 0.09 cum per 10 sqm",
							  "Crushed stone chipping of 6.7 mm size defined as 100% passing 9.5 mm sieve and retained on 2.36 mm sieve applied @ 0.09 cum.",
							  "Crushed stone chipping of 6.7 mm size defined as passing 11.2 mm sieve and retained on 2.36 mm sieve applied @ 0.06 cum per 10 sqm",
							  "Crushed stone chipping, 13.2 mm nominal size @ 0.010 cum per sqm","Crushed stone chipping, 13.2 mm nominal size @ 0.010 cum/sqm",
							  "Crushed stone chipping, 13.2 mm to 5.6 mm @ 0.27 cum per 10 sqm","Crushed stone chipping, 13.2 mm to 5.6 mm @ 0.27 cum/ 10 sqm",
							  "Crushed stone chipping, 19 mm nominal size @ 0.015 cum per sqm","Crushed stone chipping, 9.5 mm nominal size @ 0.008 cum per sqm",
							  "Crushed stone chipping, 9.5 mm nominal size @ 0.008 cum/ sqm","Crushed stone chipping, 9.5 mm nominal size @ 0.008 cum/sqm",
							  "Crushed stone chipping,13 mm nominal size @ 0.01 cum per sqm","Crushed stone coarse aggregate (loose passing 63 mm and retained on 2.8 mm sieve @ 0.09 cum per sqm",
							  "Crushed stone coarse aggregate of 25 mm and 12.5 mm nominal sizes graded as per table 600-1 @ 0.90 cum/cum of concrete conforming to clause 602.2.4.",
							  "Crushed stone coarse aggregate of 40 mm nominal size @ 0.90 cum/cum of concrete conforming to table 2 of IRC: 74-1979.",
							  "Crushed stone coarse aggregate passing 45 mm and retained on 2.8 mm sieve @ 0.06 cum per sqm",
							  "Crushed stone coarse aggregate passing 53 mm and retained on 2.8 mm sieve @ 0.5 cum per 10 sqm for each layer ",
							  "Crushed stone coarse aggregates grading  as per Clause 1501.2.4.1 (Table 1500.3) @ 0.90 cum/cum of concrete conforming to Clause 600.4.4 (25 mm & 12.5 mm blending)",
							  "Crushed stone coarse aggregates of 25mm and 12.5mm nominal size @ 0.90 cum/cum of concrete conforming to clause 602.2.4.",
							  "Crushed stone coarse aggregates of 25mm and 12.5mm nominal size @ 0.90 cum/cum of concrete conforming to clause 602.2.4. ",
							  "Crushed stone coarse aggregates, grading will be as per Clause 1501.2.4.1 (Table 1500.1) of specifications @ 0.90 cum/cum of concrete (25 mm & 12.5 mm blending)",
							  "Crushed stone grit 3 mm size @ 3.75 kg per sqm"];
			
			var db = "";
		    (function() {
				console.log("reach db init");
				db = openDatabase('RoadsAndBridges','', 'Test DB', 5 * 1024 * 1024);
				if(db == null){
					console.log("Cannot read bad luck !!")
				}else{
					console.log("+++++++++++++"+db);
				}
			})();

			function getLabourInAllTables(){
				var labourTypes = [];
				var tablesRead = 0;
				db.transaction(function (tx) {
					var getLaburTypes = function(tableName){
						console.log(tableName);
						 tablesRead++;
						 var islabourRow = false;
						 tx.executeSql('SELECT * FROM '+tableName, [], function (tx, results) {
								console.log("successfully read");
								if(results.rows.length > 0){
								   for(var j=0;j<results.rows.length;j++){
									   var item = results.rows.item(j);
									   var description = item.Description;  
									   if(islabourRow){
										   if(item.Quantity && item.Quantity != "-" && !/^\([a-z]\)/.test(description) && description.indexOf('a+b+c') == -1){
											  if(! _.contains(labourTypes, description) ){
												  labourTypes.push(description);		
											  }
											   									   
										   }  
									   }
									   //Add List of materials to separate array.
									   if(description != null && description.indexOf('Labour') !=-1 && description.indexOf('Labour') < 9){
										   //List of Labour rows started.
										   islabourRow = true;
									   }else if(item.Quantity == null || description == null || description.indexOf('Machinery') != -1 || description.indexOf('Material') != -1){
										   islabourRow = false;
									   }
									   
								   }
								   if(tablesRead<tableList.length){
									   getLaburTypes(tableList[tablesRead]);
								   }else{
									   console.log(labourTypes);
								   }
								   
								}
							 }, null);						
					}
					getLaburTypes(tableList[tablesRead]);
				});
			}
			function getMachineryInAllTables(){
				var machineryTypes = [];
				var tablesRead = 0;
				db.transaction(function (tx) {
					var getMachineryTypes = function(tableName){
						console.log(tableName);
						 tablesRead++;
						 var isMachinery = false;
						 tx.executeSql('SELECT * FROM '+tableName, [], function (tx, results) {
								console.log("successfully read");
								if(results.rows.length > 0){
								   for(var j=0;j<results.rows.length;j++){
									   var item = results.rows.item(j);
									   var description = item.Description;  
									   if(isMachinery){
										   if(item.Quantity && item.Quantity != "-" && !/^\([a-z]\)/.test(description) && description.indexOf('a+b+c') == -1){
											  if(! _.contains(machineryTypes, description) ){
												  machineryTypes.push(description);		
											  }
											   									   
										   }  
									   }
									   //Add List of materials to separate array.
									   if(description != null && description.indexOf('Machinery') !=-1 && description.indexOf('Machinery') < 9){
										   //List of Labour rows started.
										   isMachinery = true;
									   }else if(item.Quantity == null || description == null || description.indexOf('Machinery') != -1 || description.indexOf('Material') != -1){
										   isMachinery = false;
									   }
									   
								   }
								   if(tablesRead<tableList.length){
									   getMachineryTypes(tableList[tablesRead]);
								   }
								   console.log(machineryTypes);
								}
							 }, null);						
					}
					getMachineryTypes(tableList[tablesRead]);
				});
			}
			function getMaterialInAllTables(){
				var materialTypes = [];
				var tablesRead = 0;
				db.transaction(function (tx) {
					var getMaterialTypes = function(tableName){
						console.log(tableName);
						 tablesRead++;
						 var isMaterial = false;
						 tx.executeSql('SELECT * FROM '+tableName, [], function (tx, results) {
								console.log("successfully read");
								if(results.rows.length > 0){
								   for(var j=0;j<results.rows.length;j++){
									   var item = results.rows.item(j);
									   var description = item.Description;  
									   if(isMaterial){
										   if(item.Quantity && item.Quantity != "-" && !/^\([a-z]\)/.test(description) && description.indexOf('a+b+c') == -1){
											  if(! _.contains(materialTypes, description) ){
												  materialTypes.push(description);		
											  }
											   									   
										   }  
									   }
									   //Add List of materials to separate array.
									   if(description != null && description.indexOf('Material') !=-1 && description.indexOf('Material') < 9){
										   //List of Labour rows started.
										   isMaterial = true;
									   }else if(item.Quantity == null || description == null || description.indexOf('Machinery') != -1 || description.indexOf('Material') != -1){
										   isMaterial = false;
									   }
									   
								   }
								   if(tablesRead<tableList.length){
									   getMaterialTypes(tableList[tablesRead]);
								   }else{									  
									   console.log(materialTypes.sort().join('\n'));
									   materialToLeadItems(materialTypes);
								   }
								   
								}
							 }, null);						
					}
					getMaterialTypes(tableList[tablesRead]);
				});
			}
			
			var materialToLeadArray = [];
			function materialToLeadItems(materialsInSelectedDatas){
				//----Lead materials Begin----------------
			   /*var dataToLeadMaterialArray = {
					   data:self.get("selectedItemsForEstimate")[i].indexCode,
					   leadMaterialArray:[]
			   };*/

			   for(var materialItem in materialsInSelectedDatas){
				   var materialToLead = {
						   leadItem:"",
						   material:""
				   }
				   //for each material check if you have words like Sand, Cement & Crushed stone
				   if(materialsInSelectedDatas[materialItem].indexOf('Sand') != -1 || materialsInSelectedDatas[materialItem].indexOf('sand') != -1){
					   materialToLead.leadItem = "Sand";
					   materialToLead.material = materialsInSelectedDatas[materialItem];	
					   materialToLeadArray.push(materialToLead);
				   }
				   if(materialsInSelectedDatas[materialItem].indexOf('Cement') != -1){
					   materialToLead.leadItem = "Cement";
					   materialToLead.material = materialsInSelectedDatas[materialItem];
					   materialToLeadArray.push(materialToLead);
				   }
				   if(materialsInSelectedDatas[materialItem].indexOf('Crushed stone') != -1){
					   materialToLead.leadItem = "Metal";
					   materialToLead.material = materialsInSelectedDatas[materialItem];
					   materialToLeadArray.push(materialToLead);
				   }   
			   }
			   //-------------Lead Materials End----------------
			   //dataToLeadMaterialArray.leadMaterialArray = materialToLeadArray;
			   /*function getFilteredList(leadFilter){
					var filteredMaterialList = [];
					var result = materialToLeadArray.filter(function( obj ) {
						return obj.leadItem == leadFilter;
					});	
					for(var materialItem in result){
						filteredMaterialList.push(result[materialItem].material);
					}
					return filteredMaterialList;
			   }
			   console.log("Sand Items : "+getFilteredList("Sand").sort().join('\n'));
			   console.log("Cement Items : "+getFilteredList("Cement").sort().join('\n'));
			   console.log("Metal Items : "+JSON.stringify(getFilteredList("Metal").sort()));*/
			   updateLeadMaterialsInAllTables();
			}
			
			var leadMaterialToCodeMap = {
				"Sand":"L1",
				"Cement":"L2",
				"Metal":"L3"
			}
			//var materialToLeadArray = [];
			function updateLeadMaterialsInAllTables(){			
				var self = this;
				var tablesSynced = 0;
				var propCount = 0;
				var leadItemsLength = materialToLeadArray.length;
				var syncLeadItemsInTable = function(tableName){
					tablesSynced++;
					
					var updateTable = function(count){
						//setTimeout(function(){
							db.transaction(function (tx) {
								console.log("Update "+tableName+" SET "+'"'+"Remarks"+'"'+"="+"'"+leadMaterialToCodeMap[materialToLeadArray[count-1].leadItem]+"'"+" WHERE Description ="+'"'+materialToLeadArray[count-1].material+'"');
								tx.executeSql("Update "+tableName+" SET "+'"'+"Remarks"+'"'+"="+"'"+leadMaterialToCodeMap[materialToLeadArray[count-1].leadItem]+"'"+" WHERE Description ="+'"'+materialToLeadArray[count-1].material+'"', [], function (tx, results) {	
									 console.log("updated "+tableName+":"+results.rows.length+" rows");
								 }, null);
							});		
						//},10);
					}
					
					for (var property in materialToLeadArray) {
							propCount++;
							updateTable(propCount);
							if( leadItemsLength == propCount && tablesSynced<tableList.length){
								propCount = 0
								//tablesSynced++;
								syncLeadItemsInTable(tableList[tablesSynced]);
							}
					}
				}
				syncLeadItemsInTable(tableList[tablesSynced]);
			
			}
			
			function syncMachineryRate(){
				var tablesSynced = 0;
				var propCount = 0;
				var totalMachineryType = _.keys(machineryMapArray).length;
				var syncMachineryInTable = function(tableName){
					tablesSynced++;
					
					var updateTable = function(property){
						//setTimeout(function(){
							db.transaction(function (tx) {
								  console.log("Update "+tableName+" SET "+'"'+"RateRs"+'"'+" = (Select Rate FROM MachineryRates WHERE Machinery="+'"'+machineryMapArray[property]+'"'+") WHERE Description ="+'"'+property+'"');
								tx.executeSql("Update "+tableName+" SET "+'"'+"RateRs"+'"'+" = (Select Rate FROM MachineryRates WHERE Machinery="+'"'+machineryMapArray[property]+'"'+") WHERE Description ="+'"'+property+'"', [], function (tx, results) {	
									 console.log("updated "+tableName+":"+results.rows.length+" rows");
								 }, null);
							});		
						//},10);
					}
					
					for (var property in machineryMapArray) {
							propCount++;
							updateTable(property);
							if( totalMachineryType == propCount && tablesSynced<tableList.length){
								propCount = 0
								//tablesSynced++;
								syncMachineryInTable(tableList[tablesSynced]);
							}
					}
				}
				syncMachineryInTable(tableList[tablesSynced]);
			}
			function syncLabourRate(){
				var self = this;
				var tablesSynced = 0;
				var propCount = 0;
				var totalLabType = _.keys(labourMapArray).length;
				var syncLabourInTable = function(tableName){
					tablesSynced++;
					
					var updateTable = function(property){
						//setTimeout(function(){
							db.transaction(function (tx) {
								console.log("Update "+tableName+" SET "+'"'+"RateRs"+'"'+" = (Select Rate FROM LabourRates WHERE Labour="+'"'+labourMapArray[property]+'"'+") WHERE Description ="+'"'+property+'"');
								tx.executeSql("Update "+tableName+" SET "+'"'+"RateRs"+'"'+" = (Select Rate FROM LabourRates WHERE Labour="+'"'+labourMapArray[property]+'"'+") WHERE Description ="+'"'+property+'"', [], function (tx, results) {	
									 console.log("updated "+tableName+":"+results.rows.length+" rows");
								 }, null);
							});		
						//},10);
					}
					
					for (var property in labourMapArray) {
							propCount++;
							updateTable(property);
							if( totalLabType == propCount && tablesSynced<tableList.length){
								propCount = 0
								//tablesSynced++;
								syncLabourInTable(tableList[tablesSynced]);
							}
					}
				}
				syncLabourInTable(tableList[tablesSynced]);
			}
			function syncAmount(){
				var self = this;
				var tablesSynced = 0;
				var noOfTables = tableList.length;
				var syncAmntInTable = function(tableName){
						tablesSynced++;
						db.transaction(function (tx) {
							tx.executeSql('upDATE '+tableName+' set Amount="RateRs"*"Quantity" where "RateRs" is not null', [], function (tx, results) {
								console.log("updated "+results.rows.length+" rows");
							 }, null);
						});	
						if(tablesSynced<noOfTables){
							syncAmntInTable(tableList[tablesSynced]);
						}		
				}
				syncAmntInTable(tableList[tablesSynced]);
			}
			
