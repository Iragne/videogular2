"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var vg_player_1 = require("./vg-player/vg-player");
var vg_media_1 = require("./vg-media/vg-media");
var vg_cue_points_1 = require("./vg-cue-points/vg-cue-points");
var vg_api_1 = require("./services/vg-api");
var vg_fullscreen_api_1 = require("./services/vg-fullscreen-api");
var vg_utils_1 = require("./services/vg-utils");
var vg_controls_hidden_1 = require("./services/vg-controls-hidden");
// components
__export(require("./vg-player/vg-player"));
__export(require("./vg-media/vg-media"));
__export(require("./vg-cue-points/vg-cue-points"));
// services
__export(require("./services/vg-api"));
__export(require("./services/vg-fullscreen-api"));
__export(require("./services/vg-utils"));
__export(require("./services/vg-controls-hidden"));
// types
__export(require("./events/vg-events"));
__export(require("./states/vg-states"));
// utility classes
__export(require("./vg-media/vg-media-element"));
/**
 * @internal
 */
function coreDirectives() {
    return [
        vg_player_1.VgPlayer, vg_media_1.VgMedia, vg_cue_points_1.VgCuePoints
    ];
}
exports.coreDirectives = coreDirectives;
function coreServices() {
    return [
        vg_api_1.VgAPI, vg_fullscreen_api_1.VgFullscreenAPI, vg_utils_1.VgUtils, vg_controls_hidden_1.VgControlsHidden
    ];
}
exports.coreServices = coreServices;
var VgCoreModule = (function () {
    function VgCoreModule() {
    }
    VgCoreModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: coreDirectives(),
                    exports: coreDirectives(),
                    providers: coreServices()
                },] },
    ];
    return VgCoreModule;
}());
exports.VgCoreModule = VgCoreModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzQ0FBbUQ7QUFDbkQsbURBQWlEO0FBQ2pELGdEQUE4QztBQUM5QywrREFBNEQ7QUFDNUQsNENBQTBDO0FBQzFDLGtFQUErRDtBQUMvRCxnREFBOEM7QUFDOUMsb0VBQWlFO0FBR2pFLGFBQWE7QUFDYiwyQ0FBc0M7QUFDdEMseUNBQW9DO0FBQ3BDLG1EQUE4QztBQUU5QyxXQUFXO0FBQ1gsdUNBQWtDO0FBQ2xDLGtEQUE2QztBQUM3Qyx5Q0FBb0M7QUFDcEMsbURBQThDO0FBRTlDLFFBQVE7QUFDUix3Q0FBbUM7QUFDbkMsd0NBQW1DO0FBS25DLGtCQUFrQjtBQUNsQixpREFBNEM7Ozs7QUFLNUM7SUFDSSxNQUFNLENBQUM7UUFDSCxvQkFBUSxFQUFFLGtCQUFPLEVBQUUsMkJBQVc7S0FDakMsQ0FBQztDQUNMO0FBSkQsd0NBSUM7QUFFRDtJQUNJLE1BQU0sQ0FBQztRQUNILGNBQUssRUFBRSxtQ0FBZSxFQUFFLGtCQUFPLEVBQUUscUNBQWdCO0tBQ3BELENBQUM7Q0FDTDtBQUpELG9DQUlDOzs7OztnQkFFQSxlQUFRLFNBQUM7b0JBQ04sWUFBWSxFQUFFLGNBQWMsRUFBRTtvQkFDOUIsT0FBTyxFQUFFLGNBQWMsRUFBRTtvQkFDekIsU0FBUyxFQUFFLFlBQVksRUFBRTtpQkFDNUI7O3VCQWxERDs7QUFtRGEsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZnUGxheWVyIH0gZnJvbSAnLi92Zy1wbGF5ZXIvdmctcGxheWVyJztcbmltcG9ydCB7IFZnTWVkaWEgfSBmcm9tICcuL3ZnLW1lZGlhL3ZnLW1lZGlhJztcbmltcG9ydCB7IFZnQ3VlUG9pbnRzIH0gZnJvbSAnLi92Zy1jdWUtcG9pbnRzL3ZnLWN1ZS1wb2ludHMnO1xuaW1wb3J0IHsgVmdBUEkgfSBmcm9tICcuL3NlcnZpY2VzL3ZnLWFwaSc7XG5pbXBvcnQgeyBWZ0Z1bGxzY3JlZW5BUEkgfSBmcm9tICcuL3NlcnZpY2VzL3ZnLWZ1bGxzY3JlZW4tYXBpJztcbmltcG9ydCB7IFZnVXRpbHMgfSBmcm9tICcuL3NlcnZpY2VzL3ZnLXV0aWxzJztcbmltcG9ydCB7IFZnQ29udHJvbHNIaWRkZW4gfSBmcm9tICcuL3NlcnZpY2VzL3ZnLWNvbnRyb2xzLWhpZGRlbic7XG5cblxuLy8gY29tcG9uZW50c1xuZXhwb3J0ICogZnJvbSAnLi92Zy1wbGF5ZXIvdmctcGxheWVyJztcbmV4cG9ydCAqIGZyb20gJy4vdmctbWVkaWEvdmctbWVkaWEnO1xuZXhwb3J0ICogZnJvbSAnLi92Zy1jdWUtcG9pbnRzL3ZnLWN1ZS1wb2ludHMnO1xuXG4vLyBzZXJ2aWNlc1xuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlcy92Zy1hcGknO1xuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlcy92Zy1mdWxsc2NyZWVuLWFwaSc7XG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2VzL3ZnLXV0aWxzJztcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZXMvdmctY29udHJvbHMtaGlkZGVuJztcblxuLy8gdHlwZXNcbmV4cG9ydCAqIGZyb20gJy4vZXZlbnRzL3ZnLWV2ZW50cyc7XG5leHBvcnQgKiBmcm9tICcuL3N0YXRlcy92Zy1zdGF0ZXMnO1xuXG4vLyBpbnRlcmZhY2VzXG5leHBvcnQgKiBmcm9tICcuL3ZnLW1lZGlhL2ktbWVkaWEtZWxlbWVudCc7XG5cbi8vIHV0aWxpdHkgY2xhc3Nlc1xuZXhwb3J0ICogZnJvbSAnLi92Zy1tZWRpYS92Zy1tZWRpYS1lbGVtZW50JztcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcmVEaXJlY3RpdmVzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAgIFZnUGxheWVyLCBWZ01lZGlhLCBWZ0N1ZVBvaW50c1xuICAgIF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3JlU2VydmljZXMoKTogUHJvdmlkZXJbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgVmdBUEksIFZnRnVsbHNjcmVlbkFQSSwgVmdVdGlscywgVmdDb250cm9sc0hpZGRlblxuICAgIF07XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBjb3JlRGlyZWN0aXZlcygpLFxuICAgIGV4cG9ydHM6IGNvcmVEaXJlY3RpdmVzKCksXG4gICAgcHJvdmlkZXJzOiBjb3JlU2VydmljZXMoKVxufSlcbmV4cG9ydCBjbGFzcyBWZ0NvcmVNb2R1bGUge1xufVxuIl19