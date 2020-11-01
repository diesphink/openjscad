; generated by PrusaSlicer 2.2.0+linux-x64 on 2020-11-01 at 06:27:55 UTC

; 

; external perimeters extrusion width = 0.45mm
; perimeters extrusion width = 0.45mm
; infill extrusion width = 0.45mm
; solid infill extrusion width = 0.45mm
; top infill extrusion width = 0.40mm
; first layer extrusion width = 0.42mm

M73 P0 R1
M201 X9000 Y9000 Z500 E10000 ; sets maximum accelerations, mm/sec^2
M203 X500 Y500 Z12 E120 ; sets maximum feedrates, mm/sec
M204 P2000 R1500 T2000 ; sets acceleration (P, T) and retract acceleration (R), mm/sec^2
M205 X10.00 Y10.00 Z0.20 E4.50 ; sets the jerk limits, mm/sec
M205 S0 T0 ; sets the minimum extruding and travel feed rate, mm/sec
M107
M862.3 P "MK2.5" ; printer model check
M862.1 P0.4 ; nozzle diameter check
M115 U3.9.1 ; tell printer latest fw version
G90 ; use absolute coordinates
M83 ; extruder relative mode
M104 S215 ; set extruder temp
M140 S60 ; set bed temp
M190 S60 ; wait for bed temp
M109 S215 ; wait for extruder temp
G28 W ; home all without mesh bed level
G80 ; mesh bed leveling
G1 Y-3.0 F1000.0 ; go outside print area
G92 E0.0
G1 X60.0 E9.0 F1000.0 ; intro line
G1 X100.0 E12.5 F1000.0 ; intro line
G92 E0.0
G21 ; set units to millimeters
G90 ; use absolute coordinates
M83 ; use relative distances for extrusion
M900 K0.05 ; Filament gcode LA 1.5
M900 K30 ; Filament gcode LA 1.0
;BEFORE_LAYER_CHANGE
G92 E0.0
;0.2


