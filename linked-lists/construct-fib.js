// construct fibonacci linked list

function solution(k) {
    if (!k) {
        return [];
    }
    let prev = new ListNode(0);
    let curr = new ListNode(1);
    const head = curr;
    let count = 1;
    
    while (count < k) {
        count++;
        curr.next = new ListNode(curr.value + prev.value);
        prev = curr;
        curr = curr.next;
    }
    return head;
}
