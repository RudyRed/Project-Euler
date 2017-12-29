// Problem 15
// ==========
//
// Starting in the top left corner of a 2 * 2 grid, there are 6 routes
// (without backtracking) to the bottom right corner.
//
// How many routes are there through a 20 * 20 grid?


const getNumRoutes = function (sizeX, sizeY, numRoutes) {
  numRoutes = numRoutes || [];
  numRoutes[sizeX] = numRoutes[sizeX] || []

  if (numRoutes[sizeX][sizeY])  return numRoutes[sizeX][sizeY];

  if (sizeX == 0 || sizeY == 0) return 1;

  let routes = getNumRoutes(sizeX - 1, sizeY, numRoutes);
  routes += getNumRoutes(sizeX, sizeY - 1, numRoutes);

  numRoutes[sizeX][sizeY] = routes;

  return routes;
};

return getNumRoutes(20,20);