G1 E-0.80000 F2100.00000
G1 Z0.600 F10800.000
;AFTER_LAYER_CHANGE
;0.2
;CURRENT_Z: 0.2
G1 X118.699 Y102.637
G1 Z0.200
G1 E0.80000 F2100.00000
M204 S1000
G1 F900
G1 X119.183 Y102.116 E0.02231
G1 X119.758 Y101.705 E0.02216
G1 X120.510 Y101.384 E0.02562
G1 X121.315 Y101.247 E0.02562
G1 X128.505 Y101.242 E0.22541
G1 X129.645 Y101.434 E0.03625
G1 X130.664 Y101.989 E0.03639
G1 X131.447 Y102.846 E0.03639
G1 X131.907 Y103.912 E0.03639
G1 X132.001 Y104.524 E0.01942
G1 X132.004 Y105.421 E0.02814
G1 X131.780 Y106.495 E0.03439
G1 X131.520 Y107.036 E0.01884
G1 X131.167 Y107.529 E0.01898
G1 X130.736 Y107.953 E0.01898
G1 X130.242 Y108.295 E0.01884
G1 X129.486 Y108.617 E0.02577
G1 X128.671 Y108.754 E0.02591
G1 X121.112 Y108.737 E0.23700
G1 X120.312 Y108.551 E0.02577
G1 X119.576 Y108.184 E0.02577
G1 X118.947 Y107.656 E0.02577
G1 X118.455 Y106.992 E0.02591
G1 X118.167 Y106.346 E0.02216
G1 X118.016 Y105.660 E0.02202
G1 X117.995 Y104.593 E0.03349
G1 X118.093 Y103.911 E0.02158
G1 X118.333 Y103.241 E0.02231
G1 X118.668 Y102.688 E0.02028
G1 F8640.000
G1 X119.183 Y102.116 E-0.17786
G1 X119.758 Y101.705 E-0.16320
G1 X120.510 Y101.384 E-0.18869
G1 X121.315 Y101.247 E-0.18869
G1 X121.495 Y101.246 E-0.04156
G1 E-0.04000 F2100.00000
G1 Z0.800 F10800.000
G1 X130.812 Y107.361
G1 Z0.200
G1 E0.80000 F2100.00000
G1 F900
G1 X129.939 Y108.031 E0.03450
G1 X129.300 Y108.277 E0.02148
G1 X128.618 Y108.379 E0.02161
G1 X121.129 Y108.359 E0.23482
G1 X120.388 Y108.177 E0.02393
G1 X119.717 Y107.824 E0.02379
G1 X119.147 Y107.316 E0.02393
G1 X118.719 Y106.689 E0.02379
G1 X118.490 Y106.113 E0.01943
G1 X118.379 Y105.508 E0.01930
G1 X118.376 Y104.540 E0.03034
G1 X118.488 Y103.895 E0.02052
G1 X118.723 Y103.303 E0.01998
G1 X119.076 Y102.768 E0.02011
G1 X119.528 Y102.318 E0.01998
G1 X120.061 Y101.969 E0.01998
G1 X120.696 Y101.724 E0.02134
G1 X121.368 Y101.622 E0.02134
G1 X128.504 Y101.619 E0.22374
G1 X129.542 Y101.797 E0.03301
G1 X130.459 Y102.307 E0.03288
G1 X131.158 Y103.094 E0.03301
G1 X131.555 Y104.064 E0.03288
G1 X131.624 Y105.455 E0.04366
G1 X131.400 Y106.431 E0.03139
G1 X130.844 Y107.311 E0.03262
G1 X130.469 Y107.175 F10800.000
G1 F900
G1 X129.661 Y107.748 E0.03107
G1 X129.131 Y107.931 E0.01758
G1 X128.575 Y108.003 E0.01758
G1 X121.156 Y107.983 E0.23259
G1 X120.483 Y107.810 E0.02180
G1 X119.875 Y107.474 E0.02180
G1 X119.370 Y106.996 E0.02180
G1 X119.002 Y106.411 E0.02167
G1 X118.827 Y105.912 E0.01656
G1 X118.749 Y105.386 E0.01669
G1 X118.756 Y104.512 E0.02739
G1 X118.878 Y103.907 E0.01937
G1 X119.107 Y103.386 E0.01784
G1 X119.436 Y102.927 E0.01771
G1 X119.854 Y102.542 E0.01784
G1 X120.339 Y102.252 E0.01771
G1 X120.865 Y102.070 E0.01745
G1 X121.413 Y101.997 E0.01733
G1 X128.504 Y101.996 E0.22233
G1 X129.432 Y102.158 E0.02955
G1 X130.248 Y102.622 E0.02942
G1 X130.861 Y103.332 E0.02942
G1 X131.200 Y104.208 E0.02942
G1 X131.245 Y105.475 E0.03977
G1 X131.025 Y106.350 E0.02828
G1 X130.503 Y107.126 E0.02931
G1 X130.143 Y106.968 F10800.000
G1 F900
G1 X129.403 Y107.449 E0.02767
G1 X128.547 Y107.627 E0.02743
G1 X121.196 Y107.608 E0.23048
G1 X120.594 Y107.448 E0.01953
G1 X120.054 Y107.137 E0.01953
G1 X119.611 Y106.694 E0.01965
G1 X119.301 Y106.153 E0.01953
G1 X119.123 Y105.293 E0.02755
G1 X119.135 Y104.507 E0.02466
G1 X119.263 Y103.947 E0.01799
G1 X119.477 Y103.502 E0.01550
G1 X119.781 Y103.108 E0.01562
G1 X120.161 Y102.786 E0.01562
G1 X120.597 Y102.551 E0.01550
G1 X121.446 Y102.374 E0.02720
G1 X128.504 Y102.373 E0.22131
G1 X129.317 Y102.518 E0.02590
G1 X130.029 Y102.930 E0.02579
G1 X130.558 Y103.560 E0.02579
G1 X130.841 Y104.336 E0.02590
G1 X130.866 Y105.474 E0.03571
G1 X130.658 Y106.247 E0.02508
G1 X130.178 Y106.919 E0.02590
G1 F8640.000
G1 X129.403 Y107.449 E-0.21669
G1 X128.547 Y107.627 E-0.20201
G1 X127.069 Y107.623 E-0.34130
G1 E-0.04000 F2100.00000
G1 Z0.800 F10800.000
G1 X128.290 Y105.040
G1 Z0.200
G1 E0.80000 F2100.00000
G1 F900
G1 X121.710 Y105.040 E0.20631
G1 X121.710 Y104.960 E0.00251
G1 X128.290 Y104.960 E0.20631
G1 X128.290 Y104.980 E0.00063
G1 X127.890 Y105.038 F10800.000
M106 S255
;BEFORE_LAYER_CHANGE
G92 E0.0
;0.4


