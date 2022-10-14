var validPath = function(n, edges, source, destination) {
    let adjList = {},visited = [];
    for(let edge of edges){
        adjList[edge[0]]? adjList[edge[0]].push(edge[1]):
                                adjList[edge[0]] = [edge[1]];
        adjList[edge[1]]? adjList[edge[1]].push(edge[0]):
                                adjList[edge[1]] = [edge[0]];
    }
    const stack = [source];
    visited[source] = true;
    
    while(stack.length){
        const current = stack.pop();
        if(current === destination) return true;
        for(let neighbour of adjList[current]) {
            if(!visited[neighbour]){
                stack.push(neighbour);
                visited[neighbour] = true;
            }
        }
    }
    
    return false;
};

console.log(validPath(6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0 ,5));
console.log(validPath(3, [[0,1],[1,2],[2,0]], 0 ,2));