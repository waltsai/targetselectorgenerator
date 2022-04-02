var mainOptionResult = "";

function addItemInList(str, type) {
  var node = document.createElement("option");
  node.appendChild(document.createTextNode(str));
  node.setAttribute("value", type);
  document.getElementById("target-options-1").appendChild(node);
}

function removeAllItemInList() {
  for (var i = document.getElementById("target-options-1").children.length - 1; i >= 0; --i) {
    document.getElementById("target-options-1").children[i].remove();
  }
}

document.getElementById("target-using-variables").addEventListener("click", () => {
  if(document.getElementById("target-using-variables").checked) {
    removeAllItemInList();
    document.getElementById("target-options-2").disabled = true;
    addItemInList("所有的玩家", "all_players");
    addItemInList("所有的實體", "all_entities");
    addItemInList("最近的玩家", "nearest_player");
    addItemInList("隨機的玩家", "random_player");
  }
  else {
    removeAllItemInList();
    document.getElementById("target-options-2").disabled = false;
    addItemInList("所有的");
    addItemInList("最近的");
    addItemInList("最遠的");
    addItemInList("隨機的");
  }
});

document.getElementById("target-team-none").addEventListener("click", () => {
  if(document.getElementById("target-team-none").checked) {
    document.getElementById("target-team-bar").disabled = true;
  }
  else {
    document.getElementById("target-team-bar").disabled = false;
  }
});

document.getElementById("target-type-inverse").addEventListener("click", () => {
  if(document.getElementById("target-type-inverse").checked) {
    document.getElementById("target-type-add-inverse").disabled = false;
  }
  else {
    document.getElementById("target-type-add-inverse").disabled = true;
  }
});


document.getElementById("target-command-user").addEventListener("click", () => {
  if(document.getElementById("target-command-user").checked) {
    document.getElementById("target-using-variables").checked = true;
    document.getElementById("target-using-variables").disabled = true;
    document.getElementById("target-options-1").disabled = true;
    document.getElementById("target-options-2").disabled = true;
    document.getElementById("target-count").disabled = true;
    document.getElementById("target-count").value = '';
    document.getElementById("target-set-count").disabled = true;
    document.getElementById("target-set-count").checked = false;
  }
  else {
    document.getElementById("target-using-variables").checked = false;
        document.getElementById("target-using-variables").disabled = false;
    document.getElementById("target-options-1").disabled = false;
    document.getElementById("target-options-2").disabled = false;
    document.getElementById("target-count").disabled = false;
    document.getElementById("target-count").value = 1;
    document.getElementById("target-set-count").disabled = false;
    document.getElementById("target-set-count").checked = false;
  }
});

document.getElementById("target-type-inverse").addEventListener("click", () => {
  document.getElementById("target-type-set-inverse").disabled = !document.getElementById("target-type-inverse").checked;
  document.getElementById("target-type").value = "none";
  if(document.getElementById("target-type-inverse").checked) {
    document.getElementById("target-type-bar").value = "";
  }
});

document.getElementById("target-type-set-inverse").addEventListener("click", () => {
  if(!document.getElementById("target-type-set-inverse").disabled) {
    if(document.getElementById("target-type").value == 'none') {
      alert("你沒有選擇任何類型。");
    }
    else {
    if(document.getElementById("target-type-bar").value != "" && (document.getElementById("target-type-bar").value.toString().trim()[document.getElementById("target-type-bar").value.toString().trim().length - 1] != ',')) {
      document.getElementById("target-type-bar").value += ',';
    }
    document.getElementById("target-type-bar").value += "!" + document.getElementById("target-type").value;
    }
  }
});

document.getElementById("target-type").addEventListener("click", () => {
  if(document.getElementById("target-type-set-inverse").disabled) {
    if(document.getElementById("target-type").value != 'none') {
      document.getElementById("target-type-bar").value = document.getElementById("target-type").value;
    }
  }
});