G1 F8640.000
G1 X124.999 Y105.010 E-0.76000
G1 E-0.04000 F2100.00000
G1 Z0.800 F10800.000
;AFTER_LAYER_CHANGE
;0.4
;CURRENT_Z: 0.4
M104 S210 ; set temperature
G1 X131.447 Y102.846
G1 Z0.400
G1 E0.80000 F2100.00000
G1 F900
G1 X131.907 Y103.912 E0.03639
G1 X132.001 Y104.524 E0.01942
G1 X132.004 Y105.421 E0.02814
G1 X131.780 Y106.495 E0.03439
G1 X131.520 Y107.036 E0.01884
G1 X131.167 Y107.529 E0.01898
G1 X130.736 Y107.953 E0.01898
G1 X130.242 Y108.295 E0.01884
G1 X129.486 Y108.617 E0.02577
G1 X128.671 Y108.754 E0.02591
G1 X121.112 Y108.737 E0.23700
G1 X120.312 Y108.551 E0.02577
G1 X119.576 Y108.184 E0.02577
G1 X118.947 Y107.656 E0.02577
G1 X118.455 Y106.992 E0.02591
G1 X118.167 Y106.346 E0.02216
G1 X118.016 Y105.660 E0.02202
G1 X117.995 Y104.593 E0.03349
G1 X118.093 Y103.911 E0.02158
G1 X118.333 Y103.241 E0.02231
G1 X118.699 Y102.637 E0.02216
G1 X119.183 Y102.116 E0.02231
G1 X119.758 Y101.705 E0.02216
G1 X120.510 Y101.384 E0.02562
G1 X121.315 Y101.247 E0.02562
G1 X128.505 Y101.242 E0.22541
G1 X129.645 Y101.434 E0.03625
G1 X130.664 Y101.989 E0.03639
G1 X131.406 Y102.802 E0.03451
G1 X131.158 Y103.094 F10800.000
G1 F900
G1 X131.555 Y104.064 E0.03288
G1 X131.624 Y105.455 E0.04366
G1 X131.400 Y106.431 E0.03139
G1 X130.812 Y107.361 E0.03450
G1 X129.939 Y108.031 E0.03450
G1 X129.300 Y108.277 E0.02148
G1 X128.618 Y108.379 E0.02161
G1 X121.129 Y108.359 E0.23482
G1 X120.388 Y108.177 E0.02393
G1 X119.717 Y107.824 E0.02379
G1 X119.147 Y107.316 E0.02393
G1 X118.719 Y106.689 E0.02379
G1 X118.490 Y106.113 E0.01943
G1 X118.379 Y105.508 E0.01930
G1 X118.376 Y104.540 E0.03034
G1 X118.488 Y103.895 E0.02052
G1 X118.723 Y103.303 E0.01998
G1 X119.076 Y102.768 E0.02011
G1 X119.528 Y102.318 E0.01998
G1 X120.061 Y101.969 E0.01998
G1 X120.696 Y101.724 E0.02134
G1 X121.368 Y101.622 E0.02134
G1 X128.504 Y101.619 E0.22374
G1 X129.542 Y101.797 E0.03301
G1 X130.459 Y102.307 E0.03288
G1 X131.118 Y103.049 E0.03113
G1 X130.861 Y103.332 F10800.000
G1 F900
G1 X131.200 Y104.208 E0.02942
G1 X131.245 Y105.475 E0.03977
G1 X131.025 Y106.350 E0.02828
G1 X130.469 Y107.175 E0.03119
G1 X129.661 Y107.748 E0.03107
G1 X129.131 Y107.931 E0.01758
G1 X128.575 Y108.003 E0.01758
G1 X121.156 Y107.983 E0.23259
G1 X120.483 Y107.810 E0.02180
G1 X119.875 Y107.474 E0.02180
G1 X119.370 Y106.996 E0.02180
G1 X119.002 Y106.411 E0.02167
G1 X118.827 Y105.912 E0.01656
G1 X118.749 Y105.386 E0.01669
G1 X118.756 Y104.512 E0.02739
G1 X118.878 Y103.907 E0.01937
G1 X119.107 Y103.386 E0.01784
G1 X119.436 Y102.927 E0.01771
G1 X119.854 Y102.542 E0.01784
G1 X120.339 Y102.252 E0.01771
G1 X120.865 Y102.070 E0.01745
G1 X121.413 Y101.997 E0.01733
G1 X128.504 Y101.996 E0.22233
G1 X129.432 Y102.158 E0.02955
G1 X130.248 Y102.622 E0.02942
G1 X130.822 Y103.287 E0.02754
G1 X130.558 Y103.560 F10800.000
G1 F900
G1 X130.841 Y104.336 E0.02590
G1 X130.866 Y105.474 E0.03571
G1 X130.658 Y106.247 E0.02508
G1 X130.143 Y106.968 E0.02778
G1 X129.403 Y107.449 E0.02767
G1 X128.547 Y107.627 E0.02743
G1 X121.196 Y107.608 E0.23048
G1 X120.594 Y107.448 E0.01953
G1 X120.054 Y107.137 E0.01953
G1 X119.611 Y106.694 E0.01965
G1 X119.301 Y106.153 E0.01953
G1 X119.123 Y105.293 E0.02755
G1 X119.135 Y104.507 E0.02466
G1 X119.263 Y103.947 E0.01799
G1 X119.477 Y103.502 E0.01550
G1 X119.781 Y103.108 E0.01562
G1 X120.161 Y102.786 E0.01562
G1 X120.597 Y102.551 E0.01550
G1 X121.446 Y102.374 E0.02720
G1 X128.504 Y102.373 E0.22131
G1 X129.317 Y102.518 E0.02590
G1 X130.029 Y102.930 E0.02579
G1 X130.519 Y103.514 E0.02390
G1 F8640.000
G1 X130.841 Y104.336 E-0.20384
G1 X130.866 Y105.474 E-0.26296
G1 X130.658 Y106.247 E-0.18469
G1 X130.385 Y106.629 E-0.10851
G1 E-0.04000 F2100.00000
G1 Z1.000 F10800.000
G1 X128.275 Y104.975
G1 Z0.400
G1 E0.80000 F2100.00000
M204 S800
G1 F900
G1 X128.275 Y105.025 E0.00169
G1 X121.725 Y105.025 E0.22171
G1 X121.725 Y104.975 E0.00169
G1 X128.215 Y104.975 E0.21968
M204 S1000
G1 X128.250 Y105.018 F10800.000
;BEFORE_LAYER_CHANGE
G92 E0.0
;0.6


