/*
* All Path from source to target
*/

var allPathsSourceTarget = function(graph) {
    let queue = [];
    let result = [];
    let nodes = graph.length;
    let currNode = 0;
    queue.push([currNode]);
    while(queue.length){
        let path = queue.shift();
        let currPath = graph[path[path.length - 1]];
        for(let i = 0; i<currPath.length; i++){
            let newPath = [...path];
            newPath.push(currPath[i]);
            (currPath[i] === graph.length-1)?result.push(newPath):
                                queue.push(newPath);
        }
    }
    return result;
};


// let graph = [[1,2],[3],[3],[]];
let graph = [[4,3,1],[3,2,4],[3],[4],[]];
console.log(allPathsSourceTarget(graph));