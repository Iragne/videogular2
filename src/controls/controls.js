"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var vg_controls_1 = require("./vg-controls");
var vg_fullscreen_1 = require("./vg-fullscreen/vg-fullscreen");
var vg_mute_1 = require("./vg-mute/vg-mute");
var vg_volume_1 = require("./vg-volume/vg-volume");
var vg_play_pause_1 = require("./vg-play-pause/vg-play-pause");
var vg_playback_button_1 = require("./vg-playback-button/vg-playback-button");
var vg_scrub_bar_1 = require("./vg-scrub-bar/vg-scrub-bar");
var vg_scrub_bar_buffering_time_1 = require("./vg-scrub-bar/vg-scrub-bar-buffering-time/vg-scrub-bar-buffering-time");
var vg_scrub_bar_cue_points_1 = require("./vg-scrub-bar/vg-scrub-bar-cue-points/vg-scrub-bar-cue-points");
var vg_scrub_bar_current_time_1 = require("./vg-scrub-bar/vg-scrub-bar-current-time/vg-scrub-bar-current-time");
var vg_time_display_1 = require("./vg-time-display/vg-time-display");
var vg_track_selector_1 = require("./vg-track-selector/vg-track-selector");
var vg_controls_hidden_1 = require("./../core/services/vg-controls-hidden");
var VgControlsModule = (function () {
    function VgControlsModule() {
    }
    VgControlsModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [
                        vg_controls_1.VgControls,
                        vg_fullscreen_1.VgFullscreen,
                        vg_mute_1.VgMute,
                        vg_volume_1.VgVolume,
                        vg_play_pause_1.VgPlayPause,
                        vg_playback_button_1.VgPlaybackButton,
                        vg_scrub_bar_1.VgScrubBar,
                        vg_scrub_bar_buffering_time_1.VgScrubBarBufferingTime,
                        vg_scrub_bar_cue_points_1.VgScrubBarCuePoints,
                        vg_scrub_bar_current_time_1.VgScrubBarCurrentTime,
                        vg_time_display_1.VgTimeDisplay,
                        vg_time_display_1.VgUtcPipe,
                        vg_track_selector_1.VgTrackSelector
                    ],
                    exports: [
                        vg_controls_1.VgControls,
                        vg_fullscreen_1.VgFullscreen,
                        vg_mute_1.VgMute,
                        vg_volume_1.VgVolume,
                        vg_play_pause_1.VgPlayPause,
                        vg_playback_button_1.VgPlaybackButton,
                        vg_scrub_bar_1.VgScrubBar,
                        vg_scrub_bar_buffering_time_1.VgScrubBarBufferingTime,
                        vg_scrub_bar_cue_points_1.VgScrubBarCuePoints,
                        vg_scrub_bar_current_time_1.VgScrubBarCurrentTime,
                        vg_time_display_1.VgTimeDisplay,
                        vg_time_display_1.VgUtcPipe,
                        vg_track_selector_1.VgTrackSelector
                    ],
                    providers: [vg_controls_hidden_1.VgControlsHidden]
                },] },
    ];
    return VgControlsModule;
}());
exports.VgControlsModule = VgControlsModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0MsNkNBQTJDO0FBQzNDLCtEQUE2RDtBQUM3RCw2Q0FBMkM7QUFDM0MsbURBQWlEO0FBQ2pELCtEQUE0RDtBQUM1RCw4RUFBMkU7QUFDM0UsNERBQXlEO0FBQ3pELHNIQUFpSDtBQUNqSCwwR0FBcUc7QUFDckcsZ0hBQTJHO0FBQzNHLHFFQUE2RTtBQUM3RSwyRUFBd0U7QUFDeEUsNEVBQXlFOzs7OztnQkFFeEUsZUFBUSxTQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFFLHFCQUFZLENBQUU7b0JBQ3pCLFlBQVksRUFBRTt3QkFDVix3QkFBVTt3QkFDViw0QkFBWTt3QkFDWixnQkFBTTt3QkFDTixvQkFBUTt3QkFDUiwyQkFBVzt3QkFDWCxxQ0FBZ0I7d0JBQ2hCLHlCQUFVO3dCQUNWLHFEQUF1Qjt3QkFDdkIsNkNBQW1CO3dCQUNuQixpREFBcUI7d0JBQ3JCLCtCQUFhO3dCQUNiLDJCQUFTO3dCQUNULG1DQUFlO3FCQUNsQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsd0JBQVU7d0JBQ1YsNEJBQVk7d0JBQ1osZ0JBQU07d0JBQ04sb0JBQVE7d0JBQ1IsMkJBQVc7d0JBQ1gscUNBQWdCO3dCQUNoQix5QkFBVTt3QkFDVixxREFBdUI7d0JBQ3ZCLDZDQUFtQjt3QkFDbkIsaURBQXFCO3dCQUNyQiwrQkFBYTt3QkFDYiwyQkFBUzt3QkFDVCxtQ0FBZTtxQkFDbEI7b0JBQ0QsU0FBUyxFQUFFLENBQUUscUNBQWdCLENBQUU7aUJBQ2xDOzsyQkFqREQ7O0FBa0RhLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVmdDb250cm9scyB9IGZyb20gJy4vdmctY29udHJvbHMnO1xuaW1wb3J0IHsgVmdGdWxsc2NyZWVuIH0gZnJvbSAnLi92Zy1mdWxsc2NyZWVuL3ZnLWZ1bGxzY3JlZW4nO1xuaW1wb3J0IHsgVmdNdXRlIH0gZnJvbSAnLi92Zy1tdXRlL3ZnLW11dGUnO1xuaW1wb3J0IHsgVmdWb2x1bWUgfSBmcm9tICcuL3ZnLXZvbHVtZS92Zy12b2x1bWUnO1xuaW1wb3J0IHsgVmdQbGF5UGF1c2UgfSBmcm9tICcuL3ZnLXBsYXktcGF1c2UvdmctcGxheS1wYXVzZSc7XG5pbXBvcnQgeyBWZ1BsYXliYWNrQnV0dG9uIH0gZnJvbSAnLi92Zy1wbGF5YmFjay1idXR0b24vdmctcGxheWJhY2stYnV0dG9uJztcbmltcG9ydCB7IFZnU2NydWJCYXIgfSBmcm9tICcuL3ZnLXNjcnViLWJhci92Zy1zY3J1Yi1iYXInO1xuaW1wb3J0IHsgVmdTY3J1YkJhckJ1ZmZlcmluZ1RpbWUgfSBmcm9tICcuL3ZnLXNjcnViLWJhci92Zy1zY3J1Yi1iYXItYnVmZmVyaW5nLXRpbWUvdmctc2NydWItYmFyLWJ1ZmZlcmluZy10aW1lJztcbmltcG9ydCB7IFZnU2NydWJCYXJDdWVQb2ludHMgfSBmcm9tICcuL3ZnLXNjcnViLWJhci92Zy1zY3J1Yi1iYXItY3VlLXBvaW50cy92Zy1zY3J1Yi1iYXItY3VlLXBvaW50cyc7XG5pbXBvcnQgeyBWZ1NjcnViQmFyQ3VycmVudFRpbWUgfSBmcm9tICcuL3ZnLXNjcnViLWJhci92Zy1zY3J1Yi1iYXItY3VycmVudC10aW1lL3ZnLXNjcnViLWJhci1jdXJyZW50LXRpbWUnO1xuaW1wb3J0IHsgVmdUaW1lRGlzcGxheSwgVmdVdGNQaXBlIH0gZnJvbSAnLi92Zy10aW1lLWRpc3BsYXkvdmctdGltZS1kaXNwbGF5JztcbmltcG9ydCB7IFZnVHJhY2tTZWxlY3RvciB9IGZyb20gJy4vdmctdHJhY2stc2VsZWN0b3IvdmctdHJhY2stc2VsZWN0b3InO1xuaW1wb3J0IHsgVmdDb250cm9sc0hpZGRlbiB9IGZyb20gJy4vLi4vY29yZS9zZXJ2aWNlcy92Zy1jb250cm9scy1oaWRkZW4nO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFsgQ29tbW9uTW9kdWxlIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFZnQ29udHJvbHMsXG4gICAgICAgIFZnRnVsbHNjcmVlbixcbiAgICAgICAgVmdNdXRlLFxuICAgICAgICBWZ1ZvbHVtZSxcbiAgICAgICAgVmdQbGF5UGF1c2UsXG4gICAgICAgIFZnUGxheWJhY2tCdXR0b24sXG4gICAgICAgIFZnU2NydWJCYXIsXG4gICAgICAgIFZnU2NydWJCYXJCdWZmZXJpbmdUaW1lLFxuICAgICAgICBWZ1NjcnViQmFyQ3VlUG9pbnRzLFxuICAgICAgICBWZ1NjcnViQmFyQ3VycmVudFRpbWUsXG4gICAgICAgIFZnVGltZURpc3BsYXksXG4gICAgICAgIFZnVXRjUGlwZSxcbiAgICAgICAgVmdUcmFja1NlbGVjdG9yXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFZnQ29udHJvbHMsXG4gICAgICAgIFZnRnVsbHNjcmVlbixcbiAgICAgICAgVmdNdXRlLFxuICAgICAgICBWZ1ZvbHVtZSxcbiAgICAgICAgVmdQbGF5UGF1c2UsXG4gICAgICAgIFZnUGxheWJhY2tCdXR0b24sXG4gICAgICAgIFZnU2NydWJCYXIsXG4gICAgICAgIFZnU2NydWJCYXJCdWZmZXJpbmdUaW1lLFxuICAgICAgICBWZ1NjcnViQmFyQ3VlUG9pbnRzLFxuICAgICAgICBWZ1NjcnViQmFyQ3VycmVudFRpbWUsXG4gICAgICAgIFZnVGltZURpc3BsYXksXG4gICAgICAgIFZnVXRjUGlwZSxcbiAgICAgICAgVmdUcmFja1NlbGVjdG9yXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFsgVmdDb250cm9sc0hpZGRlbiBdXG59KVxuZXhwb3J0IGNsYXNzIFZnQ29udHJvbHNNb2R1bGUge1xufVxuIl19