G1 F8640.000
G1 X128.275 Y105.025 E-0.01803
G1 X125.062 Y105.025 E-0.74197
G1 E-0.04000 F2100.00000
G1 Z1.000 F10800.000
;AFTER_LAYER_CHANGE
;0.6
;CURRENT_Z: 0.6
G1 X131.447 Y102.846
G1 Z0.600
G1 E0.80000 F2100.00000
G1 F900
G1 X131.907 Y103.912 E0.03639
G1 X132.001 Y104.524 E0.01942
G1 X132.004 Y105.421 E0.02814
G1 X131.780 Y106.495 E0.03439
G1 X131.520 Y107.036 E0.01884
G1 X131.167 Y107.529 E0.01898
G1 X130.736 Y107.953 E0.01898
G1 X130.242 Y108.295 E0.01884
G1 X129.486 Y108.617 E0.02577
G1 X128.671 Y108.754 E0.02591
G1 X121.112 Y108.737 E0.23700
G1 X120.312 Y108.551 E0.02577
G1 X119.576 Y108.184 E0.02577
G1 X118.947 Y107.656 E0.02577
G1 X118.455 Y106.992 E0.02591
G1 X118.167 Y106.346 E0.02216
G1 X118.016 Y105.660 E0.02202
G1 X117.995 Y104.593 E0.03349
G1 X118.093 Y103.911 E0.02158
G1 X118.333 Y103.241 E0.02231
G1 X118.699 Y102.637 E0.02216
G1 X119.183 Y102.116 E0.02231
G1 X119.758 Y101.705 E0.02216
G1 X120.510 Y101.384 E0.02562
G1 X121.315 Y101.247 E0.02562
G1 X128.505 Y101.242 E0.22541
G1 X129.645 Y101.434 E0.03625
G1 X130.664 Y101.989 E0.03639
G1 X131.406 Y102.802 E0.03451
G1 X131.158 Y103.094 F10800.000
G1 F900
G1 X131.555 Y104.064 E0.03288
G1 X131.624 Y105.455 E0.04366
G1 X131.400 Y106.431 E0.03139
G1 X130.812 Y107.361 E0.03450
G1 X129.939 Y108.031 E0.03450
G1 X129.300 Y108.277 E0.02148
G1 X128.618 Y108.379 E0.02161
G1 X121.129 Y108.359 E0.23482
G1 X120.388 Y108.177 E0.02393
G1 X119.717 Y107.824 E0.02379
G1 X119.147 Y107.316 E0.02393
G1 X118.719 Y106.689 E0.02379
G1 X118.490 Y106.113 E0.01943
G1 X118.379 Y105.508 E0.01930
G1 X118.376 Y104.540 E0.03034
G1 X118.488 Y103.895 E0.02052
G1 X118.723 Y103.303 E0.01998
G1 X119.076 Y102.768 E0.02011
G1 X119.528 Y102.318 E0.01998
G1 X120.061 Y101.969 E0.01998
G1 X120.696 Y101.724 E0.02134
G1 X121.368 Y101.622 E0.02134
G1 X128.504 Y101.619 E0.22374
G1 X129.542 Y101.797 E0.03301
G1 X130.459 Y102.307 E0.03288
G1 X131.118 Y103.049 E0.03113
G1 X130.861 Y103.332 F10800.000
G1 F900
G1 X131.200 Y104.208 E0.02942
G1 X131.245 Y105.475 E0.03977
G1 X131.025 Y106.350 E0.02828
G1 X130.469 Y107.175 E0.03119
G1 X129.661 Y107.748 E0.03107
G1 X129.131 Y107.931 E0.01758
G1 X128.575 Y108.003 E0.01758
G1 X121.156 Y107.983 E0.23259
G1 X120.483 Y107.810 E0.02180
G1 X119.875 Y107.474 E0.02180
G1 X119.370 Y106.996 E0.02180
G1 X119.002 Y106.411 E0.02167
G1 X118.827 Y105.912 E0.01656
G1 X118.749 Y105.386 E0.01669
G1 X118.756 Y104.512 E0.02739
G1 X118.878 Y103.907 E0.01937
G1 X119.107 Y103.386 E0.01784
G1 X119.436 Y102.927 E0.01771
G1 X119.854 Y102.542 E0.01784
G1 X120.339 Y102.252 E0.01771
G1 X120.865 Y102.070 E0.01745
G1 X121.413 Y101.997 E0.01733
G1 X128.504 Y101.996 E0.22233
G1 X129.432 Y102.158 E0.02955
G1 X130.248 Y102.622 E0.02942
G1 X130.822 Y103.287 E0.02754
G1 X130.558 Y103.560 F10800.000
G1 F900
G1 X130.841 Y104.336 E0.02590
G1 X130.866 Y105.474 E0.03571
G1 X130.658 Y106.247 E0.02508
G1 X130.143 Y106.968 E0.02778
G1 X129.403 Y107.449 E0.02767
G1 X128.547 Y107.627 E0.02743
G1 X121.196 Y107.608 E0.23048
G1 X120.594 Y107.448 E0.01953
G1 X120.054 Y107.137 E0.01953
G1 X119.611 Y106.694 E0.01965
G1 X119.301 Y106.153 E0.01953
G1 X119.123 Y105.293 E0.02755
G1 X119.135 Y104.507 E0.02466
G1 X119.263 Y103.947 E0.01799
G1 X119.477 Y103.502 E0.01550
G1 X119.781 Y103.108 E0.01562
G1 X120.161 Y102.786 E0.01562
G1 X120.597 Y102.551 E0.01550
G1 X121.446 Y102.374 E0.02720
G1 X128.504 Y102.373 E0.22131
G1 X129.317 Y102.518 E0.02590
G1 X130.029 Y102.930 E0.02579
G1 X130.519 Y103.514 E0.02390
G1 F8640.000
G1 X130.841 Y104.336 E-0.20384
G1 X130.866 Y105.474 E-0.26296
G1 X130.658 Y106.247 E-0.18469
G1 X130.385 Y106.629 E-0.10851
G1 E-0.04000 F2100.00000
G1 Z1.200 F10800.000
G1 X128.275 Y104.975
G1 Z0.600
G1 E0.80000 F2100.00000
M204 S800
G1 F900
G1 X128.275 Y105.025 E0.00169
G1 X121.725 Y105.025 E0.22171
G1 X121.725 Y104.975 E0.00169
G1 X128.215 Y104.975 E0.21968
M204 S1000
G1 X128.250 Y105.018 F10800.000
;BEFORE_LAYER_CHANGE
G92 E0.0
;0.8


