"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VgMediaElement = (function () {
    function VgMediaElement() {
    }
    Object.defineProperty(VgMediaElement.prototype, "audioTracks", {
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    ;
    VgMediaElement.prototype.addTextTrack = function (kind, label, language) {
        return null;
    };
    VgMediaElement.prototype.canPlayType = function (type) {
        return null;
    };
    VgMediaElement.prototype.load = function () {
    };
    VgMediaElement.prototype.msClearEffects = function () {
    };
    VgMediaElement.prototype.msGetAsCastingSource = function () {
        return null;
    };
    VgMediaElement.prototype.msInsertAudioEffect = function (activatableClassId, effectRequired, config) {
    };
    VgMediaElement.prototype.msSetMediaKeys = function (mediaKeys) {
    };
    VgMediaElement.prototype.msSetMediaProtectionManager = function (mediaProtectionManager) {
    };
    VgMediaElement.prototype.pause = function () {
    };
    VgMediaElement.prototype.play = function () {
        return null;
    };
    VgMediaElement.prototype.setMediaKeys = function (mediaKeys) {
        return null;
    };
    VgMediaElement.prototype.addEventListener = function (type, listener, useCapture) {
    };
    return VgMediaElement;
}());
exports.VgMediaElement = VgMediaElement;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctbWVkaWEtZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZnLW1lZGlhLWVsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxJQUFBOzs7SUFHSSxzQkFBSSx1Q0FBVzthQUFmLGNBQW9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTs7O09BQUE7SUFBQSxDQUFDO0lBaURuRCxxQ0FBWSxHQUFaLFVBQWEsSUFBWSxFQUFFLEtBQWMsRUFBRSxRQUFpQjtRQUN4RCxNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ2Y7SUFFRCxvQ0FBVyxHQUFYLFVBQVksSUFBWTtRQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ2Y7SUFFRCw2QkFBSSxHQUFKO0tBQ0M7SUFFRCx1Q0FBYyxHQUFkO0tBQ0M7SUFFRCw2Q0FBb0IsR0FBcEI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ2Y7SUFFRCw0Q0FBbUIsR0FBbkIsVUFBb0Isa0JBQTBCLEVBQUUsY0FBdUIsRUFBRSxNQUFZO0tBQ3BGO0lBRUQsdUNBQWMsR0FBZCxVQUFlLFNBQXNCO0tBQ3BDO0lBRUQsb0RBQTJCLEdBQTNCLFVBQTRCLHNCQUE0QjtLQUN2RDtJQUVELDhCQUFLLEdBQUw7S0FDQztJQUVELDZCQUFJLEdBQUo7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ2Y7SUFFRCxxQ0FBWSxHQUFaLFVBQWEsU0FBMEI7UUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQztLQUNmO0lBRUQseUNBQWdCLEdBQWhCLFVBQWlCLElBQVksRUFBRSxRQUE0QyxFQUFFLFVBQW9CO0tBQ2hHO3lCQTdGTDtJQThGQyxDQUFBO0FBNUZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU1lZGlhRWxlbWVudCB9IGZyb20gJy4vaS1tZWRpYS1lbGVtZW50JztcblxuZXhwb3J0IGNsYXNzIFZnTWVkaWFFbGVtZW50IGltcGxlbWVudHMgSU1lZGlhRWxlbWVudCB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBlbGVtOiBhbnk7XG4gICAgZ2V0IGF1ZGlvVHJhY2tzKCk6IEF1ZGlvVHJhY2tMaXN0IHsgcmV0dXJuIG51bGw7IH07XG4gICAgYXV0b3BsYXk6IGJvb2xlYW47XG4gICAgYnVmZmVyZWQ6IFRpbWVSYW5nZXM7XG4gICAgY29udHJvbHM6IGJvb2xlYW47XG4gICAgY3Jvc3NPcmlnaW46IHN0cmluZyB8IGFueTtcbiAgICBjdXJyZW50U3JjOiBzdHJpbmc7XG4gICAgY3VycmVudFRpbWU6IG51bWJlcjtcbiAgICBkZWZhdWx0TXV0ZWQ6IGJvb2xlYW47XG4gICAgZGVmYXVsdFBsYXliYWNrUmF0ZTogbnVtYmVyO1xuICAgIGR1cmF0aW9uOiBudW1iZXI7XG4gICAgZW5kZWQ6IGJvb2xlYW47XG4gICAgZXJyb3I6IE1lZGlhRXJyb3I7XG4gICAgbG9vcDogYm9vbGVhbjtcbiAgICBtZWRpYUtleXM6IE1lZGlhS2V5cyB8IGFueTtcbiAgICBtc0F1ZGlvQ2F0ZWdvcnk6IHN0cmluZztcbiAgICBtc0F1ZGlvRGV2aWNlVHlwZTogc3RyaW5nO1xuICAgIG1zR3JhcGhpY3NUcnVzdFN0YXR1czogTVNHcmFwaGljc1RydXN0O1xuICAgIG1zS2V5czogTVNNZWRpYUtleXM7XG4gICAgbXNQbGF5VG9EaXNhYmxlZDogYm9vbGVhbjtcbiAgICBtc1BsYXlUb1ByZWZlcnJlZFNvdXJjZVVyaTogc3RyaW5nO1xuICAgIG1zUGxheVRvUHJpbWFyeTogYm9vbGVhbjtcbiAgICBtc1BsYXlUb1NvdXJjZTogYW55O1xuICAgIG1zUmVhbFRpbWU6IGJvb2xlYW47XG4gICAgbXV0ZWQ6IGJvb2xlYW47XG4gICAgbmV0d29ya1N0YXRlOiBudW1iZXI7XG4gICAgb25lbmNyeXB0ZWQ6IChldjogTWVkaWFFbmNyeXB0ZWRFdmVudCkgPT4gYW55O1xuICAgIG9ubXNuZWVka2V5OiAoZXY6IE1TTWVkaWFLZXlOZWVkZWRFdmVudCkgPT4gYW55O1xuICAgIHBhdXNlZDogYm9vbGVhbjtcbiAgICBwbGF5YmFja1JhdGU6IG51bWJlcjtcbiAgICBwbGF5ZWQ6IFRpbWVSYW5nZXM7XG4gICAgcHJlbG9hZDogc3RyaW5nO1xuICAgIHJlYWR5U3RhdGU6IG51bWJlcjtcbiAgICBzZWVrYWJsZTogVGltZVJhbmdlcztcbiAgICBzZWVraW5nOiBib29sZWFuO1xuICAgIHNyYzogc3RyaW5nO1xuICAgIHNyY09iamVjdDogTWVkaWFTdHJlYW0gfCBhbnk7XG4gICAgdGV4dFRyYWNrczogVGV4dFRyYWNrTGlzdDtcbiAgICB2aWRlb1RyYWNrczogVmlkZW9UcmFja0xpc3Q7XG4gICAgdm9sdW1lOiBudW1iZXI7XG4gICAgSEFWRV9DVVJSRU5UX0RBVEE6IG51bWJlcjtcbiAgICBIQVZFX0VOT1VHSF9EQVRBOiBudW1iZXI7XG4gICAgSEFWRV9GVVRVUkVfREFUQTogbnVtYmVyO1xuICAgIEhBVkVfTUVUQURBVEE6IG51bWJlcjtcbiAgICBIQVZFX05PVEhJTkc6IG51bWJlcjtcbiAgICBORVRXT1JLX0VNUFRZOiBudW1iZXI7XG4gICAgTkVUV09SS19JRExFOiBudW1iZXI7XG4gICAgTkVUV09SS19MT0FESU5HOiBudW1iZXI7XG4gICAgTkVUV09SS19OT19TT1VSQ0U6IG51bWJlcjtcblxuICAgIGFkZFRleHRUcmFjayhraW5kOiBzdHJpbmcsIGxhYmVsPzogc3RyaW5nLCBsYW5ndWFnZT86IHN0cmluZyk6IFRleHRUcmFjayB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNhblBsYXlUeXBlKHR5cGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxvYWQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgbXNDbGVhckVmZmVjdHMoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgbXNHZXRBc0Nhc3RpbmdTb3VyY2UoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbXNJbnNlcnRBdWRpb0VmZmVjdChhY3RpdmF0YWJsZUNsYXNzSWQ6IHN0cmluZywgZWZmZWN0UmVxdWlyZWQ6IGJvb2xlYW4sIGNvbmZpZz86IGFueSk6IHZvaWQge1xuICAgIH1cblxuICAgIG1zU2V0TWVkaWFLZXlzKG1lZGlhS2V5czogTVNNZWRpYUtleXMpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBtc1NldE1lZGlhUHJvdGVjdGlvbk1hbmFnZXIobWVkaWFQcm90ZWN0aW9uTWFuYWdlcj86IGFueSk6IHZvaWQge1xuICAgIH1cblxuICAgIHBhdXNlKCk6IHZvaWQge1xuICAgIH1cblxuICAgIHBsYXkoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgc2V0TWVkaWFLZXlzKG1lZGlhS2V5czogTWVkaWFLZXlzIHwgYW55KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXIodHlwZTogc3RyaW5nLCBsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCwgdXNlQ2FwdHVyZT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB9XG59XG4iXX0=