document.getElementById("target-mode-inverse").addEventListener("click", () => {
  document.getElementById("target-mode-set-inverse").disabled = !document.getElementById("target-mode-inverse").checked;
  document.getElementById("target-mode").value = "none";
  if(document.getElementById("target-mode-inverse").checked) {
    document.getElementById("target-mode-bar").value = "";
  }
});

document.getElementById("target-mode-set-inverse").addEventListener("click", () => {
  if(!document.getElementById("target-mode-inverse").disabled) {
    if(document.getElementById("target-mode").value == 'none') {
      alert("你沒有選擇任何模式。");
    }
    else {
    if(document.getElementById("target-mode-bar").value != "" && (document.getElementById("target-mode-bar").value.toString().trim()[document.getElementById("target-mode-bar").value.toString().trim().length - 1] != ',')) {
      document.getElementById("target-mode-bar").value += ',';
    }
    document.getElementById("target-mode-bar").value += "!" + document.getElementById("target-mode").value;
    }
  }
});

document.getElementById("target-mode").addEventListener("click", () => {
  if(document.getElementById("target-mode-set-inverse").disabled) {
    if(document.getElementById("target-mode").value != 'none') {
      document.getElementById("target-mode-bar").value = document.getElementById("target-mode").value;
    }
  }
});

function set_none_and_every_checkbox(str) {
  document.getElementById("target-" + str + "-none").addEventListener("click", () => {
  document.getElementById("target-" + str + "-bar").disabled = document.getElementById("target-" + str + "-none").checked || document.getElementById("target-" + str + "-every").checked;
  if(document.getElementById("target-" + str + "-every").checked) {
    document.getElementById("target-" + str + "-every").checked = false;
  }
});
document.getElementById("target-" + str + "-every").addEventListener("click", () => {
  document.getElementById("target-" + str + "-bar").disabled = document.getElementById("target-" + str + "-none").checked || document.getElementById("target-" + str + "-every").checked;
  if(document.getElementById("target-" + str + "-none").checked) {
    document.getElementById("target-" + str + "-none").checked = false;
  }
});
}

set_none_and_every_checkbox("team");
set_none_and_every_checkbox("tag");

function print_all_value(dict) {
  for (let index in Array.from(dict.keys())) {
    console.log(index + ": " + dict.get(index));
  }
}

function remove_all_nonnull_datas(dict) {
  var list = Array.from(dict.keys());
  for (let index in Array.from(dict.keys())) {
    console.log(dict.get(list[index]) == null);
    if(dict.get(list[index]) == null) {
      dict.delete(list[index]);
    }
  }
  console.log(dict);
}

function generate(dict) {
  var word = dict.get("root");
  remove_all_nonnull_datas(dict);
  dict.delete("root");
  if(dict.keys().length == 0) {
    return word;
  } else {
    word += "[";
  }
  for (let index = 0; index < dict.size; index++) {
    var keys = Array.from(dict.keys());
    if(keys[index] != "root" && dict.get(keys[index]) != null) {
      if(dict.get(keys[index]) != " ") {
        word += keys[index] + "=" + dict.get(keys[index]);
      }
    
      if(index < keys.length - 1) {
        word += ",";
      }
    }
  }
  word += "]";
  return word;
}

function setup_all_value_to_null(dict) {
  dict.set("root", null);
  dict.set("sort", null);
  dict.set("limit", null);
  dict.set("x1", null);
  dict.set("y1", null);
  dict.set("z1", null);
  dict.set("dx", null);
  dict.set("dy", null);
  dict.set("dz", null);
  dict.set("distance-min", null);
  dict.set("distance-max", null);
  dict.set("x-rotation", null);
  dict.set("y-rotation", null);
  dict.set("level", null);
  dict.set("gamemode", null);
  dict.set("advancements", null);
  dict.set("type", null);
  dict.set("team", null);
  dict.set("tag", null);
  dict.set("name", null);
  dict.set("predicate", null);
  dict.set("nbt", null);
}