G1 F8640.000
G1 X128.275 Y105.025 E-0.01803
G1 X125.062 Y105.025 E-0.74197
G1 E-0.04000 F2100.00000
G1 Z1.200 F10800.000
;AFTER_LAYER_CHANGE
;0.8
;CURRENT_Z: 0.8
G1 X128.275 Y105.025
G1 Z0.800
G1 E0.80000 F2100.00000
M204 S800
G1 F900
G1 X121.725 Y105.025 E0.22171
G1 X121.725 Y104.975 E0.00169
G1 X128.265 Y104.975 E0.22137
M204 S1000
G1 X128.475 Y104.679 F10800.000
;BEFORE_LAYER_CHANGE
G92 E0.0
;1


G1 F8640.000
G1 X124.974 Y105.000 E-0.76000
G1 E-0.04000 F2100.00000
G1 Z1.400 F10800.000
;AFTER_LAYER_CHANGE
;1
;CURRENT_Z: 1
G1 X128.275 Y105.025
G1 Z1.000
G1 E0.80000 F2100.00000
M204 S800
G1 F900
G1 X121.725 Y105.025 E0.22171
G1 X121.725 Y104.975 E0.00169
G1 X128.265 Y104.975 E0.22137
M204 S1000
G1 X128.475 Y104.679 F10800.000
;BEFORE_LAYER_CHANGE
G92 E0.0
;1.2


G1 F8640.000
G1 X124.974 Y105.000 E-0.76000
G1 E-0.04000 F2100.00000
G1 Z1.600 F10800.000
;AFTER_LAYER_CHANGE
;1.2
;CURRENT_Z: 1.2
G1 X128.275 Y105.025
G1 Z1.200
G1 E0.80000 F2100.00000
M204 S800
G1 F900
G1 X121.725 Y105.025 E0.22171
G1 X121.725 Y104.975 E0.00169
G1 X128.265 Y104.975 E0.22137
M204 S1000
G1 X128.475 Y104.679 F10800.000
;BEFORE_LAYER_CHANGE
G92 E0.0
;1.4


G1 F8640.000
G1 X124.974 Y105.000 E-0.76000
G1 E-0.04000 F2100.00000
G1 Z1.800 F10800.000
;AFTER_LAYER_CHANGE
;1.4
;CURRENT_Z: 1.4
G1 X128.275 Y105.025
G1 Z1.400
G1 E0.80000 F2100.00000
M204 S800
G1 F900
G1 X121.725 Y105.025 E0.22171
G1 X121.725 Y104.975 E0.00169
G1 X128.265 Y104.975 E0.22137
M204 S1000
G1 X128.475 Y104.679 F10800.000
;BEFORE_LAYER_CHANGE
G92 E0.0
;1.6


G1 F8640.000
G1 X124.974 Y105.000 E-0.76000
G1 E-0.04000 F2100.00000
G1 Z2.000 F10800.000
;AFTER_LAYER_CHANGE
;1.6
;CURRENT_Z: 1.6
G1 X128.275 Y105.025
G1 Z1.600
G1 E0.80000 F2100.00000
M204 S800
G1 F900
G1 X121.725 Y105.025 E0.22171
G1 X121.725 Y104.975 E0.00169
G1 X128.265 Y104.975 E0.22137
M204 S1000
G1 X128.475 Y104.679 F10800.000
;BEFORE_LAYER_CHANGE
G92 E0.0
;1.8


G1 F8640.000
G1 X124.974 Y105.000 E-0.76000
G1 E-0.04000 F2100.00000
G1 Z2.200 F10800.000
;AFTER_LAYER_CHANGE
;1.8
;CURRENT_Z: 1.8
G1 X128.275 Y105.025
G1 Z1.800
G1 E0.80000 F2100.00000
M204 S800
G1 F900
G1 X121.725 Y105.025 E0.22171
G1 X121.725 Y104.975 E0.00169
G1 X128.265 Y104.975 E0.22137
M204 S1000
G1 X128.475 Y104.679 F10800.000
;BEFORE_LAYER_CHANGE
G92 E0.0
;2


