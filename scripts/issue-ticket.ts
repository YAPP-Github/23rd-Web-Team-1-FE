const ISSUE_TICKET_PREFIX_REGEX = new RegExp(`(LINKER)-\\d+`, 'g');

function getLinkerTicket(message: string) {
  const issueTicket = message.match(ISSUE_TICKET_PREFIX_REGEX) ?? [];

  return issueTicket;
}

const issueTask = async () => {
  const PR_NAME = process.argv.pop();

  if (PR_NAME == null) {
    console.log('PR_NAME이 없습니다');
    process.exit(1);
  }

  const ticket = getLinkerTicket(PR_NAME);

  if (ticket.length === 0) {
    console.error('PR Title에 ISSUE 티켓 정보가 없습니다.');
    process.exit(1);
  }
};

issueTask();