function set(dict, key, value) {
  if(value == "" || value == null || value == "..") {
    dict.set(key, null);
  } else {
    dict.set(key, value);
  }
}

document.getElementById("generate").addEventListener("click", () => {
  var map = new Map();
  //setup_all_value_to_null(map);

  if(document.getElementById("target-command-user").checked) {
    set(map, "root", "@s");
  } else if(document.getElementById("target-using-variables").checked) {
    if(document.getElementById("target-options-1").value == "all_players")
    {
      set(map, "root", "@a");
    }
    if(document.getElementById("target-options-1").value == "all_entities")     {
      set(map, "root", "@e");
    }
    if(document.getElementById("target-options-1").value =="nearest_player")    {
      set(map, "root", "@p");
    }
    if(document.getElementById("target-options-1").value == "random_player")    {
      set(map, "root", "@r");
    }
  } else {
    if(document.getElementById("target-options-2").value == "player") {
      set(map, "root", "@a");
    } else {
      set(map, "root", "@e");
    }

    set(map, "sort", document.getElementById("target-options-1").value);
  }
  if(document.getElementById("target-count").value != -1) {
    set(map, "limit", document.getElementById("target-count").value);
  }

  set(map, "x1", document.getElementById("target-pos-x1").value);
  set(map, "y1", document.getElementById("target-pos-y1").value);
  set(map, "z1", document.getElementById("target-pos-z1").value);

  if(document.getElementById("target-pos-get-2ndpos").checked) {
    set(map, "dx", document.getElementById("target-pos-x2").value - document.getElementById("target-pos-x1").value);
    set(map, "dy", document.getElementById("target-pos-y2").value - document.getElementById("target-pos-y1").value);
    set(map, "dz", document.getElementById("target-pos-z2").value - document.getElementById("target-pos-z1").value);
  } else if(document.getElementById("target-pos-get-distance").checked) {
    set(map, "distance", document.getElementById("target-pos-dismin").value + ".." + document.getElementById("target-pos-dismax").value);
  }
  if(document.getElementById("target-rot-xmin").value != "" || document.getElementById("target-rot-xmax").value != "") {
      set(map, "x-rotation", document.getElementById("target-rot-xmin").value + ".." + document.getElementById("target-rot-xmax").value);
  }

  if(document.getElementById("target-rot-ymin").value != "" || document.getElementById("target-rot-ymax").value != "") {
      set(map, "y-rotation", document.getElementById("target-rot-ymin").value + ".." + document.getElementById("target-rot-ymax").value);
  }

  if(document.getElementById("target-exp-min").value != "" || document.getElementById("target-exp-max").value != "") {
      set(map, "level", document.getElementById("target-exp-min").value + ".." + document.getElementById("target-exp-max").value);
  }

  set(map, "gamemode", document.getElementById("target-mode-bar").value);
  if(document.getElementById("target-adv").value != "none") {
      set(map, "advancements", "{" + document.getElementById("target-adv").value + "=" + !document.getElementById("target-adv-inverse").checked + "}");
  }
  set(map, "type", document.getElementById("target-type-bar").value);
  if(document.getElementById("target-team-none").checked){
    set(map, "team", "!");
  } else if(document.getElementById("target-team-every").checked) {
    set(map, "team", " ");
  } else {
    set(map, "team", document.getElementById("target-team-bar").value);
  }

  if(document.getElementById("target-tag-none").checked){
    set(map, "tag", "!");
  } else if(document.getElementById("target-tag-every").checked) {
    set(map, "tag", " ");
  } else {
    set(map, "tag", document.getElementById("target-tag-bar").value);
  }
  set(map, "name", document.getElementById("target-name-bar").value);
  set(map, "predicate", document.getElementById("target-predicate-bar").value);
  set(map, "nbt", document.getElementById("target-nbt").value);
  console.log(map);
  document.getElementById("generated_codes").value = generate(map);
});