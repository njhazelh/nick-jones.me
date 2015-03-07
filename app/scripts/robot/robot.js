/**
 * This class should contains information about the world such as boundaries
 * and obstacles.
 */
RobotWorld = Backbone.Model.extend({

  url: "/data/robotWorld.json",

  /**
   *
   */
  initialize: function(options) {
    this.fetch();
  },

  /**
   * Get the neighbors of the current pose.
   */
  getNeighbors: function(pose) {
    var x, y,
        world = this.get('world')
        neighbors = [];

    // for each neighboring cell, if that cell is travelable, add it.
    for (x = pose.x - 1; x < pose.x + 2; x+=2) {
      for (y = pose.y - 1; y < pose.y + 2; y+=2) {
        if (x >= width || x < 0 || y >= height || y  < 0) {
          continue;
        } else if (world[x][y]){
          neighbors.append({x, y});
        }
      }
    }
  },

  isGoal: function(pose) {
    var goal = this.get('goal');
    return pose.x === goal.x && pose.y === goal.y;
  }
});

function findPath(start, goal) {
  var visited = [];

  while (true) {
    // TODO
  }
  return path;
}