G1 F8640.000
G1 X124.974 Y105.000 E-0.76000
G1 E-0.04000 F2100.00000
G1 Z2.400 F10800.000
;AFTER_LAYER_CHANGE
;2
;CURRENT_Z: 2
G1 X128.275 Y105.025
G1 Z2.000
G1 E0.80000 F2100.00000
M204 S800
G1 F900
G1 X121.725 Y105.025 E0.22171
G1 X121.725 Y104.975 E0.00169
G1 X128.265 Y104.975 E0.22137
M204 S1000
G1 X128.475 Y104.679 F10800.000
;BEFORE_LAYER_CHANGE
G92 E0.0
;2.2


G1 F8640.000
G1 X124.974 Y105.000 E-0.76000
G1 E-0.04000 F2100.00000
G1 Z2.600 F10800.000
;AFTER_LAYER_CHANGE
;2.2
;CURRENT_Z: 2.2
G1 X128.275 Y105.025
G1 Z2.200
G1 E0.80000 F2100.00000
M204 S800
G1 F900
G1 X121.725 Y105.025 E0.22171
G1 X121.725 Y104.975 E0.00169
G1 X128.265 Y104.975 E0.22137
M204 S1000
G1 X128.475 Y104.679 F10800.000
;BEFORE_LAYER_CHANGE
G92 E0.0
;2.4


G1 F8640.000
G1 X124.974 Y105.000 E-0.76000
G1 E-0.04000 F2100.00000
G1 Z2.800 F10800.000
;AFTER_LAYER_CHANGE
;2.4
;CURRENT_Z: 2.4
G1 X128.275 Y105.025
G1 Z2.400
G1 E0.80000 F2100.00000
M204 S800
G1 F900
G1 X121.725 Y105.025 E0.22171
G1 X121.725 Y104.975 E0.00169
G1 X128.265 Y104.975 E0.22137
M204 S1000
G1 X128.475 Y104.679 F10800.000
;BEFORE_LAYER_CHANGE
G92 E0.0
;2.6


G1 F8640.000
G1 X124.974 Y105.000 E-0.76000
G1 E-0.04000 F2100.00000
G1 Z3.000 F10800.000
;AFTER_LAYER_CHANGE
;2.6
;CURRENT_Z: 2.6
G1 X128.275 Y105.025
G1 Z2.600
G1 E0.80000 F2100.00000
M204 S800
G1 F900
G1 X121.725 Y105.025 E0.22171
G1 X121.725 Y104.975 E0.00169
G1 X128.265 Y104.975 E0.22137
M204 S1000
G1 X128.475 Y104.679 F10800.000
;BEFORE_LAYER_CHANGE
G92 E0.0
;2.8


G1 F8640.000
G1 X124.974 Y105.000 E-0.76000
G1 E-0.04000 F2100.00000
G1 Z3.200 F10800.000
;AFTER_LAYER_CHANGE
;2.8
;CURRENT_Z: 2.8
G1 X128.275 Y105.025
G1 Z2.800
G1 E0.80000 F2100.00000
M204 S800
G1 F900
G1 X121.725 Y105.025 E0.22171
G1 X121.725 Y104.975 E0.00169
G1 X128.265 Y104.975 E0.22137
M204 S1000
G1 X128.475 Y104.679 F10800.000
;BEFORE_LAYER_CHANGE
G92 E0.0
;3


G1 F8640.000
G1 X124.974 Y105.000 E-0.76000
G1 E-0.04000 F2100.00000
G1 Z3.400 F10800.000
;AFTER_LAYER_CHANGE
;3
;CURRENT_Z: 3
G1 X128.275 Y105.025
G1 Z3.000
G1 E0.80000 F2100.00000
M204 S800
G1 F900
G1 X121.725 Y105.025 E0.22171
G1 X121.725 Y104.975 E0.00169
G1 X128.265 Y104.975 E0.22137
M204 S1000
G1 X128.475 Y104.679 F10800.000
G1 F8640.000;_WIPE
G1 X124.974 Y105.000 E-0.76000
G1 E-0.04000 F2100.00000
G1 Z3.600 F10800.000
M107
; Filament-specific end gcode
G4 ; wait
M104 S0 ; turn off temperature
M140 S0 ; turn off heatbed
M107 ; turn off fan
G1 Z33.6 ; Move print head up
G1 X0 Y200 F3000 ; home X axis
M900 K0 ; reset LA
M84 ; disable motors
M73 P100 R0
; filament used [mm] = 19.2
; filament used [cm3] = 0.0
; filament used [g] = 0.1
; filament cost = 0.0
; total filament used [g] = 0.1
; total filament cost = 0.0
; estimated printing time (normal mode) = 1m 0s

