/**
 * Created by SERG on 02.06.2016.
 */
var oMsg = {
	corr: 'string', // guid or guid@group
	text: 'string',
	attach: 'object', // atatch object
	atime: 'string', // 64 bit string
	flags: 'number' // bitmask
};

var cmd = [
	{cmd:'send',    payload: {corr:'string', text:'string'}},
	{cmd:'read',    payload: {corr:'string', atime:'64 bitstring'}},
	{cmd:'roster',  payload: {modtime:'[number]'}},
	{cmd:'history', payload: {corr:'string', modtime:'[number]'}},
	{cmd:'typing',  payload: {corr:'string'}}
];

var notification = [
	{
		cmd: 'roster', data: [{
			id: 'string', // guid or group_id
			type: 'number', // user,group
			modtime: 'number' // last modification time for sort
		}]
	},
	{
		cmd: 'inbox', data: [oMsg]
	},
	{
		cmd:'history', data: [oMsg]
	},
	{
		cmd:'contact', data: [
		{
			guid: 'number', // user guid
			name: 'string', // full name
			pht: 'string', // Or binary, depends of implementation
			gender: 'number',
			online: 'number', // 0-offline, 1-invisible, 2-online
			status: 'string' // additional user status
		}
	]},
	{
		cmd:'status', data: [
		{ // only online or status also possible
			guid: 'number', // user guid
			online: 'number', // 0-offline, 1-invisible, 2-online
			status: 'string' // additional user status
		}
	]},
	{
		cmd:'group', data: [
		{
			id: 'number', // Glocbal group ID
			type: 'number', // normal,public,etc.. - default 0
			name: 'string', // group name
			avatar: 'string', // path to avatar ?????????
			members: [{
				guid: 'number', // member guid
				status: 'status' // 0-pending, 1-approved, 2-deleted
			}]
		}
	]},
	{cmd:'group.update', data: {id:'number'}},
	{cmd:'group.member', data: {act:'add|del',guid:'number'}},
	{cmd:'typing',  payload: {corr:'string',guid:'number'}}
];

// Нужно ли нам передавать отдельно группы и контакты
// Разичачать гуид и ид группы или единый

