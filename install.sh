#!/bin/bash


function install(){

  rPass=""

	if [[ -d '/opt/oracle/12.1' ]]; then
		echo '======> 已安装过oracle驱动'
	else
		echo '======> 安装oracle驱动'
		wget http://static.shuaninfo.com/sqldev/oracle-client.tar.gz
		tar -zxf oracle-client.tar.gz -C /opt/
		echo 'export ORACLE_HOME=/opt/oracle/12.1/client64' >> /etc/profile
		echo 'export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:$ORACLE_HOME/lib' >> /etc/profile
		echo 'export PATH=$PATH:$ORACLE_HOME/bin' >> /etc/profile
		source /etc/profile
	fi

	if [[ `command -v redis-server` ]];then
		echo "======> 已有redis"

	else
		echo '======> 开始安装redis ...'
		yum install -y http://rpms.famillecollet.com/enterprise/remi-release-7.rpm
		yum --enablerepo=remi install -y redis
		sed -i 's/daemonize no/daemonize yes/g' /etc/redis.conf
		echo 'rename-command FLUSHALL ""' >> /etc/redis.conf
		echo 'rename-command CONFIG ""' >> /etc/redis.conf
		echo 'rename-command EVAL ""' >> /etc/redis.conf
		redis-server /etc/redis.conf
	fi

    mPass=""
	if [[ `command -v mysqld` ]];then
		echo "======> 已安装mysql"
	else
		echo '======> 开始安装mysql ...'
		wget http://repo.mysql.com/mysql57-community-release-el7-10.noarch.rpm
		rpm -Uvh mysql57-community-release-el7-10.noarch.rpm
		yum install  -y  mysql-community-server
		service mysqld start
		mysqlInitPass=`grep 'temporary password' /var/log/mysqld.log| awk '{print $11}'`
		echo "======> MYSQL安装密码 $mysqlInitPass"
        mysqlPass="sql&@DevFree2020"
        mysqladmin -P 3306 -u root -p${mysqlInitPass} password "$mysqlPass"
        echo "======> MYSQL密码修改为[ $mysqlPass ], 请记录"
        mPass=${mysqlPass}
    fi    

    echo "======> 初始化sqldev数据库"
	mysql -uroot -p${mPass}  -e "CREATE DATABASE IF NOT EXISTS sqldev DEFAULT CHARSET utf8 COLLATE utf8_general_ci;" 
	echo "======> 安装sqldev完成,请执行 sh start.sh 启动应用。"
}


install