; avoid_crossing_perimeters = 0
; bed_custom_model = 
; bed_custom_texture = 
; bed_shape = 0x0,250x0,250x210,0x210
; bed_temperature = 60
; before_layer_gcode = ;BEFORE_LAYER_CHANGE\nG92 E0.0\n;[layer_z]\n\n
; between_objects_gcode = 
; bottom_fill_pattern = rectilinear
; bottom_solid_layers = 4
; bottom_solid_min_thickness = 0.5
; bridge_acceleration = 1000
; bridge_angle = 0
; bridge_fan_speed = 100
; bridge_flow_ratio = 0.95
; bridge_speed = 20
; brim_width = 0
; clip_multipart_objects = 1
; compatible_printers_condition_cummulative = "printer_notes=~/.*PRINTER_VENDOR_PRUSA3D.*/ and printer_notes=~/.*PRINTER_MODEL_MK2[^.].*/ and nozzle_diameter[0]==0.4";"! (printer_notes=~/.*PRINTER_VENDOR_PRUSA3D.*/ and printer_notes=~/.*PRINTER_MODEL_MK(2.5|3).*/ and single_extruder_multi_material)"
; complete_objects = 0
; cooling = 1
; cooling_tube_length = 5
; cooling_tube_retraction = 91.5
; default_acceleration = 1000
; default_filament_profile = "Prusament PLA"
; default_print_profile = 0.15mm OPTIMAL
; deretract_speed = 0
; disable_fan_first_layers = 1
; dont_support_bridges = 1
; draft_shield = 0
; duplicate_distance = 6
; elefant_foot_compensation = 0.2
; end_filament_gcode = "; Filament-specific end gcode"
; end_gcode = G4 ; wait\nM104 S0 ; turn off temperature\nM140 S0 ; turn off heatbed\nM107 ; turn off fan\n{if layer_z < max_print_height}G1 Z{z_offset+min(layer_z+30, max_print_height)}{endif} ; Move print head up\nG1 X0 Y200 F3000 ; home X axis\nM900 K0 ; reset LA\nM84 ; disable motors
; ensure_vertical_shell_thickness = 1
; external_perimeter_extrusion_width = 0.45
; external_perimeter_speed = 40
; external_perimeters_first = 0
; extra_loading_move = -2
; extra_perimeters = 0
; extruder_clearance_height = 20
; extruder_clearance_radius = 45
; extruder_colour = ""
; extruder_offset = 0x0
; extrusion_axis = E
; extrusion_multiplier = 1
; extrusion_width = 0.45
; fan_always_on = 1
; fan_below_layer_time = 100
; filament_colour = #FF8000
; filament_cooling_final_speed = 3.4
; filament_cooling_initial_speed = 2.2
; filament_cooling_moves = 4
; filament_cost = 25.4
; filament_density = 1.24
; filament_diameter = 1.75
; filament_load_time = 0
; filament_loading_speed = 28
; filament_loading_speed_start = 3
; filament_max_volumetric_speed = 15
; filament_minimal_purge_on_wipe_tower = 15
; filament_notes = ""
; filament_ramming_parameters = "120 100 6.6 6.8 7.2 7.6 7.9 8.2 8.7 9.4 9.9 10.0| 0.05 6.6 0.45 6.8 0.95 7.8 1.45 8.3 1.95 9.7 2.45 10 2.95 7.6 3.45 7.6 3.95 7.6 4.45 7.6 4.95 7.6"
; filament_settings_id = "Generic PLA"
; filament_soluble = 0
; filament_toolchange_delay = 0
; filament_type = PLA
; filament_unload_time = 0
; filament_unloading_speed = 90
; filament_unloading_speed_start = 100
; filament_vendor = Generic
; fill_angle = 45
; fill_density = 20%
; fill_pattern = cubic
; first_layer_acceleration = 1000
; first_layer_bed_temperature = 60
; first_layer_extrusion_width = 0.42
; first_layer_height = 0.2
; first_layer_speed = 20
; first_layer_temperature = 215
; gap_fill_speed = 40
; gcode_comments = 0
; gcode_flavor = marlin
; gcode_label_objects = 0
; high_current_on_filament_swap = 0
; host_type = octoprint
; infill_acceleration = 2000
; infill_every_layers = 1
; infill_extruder = 1
; infill_extrusion_width = 0.45
; infill_first = 0
; infill_only_where_needed = 0
; infill_overlap = 25%
; infill_speed = 60
; interface_shells = 0
; layer_gcode = ;AFTER_LAYER_CHANGE\n;[layer_z]\n;CURRENT_Z: [layer_z]
; layer_height = 0.2
; machine_max_acceleration_e = 10000
; machine_max_acceleration_extruding = 2000
; machine_max_acceleration_retracting = 1500
; machine_max_acceleration_x = 9000
; machine_max_acceleration_y = 9000
; machine_max_acceleration_z = 500
; machine_max_feedrate_e = 120
; machine_max_feedrate_x = 500
; machine_max_feedrate_y = 500
; machine_max_feedrate_z = 12
; machine_max_jerk_e = 4.5
; machine_max_jerk_x = 10
; machine_max_jerk_y = 10
; machine_max_jerk_z = 0.2
; machine_min_extruding_rate = 0
; machine_min_travel_rate = 0
; max_fan_speed = 100
; max_layer_height = 0.25
; max_print_height = 200
; max_print_speed = 100
; max_volumetric_speed = 0
; min_fan_speed = 100
; min_layer_height = 0.07
; min_print_speed = 15
; min_skirt_length = 4
; notes = 
; nozzle_diameter = 0.4
; only_retract_when_crossing_perimeters = 0
; ooze_prevention = 0
; output_filename_format = {input_filename_base}_{layer_height}mm_{filament_type[0]}_{printer_model}_{print_time}.gcode
; overhangs = 0
; parking_pos_retraction = 92
; perimeter_acceleration = 800
; perimeter_extruder = 1
; perimeter_extrusion_width = 0.45
; perimeter_speed = 50
; perimeters = 2
; post_process = ./post_process.py
; print_settings_id = 0.20mm NORMAL
; printer_model = MK2.5
; printer_notes = Don't remove the following keywords! These keywords are used in the "compatible printer" condition of the print and filament profiles to link the particular print and filament profiles to this printer profile.\nPRINTER_VENDOR_PRUSA3D\nPRINTER_MODEL_MK2\n
; printer_settings_id = Original Prusa i3 MK2.5
; printer_technology = FFF
; printer_variant = 0.4
; printer_vendor = 
; raft_layers = 0
; remaining_times = 1
; resolution = 0
; retract_before_travel = 1
; retract_before_wipe = 0%
; retract_layer_change = 1
; retract_length = 0.8
; retract_length_toolchange = 4
; retract_lift = 0.6
; retract_lift_above = 0
; retract_lift_below = 199
; retract_restart_extra = 0
; retract_restart_extra_toolchange = 0
; retract_speed = 35
; seam_position = nearest
; serial_port = 
; serial_speed = 250000
; silent_mode = 0
; single_extruder_multi_material = 0
; single_extruder_multi_material_priming = 1
; skirt_distance = 2
; skirt_height = 3
; skirts = 1
; slice_closing_radius = 0.049
; slowdown_below_layer_time = 20
; small_perimeter_speed = 25
; solid_infill_below_area = 0
; solid_infill_every_layers = 0
; solid_infill_extruder = 1
; solid_infill_extrusion_width = 0.45
; solid_infill_speed = 50
; spiral_vase = 0
; standby_temperature_delta = -5
; start_filament_gcode = "M900 K{if printer_notes=~/.*PRINTER_MODEL_MINI.*/ and nozzle_diameter[0]==0.6}0.12{elsif printer_notes=~/.*PRINTER_MODEL_MINI.*/}0.2{elsif nozzle_diameter[0]==0.6}0.04{else}0.05{endif} ; Filament gcode LA 1.5\n{if printer_notes=~/.*PRINTER_MODEL_MINI.*/};{elsif printer_notes=~/.*PRINTER_HAS_BOWDEN.*/}M900 K200{elsif nozzle_diameter[0]==0.6}M900 K18{else}M900 K30{endif} ; Filament gcode LA 1.0"
; start_gcode = M862.3 P "[printer_model]" ; printer model check\nM862.1 P[nozzle_diameter] ; nozzle diameter check\nM115 U3.9.1 ; tell printer latest fw version\nG90 ; use absolute coordinates\nM83 ; extruder relative mode\nM104 S[first_layer_temperature] ; set extruder temp\nM140 S[first_layer_bed_temperature] ; set bed temp\nM190 S[first_layer_bed_temperature] ; wait for bed temp\nM109 S[first_layer_temperature] ; wait for extruder temp\nG28 W ; home all without mesh bed level\nG80 ; mesh bed leveling\nG1 Y-3.0 F1000.0 ; go outside print area\nG92 E0.0\nG1 X60.0 E9.0 F1000.0 ; intro line\nG1 X100.0 E12.5 F1000.0 ; intro line\nG92 E0.0
; support_material = 0
; support_material_angle = 0
; support_material_auto = 1
; support_material_buildplate_only = 0
; support_material_contact_distance = 0.1
; support_material_enforce_layers = 0
; support_material_extruder = 0
; support_material_extrusion_width = 0.35
; support_material_interface_contact_loops = 0
; support_material_interface_extruder = 0
; support_material_interface_layers = 2
; support_material_interface_spacing = 0.2
; support_material_interface_speed = 100%
; support_material_pattern = rectilinear
; support_material_spacing = 2
; support_material_speed = 50
; support_material_synchronize_layers = 0
; support_material_threshold = 55
; support_material_with_sheath = 0
; support_material_xy_spacing = 50%
; temperature = 210
; thin_walls = 0
; threads = 8
; thumbnails = 
; toolchange_gcode = 
; top_fill_pattern = rectilinear
; top_infill_extrusion_width = 0.4
; top_solid_infill_speed = 40
; top_solid_layers = 5
; top_solid_min_thickness = 0.6
; travel_speed = 180
; use_firmware_retraction = 0
; use_relative_e_distances = 1
; use_volumetric_e = 0
; variable_layer_height = 1
; wipe = 1
; wipe_into_infill = 0
; wipe_into_objects = 0
; wipe_tower = 1
; wipe_tower_bridging = 10
; wipe_tower_no_sparse_layers = 0
; wipe_tower_rotation_angle = 0
; wipe_tower_width = 60
; wipe_tower_x = 170
; wipe_tower_y = 140
; wiping_volumes_extruders = 70,70
; wiping_volumes_matrix = 0
; xy_size_compensation = 0
; z_offset = 0
