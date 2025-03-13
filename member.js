function skillsMember() {
  var member = this;
  var skills = [];
  this.addSkill = function(skill) {
    skills.push(skill);
  };
  this.getSkills = function() {
    return skills;
  };
}