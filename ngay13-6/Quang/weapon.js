var menu = {
    "Amygdalan Arm": { ATK: 80, image: "../Quang/amygdalan_arm.jpg", a: "Amygdalan Arm is a Trick Weapon in Bloodborne. It was added with The Old Hunters DLC. There are 3 versions of this weapon: Normal, Uncanny and Lost. The only known differences being the Gem Imprints and the locations in which they are found."},
    "Beast Claw": { ATK: 75, image: "../Quang/beast_claw.jpg", a: "The Beast Claw is a Trick Weapon in Bloodborne it's associated with The Blood Beast Covenant."},
    "Beast Cutter": { ATK: 90, image: "../Quang/beast_cutter.jpg", a: "The Beast Cutter is a Trick Weapon in Bloodborne. It was introduced in The Old Hunters Expansion and appears to be the Strength equivalent of the Threaded Cane. There are 3 versions of this weapon: Normal, Uncanny and Lost. The only known differences being the Gem Imprints and the locations in which they are found."},
    "Blade Of Mercy": { ATK: 92, image: "../Quang/blade_of_mercy.jpg", a: "Blade of Mercy is a Trick Weapon in Bloodborne; it's one of two skill/arcane hybrid weapons."},
    "Bloodletter": {ATK: 60, image: "../Quang/bloodletter.jpg", a: "Bloodletter is a Trick Weapon in Bloodborne. It is wielded by Brador and is part of The Old Hunters DLC. There are 3 versions of this weapon: Normal, Uncanny and Lost. The only known differences being the Gem Imprints and the locations in which they are found."},
    "Chikage": {ATK: 90, image: "../Quang/chikage.jpg", a: "Chikage is a katana-like sword in Bloodborne. There are 3 versions of this weapon: Normal, Uncanny and Lost. The only known differences being the Gem Imprints and the locations in which they are found. "},
    "Church Pike": { ATK: 90, image: "../Quang/church_pike.jpg", a: "Church Pick is a trick weapon in Bloodborne. It was added with The Old Hunters DLC. There are 3 versions of this weapon: Normal, Uncanny and Lost. The only known differences being the Gem Imprints and the locations in which they are found."},
    "Holy Moonlight Sword": { ATK: 80, image: "../Quang/holy_moonlight_sword.jpg", a: "Holy Moonlight Sword is a Trick Weapon in Bloodborne. It was introduced with The Old Hunters DLC. There are 3 versions of this weapon: Normal, Uncanny, and Lost. The only known differences being the Gem Imprints and the locations in which they are found."},
    "Hunter Axe": {ATK: 90, image: "../Quang/hunter_axe.jpg", a: "Hunter Axe is a Trick Weapon in Bloodborne."},
    "Kirkhammer": {ATK: 90, image: "../Quang/kirkhammer.jpg", a: "Kirkhammer (教会の石槌 Church Mallet) is a Trick Weapon in Bloodborne."},
};
function createWeaponMenu() {
    var  menuContainer = document.getElementById("menu-container");
    var menuList = document.createElement("ul");

    for (var weapon in menu) {
        var ATK = menu[weapon].ATK.toFixed(2);
        var image = menu[weapon].image;
        var a = menu[weapon].a;

        var menuItem = document.createElement("li");
        var weaponImage = document.createElement("img");
        var weaponName = document.createElement("p");
        var weaponATK = document.createElement("p");
        var weaponA = document.createElement("p");
        weaponImage.src = image;
        weaponImage.alt = weapon;
        weaponName.textContent = weapon;
        weaponATK.textContent = "Damage deal: " + ATK;
        weaponA.textContent = a;
        menuItem.appendChild(weaponImage);
        menuItem.appendChild(weaponName);
        menuItem.appendChild(weaponATK);
        menuItem.appendChild(weaponA);
        menuList.appendChild(menuItem);
    }
    menuContainer.appendChild(menuList);
}
window.onload =  createWeaponMenu;